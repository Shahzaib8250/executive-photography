/**
 * Hero Slider Utility
 * Handles image slider functionality for hero section
 */

import wixWindow from 'wix-window';

export function initHeroSlider() {
    const slider = $w("#heroSlider");
    const images = $w("#heroImages");
    const title = $w("#heroTitle");
    const text = $w("#heroText");
    const prevBtn = $w("#heroPrevBtn");
    const nextBtn = $w("#heroNextBtn");
    const indicators = $w("#heroIndicators");
    
    if (!slider || !images) return;
    
    let currentSlide = 0;
    const imageChildren = images.children();
    const totalSlides = imageChildren.length;
    
    if (totalSlides === 0) return;
    
    // Set first image as active
    imageChildren[currentSlide].addClass("active");
    
    // Update hero content based on slide
    function updateHeroContent(index) {
        const slideData = [
            { title: "Executive Photography", text: "Capturing Professional Excellence" },
            { title: "Corporate Events", text: "Documenting Your Success" },
            { title: "Portrait Sessions", text: "Showcasing Your Professional Image" }
        ];
        
        // Add fade animation to content
        if (title) {
            title.addClass("fade-out");
            setTimeout(() => {
                if (slideData[index]) {
                    title.text = slideData[index].title;
                }
                title.removeClass("fade-out");
                title.addClass("fade-in");
            }, 300);
        }
        
        if (text) {
            text.addClass("fade-out");
            setTimeout(() => {
                if (slideData[index]) {
                    text.text = slideData[index].text;
                }
                text.removeClass("fade-out");
                text.addClass("fade-in");
            }, 300);
        }
    }
    
    // Show slide function
    function showSlide(index) {
        imageChildren.forEach(img => {
            img.removeClass("active");
            img.removeClass("fade-in");
        });
        
        if (imageChildren[index]) {
            imageChildren[index].addClass("active");
            imageChildren[index].addClass("fade-in");
        }
        
        if (indicators) {
            const indicatorChildren = indicators.children();
            indicatorChildren.forEach((ind, i) => {
                if (i === index) {
                    ind.addClass("active");
                } else {
                    ind.removeClass("active");
                }
            });
        }
        
        updateHeroContent(index);
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    }
    
    if (nextBtn) {
        nextBtn.onClick(() => nextSlide());
    }
    
    if (prevBtn) {
        prevBtn.onClick(() => prevSlide());
    }
    
    if (indicators) {
        const indicatorChildren = indicators.children();
        indicatorChildren.forEach((indicator, index) => {
            indicator.onClick(() => showSlide(index));
        });
    }
    
    // Auto-play slider
    setInterval(nextSlide, 5000);
    
    updateHeroContent(0);
}

