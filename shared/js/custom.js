/**
 * Sweet Robo Manuals - Custom JavaScript
 * Combines print navigation handling and conditional content features
 */

(function () {
  ("use strict");

  /* ========================================
       Print Dialog Navigation Handler
       ======================================== */

  // Shared variable for timeout ID
  let navigationTimeoutId = null;

  // Check if we're on a print page
  function isPrintPage() {
    return (
      window.location.pathname.includes("print.html") ||
      document.querySelector("body.print") !== null ||
      window.location.hash === "#print"
    );
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
      console.log("History.back() failed, trying alternative navigation");
    }

    try {
      // Second try: go to parent directory (remove print.html)
      const currentPath = window.location.pathname;
      const parentPath = currentPath.replace("/print.html", "/");
      if (parentPath !== currentPath) {
        window.location.href = parentPath;
        return;
      }
    } catch (e) {
      console.log("Parent navigation failed, trying home navigation");
    }

    try {
      // Final fallback: go to root
      const rootPath = window.location.origin + "/";
      window.location.href = rootPath;
    } catch (e) {
      console.log("All navigation methods failed");
    }
  }

  // Handle print dialog close detection
  function setupPrintDialogHandler() {
    if (!isPrintPage()) {
      return;
    }

    // Check if auto-return is enabled (default: true)
    const autoReturn =
      localStorage.getItem("sweetrobo-print-autoreturn") !== "false";

    let printDialogOpen = false;
    let checkInterval;

    // Method 1: Listen for beforeprint and afterprint events
    window.addEventListener("beforeprint", function () {
      printDialogOpen = true;
      console.log("Print dialog opened");
    });

    window.addEventListener("afterprint", function () {
      printDialogOpen = false;
      const currentAutoReturn =
        localStorage.getItem("sweetrobo-print-autoreturn") !== "false";
      if (currentAutoReturn) {
        console.log("Print dialog closed, navigating back in 4 seconds...");
        navigationTimeoutId = setTimeout(navigateBack, 4000); // 4 second delay
      } else {
        console.log("Print dialog closed, auto-return disabled");
      }
    });

    // Method 2: Media query change detection (backup method)
    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia("print");
      mediaQueryList.addEventListener("change", function (mql) {
        if (!mql.matches && printDialogOpen) {
          const currentAutoReturn =
            localStorage.getItem("sweetrobo-print-autoreturn") !== "false";
          if (currentAutoReturn) {
            console.log(
              "Print media query changed, navigating back in 4 seconds...",
            );
            navigationTimeoutId = setTimeout(navigateBack, 4000); // 4 second delay
          }
        }
      });
    }

    // Method 3: Focus detection fallback
    let windowFocused = true;

    window.addEventListener("blur", function () {
      windowFocused = false;
      // Assume print dialog opened when window loses focus on print page
      if (isPrintPage()) {
        printDialogOpen = true;
      }
    });

    window.addEventListener("focus", function () {
      if (!windowFocused && printDialogOpen && isPrintPage()) {
        const currentAutoReturn =
          localStorage.getItem("sweetrobo-print-autoreturn") !== "false";
        if (currentAutoReturn) {
          console.log(
            "Window regained focus after print dialog, navigating back in 4 seconds...",
          );
          printDialogOpen = false;
          navigationTimeoutId = setTimeout(navigateBack, 4000); // 4 second delay
        }
      }
      windowFocused = true;
    });

    // Method 4: Detection only - mdBook already triggers print
    // Just set up detection without triggering print ourselves
    if (isPrintPage()) {
      console.log("Print page detected, monitoring for dialog close...");
    }
  }

  // Add manual back button and auto-return toggle for print pages
  function addBackButton() {
    if (!isPrintPage()) {
      return;
    }

    // Create container for controls
    const controlContainer = document.createElement("div");
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
    const backButton = document.createElement("button");
    backButton.innerHTML = "← Back to Manual";
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

    backButton.addEventListener("click", navigateBack);
    backButton.addEventListener("mouseover", function () {
      this.style.background = "#2a4d79";
    });
    backButton.addEventListener("mouseout", function () {
      this.style.background = "#2c5282";
    });

    // Create auto-return toggle
    const autoReturnLabel = document.createElement("label");
    autoReturnLabel.style.cssText = `
            display: flex;
            align-items: center;
            font-size: 13px;
            color: #333;
            cursor: pointer;
        `;

    const autoReturnCheckbox = document.createElement("input");
    autoReturnCheckbox.type = "checkbox";
    autoReturnCheckbox.checked =
      localStorage.getItem("sweetrobo-print-autoreturn") !== "false";
    autoReturnCheckbox.style.cssText = `
            margin-right: 5px;
            cursor: pointer;
        `;

    autoReturnCheckbox.addEventListener("change", function () {
      localStorage.setItem(
        "sweetrobo-print-autoreturn",
        this.checked ? "true" : "false",
      );
      console.log(
        "Auto-return after print:",
        this.checked ? "enabled" : "disabled",
      );

      // Cancel any pending navigation if unchecked
      if (!this.checked && navigationTimeoutId) {
        clearTimeout(navigationTimeoutId);
        navigationTimeoutId = null;
        console.log("Cancelled pending navigation");
      }
    });

    autoReturnLabel.appendChild(autoReturnCheckbox);
    autoReturnLabel.appendChild(
      document.createTextNode("Auto-return after printing"),
    );

    // Add elements to container
    controlContainer.appendChild(backButton);
    controlContainer.appendChild(autoReturnLabel);

    // Set class for print controls
    controlContainer.className = "manual-print-controls";

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
      result[key] = value === "true" || value === "1" || value === "";
    }
    return result;
  }

  // Get stored preferences from localStorage
  function getStoredPreferences() {
    try {
      const stored = localStorage.getItem("sweetrobo-conditional-views");
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error("Failed to load preferences:", e);
      return {};
    }
  }

  // Save preferences to localStorage
  function savePreferences(params) {
    try {
      localStorage.setItem(
        "sweetrobo-conditional-views",
        JSON.stringify(params),
      );
    } catch (e) {
      console.error("Failed to save preferences:", e);
    }
  }

  // Merge URL params with stored preferences (URL params take precedence)
  function getEffectiveParams() {
    const urlParams = getUrlParams();
    const storedParams = getStoredPreferences();

    // If URL has any view params, use URL params and update storage
    const hasUrlViewParams = [
      "dev",
      "internal",
      "technician",
      "operator",
      "customer",
      "controls",
      "debug",
    ].some((key) => key in urlParams);

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
    const viewParams = [
      "dev",
      "internal",
      "technician",
      "operator",
      "customer",
      "controls",
      "debug",
    ];

    // Add or remove classes based on parameter presence
    viewParams.forEach((key) => {
      if (params[key]) {
        document.body.classList.add(`show-${key}`);
      } else {
        document.body.classList.remove(`show-${key}`);
      }
    });

    // Special handling for print-condensed content visibility
    if (params.showPrintCondensed) {
      document.body.classList.add("show-print-content");
    } else {
      document.body.classList.remove("show-print-content");
    }

    // Special handling for print preview mode
    if (params.printPreview) {
      document.body.classList.add("print-preview");
      // Also add print-mode class for additional styling
      document.body.classList.add("print-mode");
      // Apply print styles dynamically
      applyPrintStyles(true);
    } else {
      document.body.classList.remove("print-preview");
      // Only remove print-mode if we're not on actual print page
      if (!isPrintPage()) {
        document.body.classList.remove("print-mode");
      }
      // Remove print styles
      applyPrintStyles(false);
    }

    // Apply role-based content
    applyRoleBasedContent(params);
  }

  // Role-based content handling
  function applyRoleBasedContent(params) {
    // Common roles
    const roles = {
      technician: params.technician || params.service,
      operator: params.operator || params.staff,
      customer: params.customer || params.public,
      internal: params.internal || params.debug,
    };

    // Apply role classes to body for CSS targeting
    Object.keys(roles).forEach((role) => {
      if (roles[role]) {
        document.body.classList.add(`role-${role}`);
      } else {
        document.body.classList.remove(`role-${role}`);
      }
    });

    // Handle role-specific elements
    document.querySelectorAll("[data-role]").forEach((element) => {
      const requiredRole = element.getAttribute("data-role");
      if (roles[requiredRole]) {
        element.style.display = "";
        element.classList.add("role-visible");
      } else {
        element.style.display = "none";
        element.classList.remove("role-visible");
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
    const controlPanel = document.createElement("div");
    controlPanel.className = "conditional-controls";
    controlPanel.innerHTML = `
            <div class="control-header">Content Controls</div>
            <div class="control-options">
                <label><input type="checkbox" data-param="dev"> Dev View</label>
                <label><input type="checkbox" data-param="internal"> Internal View</label>
                <label><input type="checkbox" data-param="technician"> Technician View</label>
                <label><input type="checkbox" data-param="operator"> Operator View</label>
                <label><input type="checkbox" data-param="customer"> Customer View</label>
                <label style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #dee2e6;">
                    <input type="checkbox" data-param="showPrintCondensed"> Show Print-Only Content
                </label>
                ${
                  isPrintPage()
                    ? `<label style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #dee2e6;">
                    <input type="checkbox" data-param="printPreview"> Preview Print Layout
                </label>`
                    : ""
                }
            </div>
            <div class="control-footer">
                <button class="hide-controls-btn">Hide Controls</button>
                <div class="reopen-hint">To reopen: add ?controls=true to URL</div>
            </div>
        `;

    // Style the control panel
    const style = document.createElement("style");
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
            @media screen and (max-width: 768px) {
                .conditional-controls {
                    top: auto;
                    bottom: 20px;
                    right: 20px;
                }
            }
        `;
    document.head.appendChild(style);

    // Set initial checkbox states
    controlPanel.querySelectorAll("input[data-param]").forEach((input) => {
      const param = input.getAttribute("data-param");
      input.checked = params[param] || false;
    });

    // Handle checkbox changes
    controlPanel.addEventListener("change", (e) => {
      if (e.target.matches("input[data-param]")) {
        const param = e.target.getAttribute("data-param");
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
        newUrl.search = "";
        window.history.replaceState({}, "", newUrl);

        // Apply changes - both conditional content and comprehensive visibility
        applyConditionalContent();
        handleContentVisibility();
      }
    });

    // Handle hide button click
    const hideButton = controlPanel.querySelector(".hide-controls-btn");
    hideButton.addEventListener("click", () => {
      // Remove controls from preferences
      const currentParams = getEffectiveParams();
      delete currentParams.controls;
      delete currentParams.debug;
      savePreferences(currentParams);

      // Remove the control panel
      controlPanel.remove();

      // Show a temporary notification
      const notification = document.createElement("div");
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
      notification.textContent =
        "Controls hidden. Add ?controls=true to URL to reopen.";
      document.body.appendChild(notification);

      // Remove notification after 3 seconds
      setTimeout(() => {
        notification.remove();
      }, 3000);
    });

    document.body.appendChild(controlPanel);
  }

  /* ========================================
       Print Styles Extraction for Preview
       ======================================== */

  function applyPrintStyles(enable) {
    const previewStyleId = "print-preview-extracted-styles";

    if (enable) {
      // Remove any existing preview styles first
      const existingStyle = document.getElementById(previewStyleId);
      if (existingStyle) {
        existingStyle.remove();
      }

      // Extract all @media print rules
      // Use setTimeout to ensure all dynamic styles are loaded
      setTimeout(() => {
        let printStyles = "";
        let extractedCount = 0;

        console.log("Starting print styles extraction...");
        console.log("Total stylesheets found:", document.styleSheets.length);

        // Iterate through all stylesheets
        for (const sheet of document.styleSheets) {
          try {
            // Some stylesheets may not be accessible due to CORS
            const rules = sheet.cssRules || sheet.rules;

            if (!rules) {
              console.warn(
                "No rules found in stylesheet:",
                sheet.href || "inline",
              );
              continue;
            }

            // Process each rule, including nested @import rules
            for (let i = 0; i < rules.length; i++) {
              const rule = rules[i];

              // Check if this is an @import rule
              if (rule.type === CSSRule.IMPORT_RULE && rule.styleSheet) {
                // Recursively process imported stylesheets
                try {
                  const importedRules =
                    rule.styleSheet.cssRules || rule.styleSheet.rules;
                  for (const importedRule of importedRules) {
                    if (
                      importedRule.type === CSSRule.MEDIA_RULE &&
                      importedRule.media.mediaText.includes("print")
                    ) {
                      // Extract and process the rules inside the media query
                      processMediaPrintRule(importedRule);
                    }
                  }
                } catch (importError) {
                  console.log("Cannot access imported stylesheet:", rule.href);
                }
              }

              // Check if this is a media rule for print
              if (
                rule.type === CSSRule.MEDIA_RULE &&
                rule.media &&
                rule.media.mediaText &&
                rule.media.mediaText.includes("print")
              ) {
                // Extract and process the rules inside the media query
                processMediaPrintRule(rule);
              }
            }
          } catch (e) {
            // Skip stylesheets we can't access (e.g., from CDNs)
            console.log(
              "Cannot access stylesheet:",
              sheet.href || "inline",
              "Error:",
              e.message,
            );
          }
        }

        // Helper function to process @media print rules and add body.print-preview prefix
        function processMediaPrintRule(mediaRule) {
          try {
            const rules = mediaRule.cssRules || mediaRule.rules;
            if (!rules) return;

            for (let j = 0; j < rules.length; j++) {
              const innerRule = rules[j];

              if (innerRule.type === CSSRule.STYLE_RULE) {
                // This is a regular CSS rule, prefix it with body.print-preview
                const selector = innerRule.selectorText;
                const styles = innerRule.style.cssText;

                // Parse and create dual selectors for both preview and print
                const previewSelectors = selector
                  .split(",")
                  .map((sel) => {
                    sel = sel.trim();

                    // Special handling for @page rules and other at-rules
                    if (sel.startsWith("@")) {
                      return sel; // Keep as-is
                    }

                    // For body selector, replace with body.print-preview
                    if (sel === "body" || sel === "html") {
                      return `body.print-preview`;
                    }

                    // For other selectors, prefix with body.print-preview
                    return `body.print-preview ${sel}`;
                  })
                  .join(", ");

                // Add preview styles that apply to both screen and print when body has print-preview class
                printStyles += `${previewSelectors} { ${styles} }\n`;
                extractedCount++;
              } else if (innerRule.type === CSSRule.PAGE_RULE) {
                // Keep @page rules as-is (they only apply during actual printing)
                // Skip them for preview since they can't be simulated
                console.log("Skipping @page rule for preview");
              } else if (innerRule.cssText) {
                // For other rule types, try to extract the text
                // This might include @font-face, etc.
                printStyles += innerRule.cssText + "\n";
              }
            }
          } catch (e) {
            console.log("Error processing media rule:", e);
          }
        }

        console.log(`Extracted and prefixed ${extractedCount} print rules`);

        // If no print styles were found, warn the user
        if (!printStyles) {
          console.warn(
            "No print styles were extracted! Check if custom-print.css is loaded. This may be due to CORS restrictions or the styles being in a media query.",
          );
          console.log("Stylesheets processed:", document.styleSheets.length);
        } else {
          console.log("Successfully extracted print styles for preview");
        }

        // Create new style element with extracted print styles
        const styleElement = document.createElement("style");
        styleElement.id = previewStyleId;

        // Add the prefixed print styles
        styleElement.textContent = printStyles;

        // Add overrides to keep controls visible in preview and fix color printing
        styleElement.textContent += `
          /* Keep conditional controls visible ONLY during preview, not actual print */
          @media screen {
            body.print-preview .conditional-controls {
              display: block !important;
              visibility: visible !important;
              position: fixed !important;
              z-index: 10000 !important;
            }
          }

          /* Ensure colors print correctly */
          body.print-preview .numbered-steps .step-number {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        `;

        // Append to document head
        document.head.appendChild(styleElement);

        console.log("Print preview styles applied");
      }, 100); // Small delay to ensure all dynamic styles are loaded
    } else {
      // Remove the preview styles
      const existingStyle = document.getElementById(previewStyleId);
      if (existingStyle) {
        existingStyle.remove();
        console.log("Print preview styles removed");
      }
    }
  }

  /* ========================================
       Print Page Modifications
       ======================================== */

  function modifyPrintPage() {
    // This works on all pages, not just print.html

    // Find and remove introduction chapter from print view
    window.addEventListener("beforeprint", function () {
      // For print.html, hide the entire chapter
      if (isPrintPage()) {
        const chapters = document.querySelectorAll(".chapter");
        chapters.forEach((chapter) => {
          if (chapter.querySelector(".introduction-content")) {
            chapter.style.display = "none";
            // Also hide any page breaks after it
            const nextSibling = chapter.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains("page-break")) {
              nextSibling.style.display = "none";
            }
          }
        });
      }

      // Add a class to body to trigger CSS-based hiding
      document.body.classList.add("printing");
    });

    // Restore visibility after print (for screen viewing)
    window.addEventListener("afterprint", function () {
      document.body.classList.remove("printing");

      if (isPrintPage()) {
        const chapters = document.querySelectorAll(".chapter");
        chapters.forEach((chapter) => {
          if (chapter.querySelector(".introduction-content")) {
            chapter.style.display = "";
            const nextSibling = chapter.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains("page-break")) {
              nextSibling.style.display = "";
            }
          }
        });
      }
    });
  }

  /* ========================================
       Comprehensive Content Visibility System
       ======================================== */

  function handleContentVisibility() {
    // Get all visibility parameters
    const urlParams = getUrlParams();
    const storedPrefs = getStoredPreferences();

    // Determine if we're in a local development environment
    const port = window.location.port;
    const isLocalDev =
      port === "4001" ||
      port === "4002" ||
      port === "4003" ||
      port === "4000" ||
      (!window.location.pathname.includes("/SweetRoboManuals/") &&
        window.location.hostname === "localhost");

    // Check for explicit dev mode override in URL
    const devModeFromUrl = "dev" in urlParams ? urlParams.dev : null;

    // Determine final dev mode state
    let isDev;
    if (devModeFromUrl !== null) {
      // URL parameter takes precedence
      isDev = devModeFromUrl;
      // Store the preference
      storedPrefs.dev = isDev;
      savePreferences(storedPrefs);
    } else if ("dev" in storedPrefs) {
      // Use stored preference if no URL param
      isDev = storedPrefs.dev;
    } else {
      // Default to local dev environment check
      isDev = isLocalDev;
    }

    // Apply dev mode class to body
    if (isDev) {
      document.body.classList.add("dev-mode");
      document.body.classList.add("show-dev");
    } else {
      document.body.classList.remove("dev-mode");
      document.body.classList.remove("show-dev");
    }

    // Content to hide/remove based on visibility level
    const devOnlyPatterns = [
      "styling-demo",
      "Styling Demo",
      "missing-images",
      "Missing Images",
      "image-inventory",
      "Image Inventory",
      "DRAFT",
      "Draft",
      "TODO",
      "FIXME",
      "DEBUG",
      "TEST",
      "WIP",
    ];

    // Remove or show elements based on dev mode
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      // Handle sidebar and navigation links
      const allLinks = document.querySelectorAll(
        "a[href], .sidebar a, .nav-chapters a, .mobile-nav-chapters a",
      );
      allLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        const text = link.textContent || link.innerText || "";

        // Check if this link should be dev-only
        const isDevOnly = devOnlyPatterns.some(
          (pattern) =>
            href.toLowerCase().includes(pattern.toLowerCase()) ||
            text.includes(pattern),
        );

        if (isDevOnly) {
          const parentLi = link.closest("li.chapter-item, li");

          if (isDev) {
            // Show in dev mode
            if (parentLi) {
              parentLi.style.display = "";
              parentLi.classList.remove("hidden-content");
            }
            link.style.display = "";
          } else {
            // Remove from DOM in production (not just hide)
            if (parentLi) {
              parentLi.remove();
            } else {
              link.remove();
            }
          }
        }
      });

      // Handle inline dev-only content marked with data attributes
      const devOnlyElements = document.querySelectorAll(
        "[data-dev-only], .dev-only, .dev-only-content",
      );
      devOnlyElements.forEach((element) => {
        if (!isDev) {
          // Remove from DOM completely
          element.remove();
        }
      });

      // Handle debug/draft content
      const debugElements = document.querySelectorAll(
        "[data-debug], .debug-only, .draft-content",
      );
      debugElements.forEach((element) => {
        if (!isDev && !urlParams.debug) {
          element.remove();
        }
      });
    }, 100);

    // Update controls if they exist
    if (urlParams.controls || storedPrefs.controls) {
      updateControlsForDevMode(isDev, isLocalDev);
    }
  }

  // Update the toggle controls to include dev mode toggle
  function updateControlsForDevMode(isDev, isLocalDev) {
    // Find existing controls or wait for them to be added
    setTimeout(() => {
      const controlPanel = document.querySelector(".conditional-controls");
      if (controlPanel) {
        // Check if dev toggle already exists
        const existingDevCheckbox =
          controlPanel.querySelector('[data-param="dev"]');
        if (existingDevCheckbox) {
          // Update the existing checkbox state
          existingDevCheckbox.checked = isDev;
        }
      }
    }, 200);
  }

  /* ========================================
       Auto-Update Copyright Year
       ======================================== */

  function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();

    // Find all copyright text patterns and update them
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false,
    );

    const nodesToUpdate = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const text = node.textContent;

      // Match copyright patterns like "© 2021-2025 Sweet Robo" or "© 2025 Sweet Robo"
      if (text && text.includes("© ") && text.includes(" Sweet Robo")) {
        // Match year range pattern (e.g., "2021-2025")
        const rangePattern = /© (\d{4})-(\d{4}) Sweet Robo/;
        const singlePattern = /© (\d{4}) Sweet Robo/;

        if (rangePattern.test(text)) {
          const newText = text.replace(
            rangePattern,
            `© $1-${currentYear} Sweet Robo`,
          );
          if (newText !== text) {
            nodesToUpdate.push({ node, newText });
          }
        } else if (singlePattern.test(text)) {
          const newText = text.replace(
            singlePattern,
            `© ${currentYear} Sweet Robo`,
          );
          if (newText !== text) {
            nodesToUpdate.push({ node, newText });
          }
        }
      }
    }

    // Update all found nodes
    nodesToUpdate.forEach(({ node, newText }) => {
      node.textContent = newText;
    });
  }

  /* ========================================
       Initialize All Features
       ======================================== */

  function initializeAll() {
    // Print handling
    setupPrintDialogHandler();
    addBackButton();
    modifyPrintPage();

    // Conditional content and visibility system
    applyConditionalContent();
    handleContentVisibility(); // Comprehensive visibility handler
    addToggleControls();

    // Auto-update copyright year
    updateCopyrightYear();

    // Re-apply on URL change (for single-page navigation)
    window.addEventListener("popstate", () => {
      applyConditionalContent();
      handleContentVisibility();
    });

    console.log("Prepared by Meir Knapp © Sweet Robo 2025");
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAll);
  } else {
    initializeAll();
  }

  // Add print-mode class to body when on print.html for CSS debugging
  if (isPrintPage()) {
    document.body.classList.add("print-mode");
  }

  // Expose API for programmatic control
  window.ConditionalContent = {
    refresh: applyConditionalContent,
    showElement: (element) => {
      element.style.display = "";
      element.classList.add("conditional-visible");
    },
    hideElement: (element) => {
      element.style.display = "none";
      element.classList.remove("conditional-visible");
    },
    getParams: getUrlParams,
  };
})();
