/**
 * Print Dialog Navigation Handler
 * Handles navigation back when print dialog is closed
 */

(function() {
    'use strict';

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

        let printDialogOpen = false;
        let checkInterval;

        // Method 1: Listen for beforeprint and afterprint events
        window.addEventListener('beforeprint', function() {
            printDialogOpen = true;
            console.log('Print dialog opened');
        });

        window.addEventListener('afterprint', function() {
            printDialogOpen = false;
            console.log('Print dialog closed, navigating back...');
            setTimeout(navigateBack, 100); // Small delay to ensure dialog is fully closed
        });

        // Method 2: Media query change detection (backup method)
        if (window.matchMedia) {
            const mediaQueryList = window.matchMedia('print');
            mediaQueryList.addEventListener('change', function(mql) {
                if (!mql.matches && printDialogOpen) {
                    console.log('Print media query changed, navigating back...');
                    setTimeout(navigateBack, 100);
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
                console.log('Window regained focus after print dialog, navigating back...');
                printDialogOpen = false;
                setTimeout(navigateBack, 500); // Longer delay for focus method
            }
            windowFocused = true;
        });

        // Method 4: Detection only - mdBook already triggers print
        // Just set up detection without triggering print ourselves
        if (isPrintPage()) {
            console.log('Print page detected, monitoring for dialog close...');
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupPrintDialogHandler);
    } else {
        setupPrintDialogHandler();
    }

    // Add manual back button for print pages
    function addBackButton() {
        if (!isPrintPage()) {
            return;
        }

        // Create back button
        const backButton = document.createElement('button');
        backButton.innerHTML = '← Back to Manual';
        backButton.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 9999;
            background: #2c5282;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        `;

        backButton.addEventListener('click', navigateBack);
        backButton.addEventListener('mouseover', function() {
            this.style.background = '#2a4d79';
        });
        backButton.addEventListener('mouseout', function() {
            this.style.background = '#2c5282';
        });

        // Hide button when printing
        const printStyle = document.createElement('style');
        printStyle.textContent = '@media print { .manual-back-button { display: none !important; } }';
        document.head.appendChild(printStyle);
        backButton.className = 'manual-back-button';

        document.body.appendChild(backButton);
    }

    // Add back button when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addBackButton);
    } else {
        addBackButton();
    }

})();