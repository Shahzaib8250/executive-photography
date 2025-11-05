/**
 * Home Page - Executive Photography Website
 * Features: Hero slider, About section, Client logos, Gallery, Hire Me, Contact Form
 */

import wixWindow from 'wix-window';
import { initHeroSlider } from 'public/heroSlider';
import { initClientLogosScroller } from 'public/clientLogosScroller';
import { initGallery } from 'public/gallery';
import { initContactForm } from 'public/contactForm';

$w.onReady(function () {
    initializeHomePage();
});

/**
 * Initialize all home page sections
 */
function initializeHomePage() {
    // Initialize hero section slider
    initHeroSlider();
    
    // Initialize about section animations
    initializeAboutSection();
    
    // Initialize client logos scroller
    initClientLogosScroller();
    
    // Initialize gallery with animations
    initGallery();
    
    // Initialize Hire Me button
    initializeHireMeButton();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize footer
    initializeFooter();
}

// Hero slider is handled by imported module: public/heroSlider.js

/**
 * Initialize About Section with animations and hover effects
 */
function initializeAboutSection() {
    const aboutSection = $w("#aboutSection");
    const aboutImage = $w("#aboutImage");
    const aboutContent = $w("#aboutContent");
    const aboutText = $w("#aboutText");
    
    if (!aboutSection) return;
    
    // Fade in animation on scroll
    wixWindow.onScroll(() => {
        const scrollY = wixWindow.getScrollY();
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = wixWindow.getViewportHeight();
        
        if (sectionTop < windowHeight * 0.8) {
            aboutSection.addClass("visible");
            
            if (aboutImage) {
                aboutImage.addClass("animate-in");
            }
            if (aboutContent) {
                aboutContent.addClass("animate-in");
            }
        }
    });
    
    // Hover effects on image
    if (aboutImage) {
        aboutImage.onMouseIn(() => {
            aboutImage.addClass("hover-effect");
        });
        
        aboutImage.onMouseOut(() => {
            aboutImage.removeClass("hover-effect");
        });
    }
    
    // Hover effects on content elements
    if (aboutContent) {
        const contentItems = aboutContent.children();
        contentItems.forEach(item => {
            item.onMouseIn(() => {
                item.addClass("hover-lift");
            });
            
            item.onMouseOut(() => {
                item.removeClass("hover-lift");
            });
        });
    }
}

// Client logos scroller is handled by imported module: public/clientLogosScroller.js

// Gallery is handled by imported module: public/gallery.js

/**
 * Initialize Hire Me Button - connects to contact form
 */
function initializeHireMeButton() {
    const hireMeButton = $w("#hireMeButton");
    const contactForm = $w("#contactForm");
    const contactSection = $w("#contactSection");
    
    if (!hireMeButton) return;
    
    hireMeButton.onClick(() => {
        // Scroll to contact form
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
            
            // Highlight contact form after scroll
            setTimeout(() => {
                if (contactForm) {
                    contactForm.addClass("highlight");
                    setTimeout(() => {
                        contactForm.removeClass("highlight");
                    }, 2000);
                }
            }, 500);
        }
        
        // Add button animation
        hireMeButton.addClass("clicked");
        setTimeout(() => {
            hireMeButton.removeClass("clicked");
        }, 300);
    });
    
    // Hover effects
    hireMeButton.onMouseIn(() => {
        hireMeButton.addClass("hover-glow");
    });
    
    hireMeButton.onMouseOut(() => {
        hireMeButton.removeClass("hover-glow");
    });
}

// Contact form is handled by imported module: public/contactForm.js

/**
 * Initialize scroll animations for all sections
 */
function initializeScrollAnimations() {
    const animatedSections = $w(".animated-section");
    
    animatedSections.forEach(section => {
        wixWindow.onScroll(() => {
            const scrollY = wixWindow.getScrollY();
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = wixWindow.getViewportHeight();
            
            if (sectionTop < windowHeight * 0.8) {
                section.addClass("visible");
            }
        });
    });
}

/**
 * Initialize Footer
 */
function initializeFooter() {
    const footer = $w("#footer");
    const socialLinks = $w("#socialLinks");
    
    if (!footer) return;
    
    // Animate footer on load
    setTimeout(() => {
        footer.addClass("visible");
    }, 500);
    
    // Social links hover effects
    if (socialLinks) {
        const links = socialLinks.children();
        links.forEach(link => {
            link.onMouseIn(() => {
                link.addClass("hover-scale");
            });
            
            link.onMouseOut(() => {
                link.removeClass("hover-scale");
            });
        });
    }
}

