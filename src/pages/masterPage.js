/**
 * Master Page - Global functionality for all pages
 * Handles navigation, smooth scrolling, and global interactions
 */

import wixWindow from 'wix-window';

$w.onReady(function () {
    initializeNavigation();
    initializeSmoothScrolling();
    initializeMobileMenu();
});

/**
 * Initialize navigation bar functionality
 */
function initializeNavigation() {
    // Get navigation elements (update IDs based on your Wix editor)
    const navBar = $w("#navBar");
    const navLinks = $w("#navLinks");
    
    // Add scroll effect to navbar
    if (navBar) {
        wixWindow.onScroll(() => {
            const scrollY = wixWindow.getScrollY();
            if (scrollY > 50) {
                navBar.addClass("scrolled");
            } else {
                navBar.removeClass("scrolled");
            }
        });
    }
    
    // Handle active navigation links
    if (navLinks) {
        const links = navLinks.children();
        links.forEach(link => {
            link.onClick(() => {
                // Remove active class from all links
                links.forEach(l => l.removeClass("active"));
                // Add active class to clicked link
                link.addClass("active");
            });
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    // Get all anchor links
    const anchorLinks = $w("a[href^='#']");
    
    anchorLinks.forEach(link => {
        link.onClick((event) => {
            event.preventDefault();
            const href = link.href;
            const targetId = href.split("#")[1];
            
            if (targetId) {
                const targetElement = $w(`#${targetId}`);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
}

/**
 * Initialize mobile menu toggle
 */
function initializeMobileMenu() {
    const mobileMenuButton = $w("#mobileMenuButton");
    const mobileMenu = $w("#mobileMenu");
    const closeMenuButton = $w("#closeMenuButton");
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.onClick(() => {
            mobileMenu.show("fade");
            mobileMenuButton.hide();
        });
    }
    
    if (closeMenuButton && mobileMenu) {
        closeMenuButton.onClick(() => {
            mobileMenu.hide("fade");
            if (mobileMenuButton) {
                mobileMenuButton.show();
            }
        });
    }
}

