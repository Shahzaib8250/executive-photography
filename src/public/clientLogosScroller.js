/**
 * Client Logos Scroller Utility
 * Creates infinite left-to-right scrolling animation
 */

export function initClientLogosScroller() {
    const logosContainer = $w("#clientLogosContainer");
    const logosWrapper = $w("#clientLogosWrapper");
    
    if (!logosContainer || !logosWrapper) return;
    
    const logos = logosWrapper.children();
    
    // Clone logos for seamless infinite scroll
    logos.forEach(logo => {
        const clone = logo.clone();
        logosWrapper.appendChild(clone);
    });
    
    // Animate scroll
    let scrollPosition = 0;
    const scrollSpeed = 1;
    let animationId;
    
    function animateLogos() {
        scrollPosition += scrollSpeed;
        
        const wrapperWidth = logosWrapper.getBoundingClientRect().width;
        if (scrollPosition >= wrapperWidth / 2) {
            scrollPosition = 0;
        }
        
        logosWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        animationId = requestAnimationFrame(animateLogos);
    }
    
    // Start animation
    animateLogos();
    
    // Pause on hover
    logosContainer.onMouseIn(() => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
    
    logosContainer.onMouseOut(() => {
        animateLogos();
    });
}

