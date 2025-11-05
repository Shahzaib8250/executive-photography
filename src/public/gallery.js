/**
 * Gallery Utility
 * Handles active gallery with animation effects
 */

import wixWindow from 'wix-window';

export function initGallery() {
    const galleryContainer = $w("#galleryContainer");
    const galleryImages = $w("#galleryImages");
    
    if (!galleryContainer || !galleryImages) return;
    
    const images = galleryImages.children();
    let currentIndex = 0;
    let galleryInterval;
    
    function initializeGalleryDisplay() {
        images.forEach((img, index) => {
            img.removeClass("active");
            img.removeClass("fade-in");
            img.removeClass("slide-in");
            
            if (index === 0) {
                img.addClass("active");
                img.addClass("fade-in");
            }
        });
    }
    
    function changeGalleryImage(index) {
        if (images[index]) {
            images[currentIndex].removeClass("active");
            images[currentIndex].removeClass("fade-in");
            images[currentIndex].removeClass("slide-in");
            
            images[index].addClass("active");
            images[index].addClass("slide-in");
            
            currentIndex = index;
        }
    }
    
    function startAutoRotate() {
        galleryInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            changeGalleryImage(nextIndex);
        }, 3000);
    }
    
    images.forEach((img, index) => {
        img.onClick(() => {
            clearInterval(galleryInterval);
            changeGalleryImage(index);
            startAutoRotate();
        });
        
        img.onMouseIn(() => {
            img.addClass("hover-zoom");
        });
        
        img.onMouseOut(() => {
            img.removeClass("hover-zoom");
        });
    });
    
    galleryContainer.onMouseIn(() => {
        clearInterval(galleryInterval);
    });
    
    galleryContainer.onMouseOut(() => {
        startAutoRotate();
    });
    
    wixWindow.onScroll(() => {
        const scrollY = wixWindow.getScrollY();
        const sectionTop = galleryContainer.getBoundingClientRect().top;
        const windowHeight = wixWindow.getViewportHeight();
        
        if (sectionTop < windowHeight * 0.8) {
            galleryContainer.addClass("visible");
        }
    });
    
    initializeGalleryDisplay();
    startAutoRotate();
}

