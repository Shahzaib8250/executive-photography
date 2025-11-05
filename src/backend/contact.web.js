/**
 * Contact Form Backend Handler
 * Processes contact form submissions
 */

import { webMethod } from 'wix-web-module';

/**
 * Submit contact form
 * @param {string} name - Contact name
 * @param {string} email - Contact email
 * @param {string} message - Contact message
 * @returns {Promise<Object>} Success response
 */
export const submitContactForm = webMethod(Permissions.Anyone, async (name, email, message) => {
    try {
        // Validate input
        if (!name || !email || !message) {
            return {
                success: false,
                error: "All fields are required"
            };
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                success: false,
                error: "Invalid email address"
            };
        }
        
        // Here you can:
        // 1. Save to Wix Data Collection
        // 2. Send email notification
        // 3. Integrate with third-party services
        
        // Example: Save to Data Collection (uncomment if you have a ContactSubmissions collection)
        /*
        import wixData from 'wix-data';
        
        const contactData = {
            name: name,
            email: email,
            message: message,
            dateCreated: new Date()
        };
        
        await wixData.insert("ContactSubmissions", contactData);
        */
        
        // Example: Send email (requires Wix Email API)
        /*
        import wixEmail from 'wix-email';
        
        await wixEmail.send({
            to: "your-email@example.com",
            subject: "New Contact Form Submission",
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });
        */
        
        return {
            success: true,
            message: "Thank you! Your message has been sent successfully."
        };
        
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            error: "Something went wrong. Please try again later."
        };
    }
});

