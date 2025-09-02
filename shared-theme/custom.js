/**
 * Sweet Robo Manuals - Custom JavaScript
 * Combines print navigation handling and conditional content features
 */

(function() {
    'use strict';

    /* ========================================
       Print Dialog Navigation Handler
       ======================================== */

    // Shared variable for timeout ID
    let navigationTimeoutId = null;

    // Check if we're on a print page
    function isPrintPage() {
        return window.location.pathname.includes('print.html') || 
               document.querySelector('body.print') !== null ||
               window.location.hash === '#print';
    }

    // Navigate back with fallbacks
    function navigateBack() {
        try {
            // First try: go back in history if there's a previous page
            if (window.history.length > 1) {
                window.history.back();
                return;
            }
        } catch (e) {
            console.log('History.back() failed, trying alternative navigation');
        }

        try {
            // Second try: go to parent directory (remove print.html)
            const currentPath = window.location.pathname;
            const parentPath = currentPath.replace('/print.html', '/');
            if (parentPath !== currentPath) {
                window.location.href = parentPath;
                return;
            }
        } catch (e) {
            console.log('Parent navigation failed, trying home navigation');
        }

        try {
            // Final fallback: go to root
            const rootPath = window.location.origin + '/';
            window.location.href = rootPath;
        } catch (e) {
            console.log('All navigation methods failed');
        }
    }

    // Handle print dialog close detection
    function setupPrintDialogHandler() {
        if (!isPrintPage()) {
            return;
        }

        // Check if auto-return is enabled (default: true)
        const autoReturn = localStorage.getItem('sweetrobo-print-autoreturn') !== 'false';

        let printDialogOpen = false;
        let checkInterval;

        // Method 1: Listen for beforeprint and afterprint events
        window.addEventListener('beforeprint', function() {
            printDialogOpen = true;
            console.log('Print dialog opened');
        });

        window.addEventListener('afterprint', function() {
            printDialogOpen = false;
            const currentAutoReturn = localStorage.getItem('sweetrobo-print-autoreturn') !== 'false';
            if (currentAutoReturn) {
                console.log('Print dialog closed, navigating back in 4 seconds...');
                navigationTimeoutId = setTimeout(navigateBack, 4000); // 4 second delay
            } else {
                console.log('Print dialog closed, auto-return disabled');
            }
        });

        // Method 2: Media query change detection (backup method)
        if (window.matchMedia) {
            const mediaQueryList = window.matchMedia('print');
            mediaQueryList.addEventListener('change', function(mql) {
                if (!mql.matches && printDialogOpen) {
                    const currentAutoReturn = localStorage.getItem('sweetrobo-print-autoreturn') !== 'false';
                    if (currentAutoReturn) {
                        console.log('Print media query changed, navigating back in 4 seconds...');
                        navigationTimeoutId = setTimeout(navigateBack, 4000); // 4 second delay
                    }
                }
            });
        }

        // Method 3: Focus detection fallback
        let windowFocused = true;
        
        window.addEventListener('blur', function() {
            windowFocused = false;
            // Assume print dialog opened when window loses focus on print page
            if (isPrintPage()) {
                printDialogOpen = true;
            }
        });

        window.addEventListener('focus', function() {
            if (!windowFocused && printDialogOpen && isPrintPage()) {
                const currentAutoReturn = localStorage.getItem('sweetrobo-print-autoreturn') !== 'false';
                if (currentAutoReturn) {
                    console.log('Window regained focus after print dialog, navigating back in 4 seconds...');
                    printDialogOpen = false;
                    navigationTimeoutId = setTimeout(navigateBack, 4000); // 4 second delay
                }
            }
            windowFocused = true;
        });

        // Method 4: Detection only - mdBook already triggers print
        // Just set up detection without triggering print ourselves
        if (isPrintPage()) {
            console.log('Print page detected, monitoring for dialog close...');
        }
    }

    // Add manual back button and auto-return toggle for print pages
    function addBackButton() {
        if (!isPrintPage()) {
            return;
        }

        // Create container for controls
        const controlContainer = document.createElement('div');
        controlContainer.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 9999;
            background: white;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;

        // Create back button
        const backButton = document.createElement('button');
        backButton.innerHTML = '← Back to Manual';
        backButton.style.cssText = `
            background: #2c5282;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            margin-bottom: 10px;
            display: block;
            width: 100%;
        `;

        backButton.addEventListener('click', navigateBack);
        backButton.addEventListener('mouseover', function() {
            this.style.background = '#2a4d79';
        });
        backButton.addEventListener('mouseout', function() {
            this.style.background = '#2c5282';
        });

        // Create auto-return toggle
        const autoReturnLabel = document.createElement('label');
        autoReturnLabel.style.cssText = `
            display: flex;
            align-items: center;
            font-size: 13px;
            color: #333;
            cursor: pointer;
        `;
        
        const autoReturnCheckbox = document.createElement('input');
        autoReturnCheckbox.type = 'checkbox';
        autoReturnCheckbox.checked = localStorage.getItem('sweetrobo-print-autoreturn') !== 'false';
        autoReturnCheckbox.style.cssText = `
            margin-right: 5px;
            cursor: pointer;
        `;
        
        autoReturnCheckbox.addEventListener('change', function() {
            localStorage.setItem('sweetrobo-print-autoreturn', this.checked ? 'true' : 'false');
            console.log('Auto-return after print:', this.checked ? 'enabled' : 'disabled');
            
            // Cancel any pending navigation if unchecked
            if (!this.checked && navigationTimeoutId) {
                clearTimeout(navigationTimeoutId);
                navigationTimeoutId = null;
                console.log('Cancelled pending navigation');
            }
        });
        
        autoReturnLabel.appendChild(autoReturnCheckbox);
        autoReturnLabel.appendChild(document.createTextNode('Auto-return after printing'));

        // Add elements to container
        controlContainer.appendChild(backButton);
        controlContainer.appendChild(autoReturnLabel);

        // Hide controls when printing
        const printStyle = document.createElement('style');
        printStyle.textContent = '@media print { .manual-print-controls { display: none !important; } }';
        document.head.appendChild(printStyle);
        controlContainer.className = 'manual-print-controls';

        document.body.appendChild(controlContainer);
    }

    /* ========================================
       Conditional Content Handler
       ======================================== */

    // Parse URL parameters
    function getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const result = {};
        for (const [key, value] of params) {
            result[key] = value === 'true' || value === '1' || value === '';
        }
        return result;
    }

    // Get stored preferences from localStorage
    function getStoredPreferences() {
        try {
            const stored = localStorage.getItem('sweetrobo-conditional-views');
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            console.error('Failed to load preferences:', e);
            return {};
        }
    }

    // Save preferences to localStorage
    function savePreferences(params) {
        try {
            localStorage.setItem('sweetrobo-conditional-views', JSON.stringify(params));
        } catch (e) {
            console.error('Failed to save preferences:', e);
        }
    }

    // Merge URL params with stored preferences (URL params take precedence)
    function getEffectiveParams() {
        const urlParams = getUrlParams();
        const storedParams = getStoredPreferences();
        
        // If URL has any view params, use URL params and update storage
        const hasUrlViewParams = ['dev', 'internal', 'technician', 'operator', 'customer', 'controls', 'debug'].some(key => key in urlParams);
        
        if (hasUrlViewParams) {
            // URL params override stored preferences
            const merged = { ...storedParams, ...urlParams };
            savePreferences(merged);
            return merged;
        } else {
            // Use stored preferences when no URL params present
            return { ...storedParams, ...urlParams };
        }
    }

    // Apply conditional visibility by adding classes to body
    function applyConditionalContent() {
        const params = getEffectiveParams();
        
        // List of all possible conditional view parameters
        const viewParams = ['dev', 'internal', 'technician', 'operator', 'customer', 'controls', 'debug'];
        
        // Add or remove classes based on parameter presence
        viewParams.forEach(key => {
            if (params[key]) {
                document.body.classList.add(`show-${key}`);
            } else {
                document.body.classList.remove(`show-${key}`);
            }
        });

        // Apply role-based content
        applyRoleBasedContent(params);
    }

    // Role-based content handling
    function applyRoleBasedContent(params) {
        // Common roles
        const roles = {
            'technician': params.technician || params.service,
            'operator': params.operator || params.staff,
            'customer': params.customer || params.public,
            'internal': params.internal || params.debug
        };

        // Apply role classes to body for CSS targeting
        Object.keys(roles).forEach(role => {
            if (roles[role]) {
                document.body.classList.add(`role-${role}`);
            } else {
                document.body.classList.remove(`role-${role}`);
            }
        });

        // Handle role-specific elements
        document.querySelectorAll('[data-role]').forEach(element => {
            const requiredRole = element.getAttribute('data-role');
            if (roles[requiredRole]) {
                element.style.display = '';
                element.classList.add('role-visible');
            } else {
                element.style.display = 'none';
                element.classList.remove('role-visible');
            }
        });
    }

    // Add toggle controls for easy switching
    function addToggleControls() {
        // Check if controls should be shown
        const params = getEffectiveParams();
        if (!params.controls && !params.debug) return;
        
        // Don't require conditional elements to show controls
        // This allows controls to persist across all pages

        // Create control panel
        const controlPanel = document.createElement('div');
        controlPanel.className = 'conditional-controls';
        controlPanel.innerHTML = `
            <div class="control-header">Content Controls</div>
            <div class="control-options">
                <label><input type="checkbox" data-param="dev"> Dev View</label>
                <label><input type="checkbox" data-param="internal"> Internal View</label>
                <label><input type="checkbox" data-param="technician"> Technician View</label>
                <label><input type="checkbox" data-param="operator"> Operator View</label>
                <label><input type="checkbox" data-param="customer"> Customer View</label>
            </div>
            <div class="control-footer">
                <button class="hide-controls-btn">Hide Controls</button>
                <div class="reopen-hint">To reopen: add ?controls=true to URL</div>
            </div>
        `;

        // Style the control panel
        const style = document.createElement('style');
        style.textContent = `
            .conditional-controls {
                position: fixed;
                top: 70px;
                right: 20px;
                background: #f8f9fa;
                border: 1px solid #dee2e6;
                border-radius: 8px;
                padding: 15px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                z-index: 1000;
                font-size: 14px;
                max-width: 200px;
            }
            .control-header {
                font-weight: bold;
                margin-bottom: 10px;
                color: #2c5282;
            }
            .control-options label {
                display: block;
                margin: 5px 0;
                cursor: pointer;
            }
            .control-options input {
                margin-right: 5px;
            }
            .control-footer {
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #dee2e6;
            }
            .hide-controls-btn {
                background: #dc3545;
                color: white;
                border: none;
                padding: 6px 12px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 13px;
                width: 100%;
                margin-bottom: 8px;
            }
            .hide-controls-btn:hover {
                background: #c82333;
            }
            .reopen-hint {
                font-size: 11px;
                color: #666;
                text-align: center;
                line-height: 1.3;
            }
            @media print {
                .conditional-controls {
                    display: none !important;
                }
            }
            @media (max-width: 768px) {
                .conditional-controls {
                    top: auto;
                    bottom: 20px;
                    right: 20px;
                }
            }
        `;
        document.head.appendChild(style);

        // Set initial checkbox states
        controlPanel.querySelectorAll('input[data-param]').forEach(input => {
            const param = input.getAttribute('data-param');
            input.checked = params[param] || false;
        });

        // Handle checkbox changes
        controlPanel.addEventListener('change', (e) => {
            if (e.target.matches('input[data-param]')) {
                const param = e.target.getAttribute('data-param');
                const currentParams = getEffectiveParams();
                
                if (e.target.checked) {
                    currentParams[param] = true;
                } else {
                    delete currentParams[param];
                }

                // Save to localStorage
                savePreferences(currentParams);
                
                // Clean URL (remove URL params since we're using localStorage)
                const newUrl = new URL(window.location);
                newUrl.search = '';
                window.history.replaceState({}, '', newUrl);
                
                // Apply changes
                applyConditionalContent();
            }
        });

        // Handle hide button click
        const hideButton = controlPanel.querySelector('.hide-controls-btn');
        hideButton.addEventListener('click', () => {
            // Remove controls from preferences
            const currentParams = getEffectiveParams();
            delete currentParams.controls;
            delete currentParams.debug;
            savePreferences(currentParams);
            
            // Remove the control panel
            controlPanel.remove();
            
            // Show a temporary notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #333;
                color: white;
                padding: 10px 20px;
                border-radius: 5px;
                font-size: 14px;
                z-index: 10000;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            `;
            notification.textContent = 'Controls hidden. Add ?controls=true to URL to reopen.';
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.remove();
            }, 3000);
        });

        document.body.appendChild(controlPanel);
    }

    /* ========================================
       Print Page Modifications
       ======================================== */
    
    function modifyPrintPage() {
        // This works on all pages, not just print.html
        
        // Find and remove introduction chapter from print view
        window.addEventListener('beforeprint', function() {
            // For print.html, hide the entire chapter
            if (isPrintPage()) {
                const chapters = document.querySelectorAll('.chapter');
                chapters.forEach(chapter => {
                    if (chapter.querySelector('.introduction-content')) {
                        chapter.style.display = 'none';
                        // Also hide any page breaks after it
                        const nextSibling = chapter.nextElementSibling;
                        if (nextSibling && nextSibling.classList.contains('page-break')) {
                            nextSibling.style.display = 'none';
                        }
                    }
                });
            }
            
            // Add a class to body to trigger CSS-based hiding
            document.body.classList.add('printing');
        });
        
        // Restore visibility after print (for screen viewing)
        window.addEventListener('afterprint', function() {
            document.body.classList.remove('printing');
            
            if (isPrintPage()) {
                const chapters = document.querySelectorAll('.chapter');
                chapters.forEach(chapter => {
                    if (chapter.querySelector('.introduction-content')) {
                        chapter.style.display = '';
                        const nextSibling = chapter.nextElementSibling;
                        if (nextSibling && nextSibling.classList.contains('page-break')) {
                            nextSibling.style.display = '';
                        }
                    }
                });
            }
        });
    }

    /* ========================================
       Hide Development-Only Content
       ======================================== */
    
    function hideDevOnlyContent() {
        // Check if we're in development environment
        // Development is indicated by:
        // 1. Port 4001-4003 (manual dev servers)
        // 2. Port 4000 (main index dev server)
        // 3. NOT having /SweetRoboManuals/ in the path (GitHub Pages)
        const port = window.location.port;
        const isDev = (port === '4001' || port === '4002' || port === '4003' || port === '4000') ||
                      (!window.location.pathname.includes('/SweetRoboManuals/') && window.location.hostname === 'localhost');
        
        if (!isDev) {
            // Hide Styling Demo from sidebar in production
            const sidebarLinks = document.querySelectorAll('.sidebar a, .nav-chapters a');
            sidebarLinks.forEach(link => {
                const href = link.getAttribute('href');
                const text = link.textContent || link.innerText;
                
                // Check if this is the Styling Demo link
                if (href && (href.includes('styling-demo') || text.includes('Styling Demo'))) {
                    // Hide the parent <li> element if it exists, otherwise hide the link
                    const parentLi = link.closest('li');
                    if (parentLi) {
                        parentLi.style.display = 'none';
                    } else {
                        link.style.display = 'none';
                    }
                }
            });
            
            // Also hide from mobile navigation
            const mobileLinks = document.querySelectorAll('.mobile-nav-chapters a');
            mobileLinks.forEach(link => {
                const href = link.getAttribute('href');
                const text = link.textContent || link.innerText;
                
                if (href && (href.includes('styling-demo') || text.includes('Styling Demo'))) {
                    const parentLi = link.closest('li');
                    if (parentLi) {
                        parentLi.style.display = 'none';
                    } else {
                        link.style.display = 'none';
                    }
                }
            });
        }
    }

    /* ========================================
       Initialize All Features
       ======================================== */

    function initializeAll() {
        // Print handling
        setupPrintDialogHandler();
        addBackButton();
        modifyPrintPage();
        
        // Conditional content
        applyConditionalContent();
        addToggleControls();
        
        // Hide dev-only content
        hideDevOnlyContent();

        // Re-apply on URL change (for single-page navigation)
        window.addEventListener('popstate', applyConditionalContent);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
        initializeAll();
    }

    // Expose API for programmatic control
    window.ConditionalContent = {
        refresh: applyConditionalContent,
        showElement: (element) => {
            element.style.display = '';
            element.classList.add('conditional-visible');
        },
        hideElement: (element) => {
            element.style.display = 'none';
            element.classList.remove('conditional-visible');
        },
        getParams: getUrlParams
    };

})();