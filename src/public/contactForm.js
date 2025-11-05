/**
 * Contact Form Utility
 * Handles form validation and submission
 */

import { submitContactForm } from 'backend/contact.web.js';

export function initContactForm() {
    const contactForm = $w("#contactForm");
    const submitButton = $w("#submitButton");
    const nameInput = $w("#nameInput");
    const emailInput = $w("#emailInput");
    const messageInput = $w("#messageInput");
    const successMessage = $w("#successMessage");
    const errorMessage = $w("#errorMessage");
    
    if (!contactForm || !submitButton) return;
    
    function validateForm() {
        let isValid = true;
        
        if (nameInput && !nameInput.value) {
            nameInput.addClass("error");
            isValid = false;
        } else if (nameInput) {
            nameInput.removeClass("error");
        }
        
        if (emailInput && (!emailInput.value || !emailInput.value.includes("@"))) {
            emailInput.addClass("error");
            isValid = false;
        } else if (emailInput) {
            emailInput.removeClass("error");
        }
        
        if (messageInput && !messageInput.value) {
            messageInput.addClass("error");
            isValid = false;
        } else if (messageInput) {
            messageInput.removeClass("error");
        }
        
        return isValid;
    }
    
    submitButton.onClick(async (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            if (errorMessage) {
                errorMessage.show();
                errorMessage.text = "Please fill in all required fields correctly.";
            }
            return;
        }
        
        submitButton.disable();
        submitButton.text = "Sending...";
        
        try {
            // Call backend function
            const result = await submitContactForm(
                nameInput ? nameInput.value : "",
                emailInput ? emailInput.value : "",
                messageInput ? messageInput.value : ""
            );
            
            if (result.success) {
                if (successMessage) {
                    successMessage.show();
                    successMessage.text = result.message || "Thank you! Your message has been sent successfully.";
                }
                
                if (nameInput) nameInput.value = "";
                if (emailInput) emailInput.value = "";
                if (messageInput) messageInput.value = "";
                
                submitButton.enable();
                submitButton.text = "Send Message";
                
                setTimeout(() => {
                    if (successMessage) successMessage.hide();
                }, 5000);
            } else {
                if (errorMessage) {
                    errorMessage.show();
                    errorMessage.text = result.error || "Something went wrong. Please try again.";
                }
                
                submitButton.enable();
                submitButton.text = "Send Message";
            }
            
        } catch (error) {
            console.error("Contact form error:", error);
            if (errorMessage) {
                errorMessage.show();
                errorMessage.text = "Something went wrong. Please try again.";
            }
            
            submitButton.enable();
            submitButton.text = "Send Message";
        }
    });
    
    [nameInput, emailInput, messageInput].forEach(input => {
        if (input) {
            input.onFocus(() => {
                input.addClass("focused");
                input.removeClass("error");
            });
            
            input.onBlur(() => {
                input.removeClass("focused");
            });
        }
    });
}

