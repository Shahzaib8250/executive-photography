# Wix Setup Guide - Executive Photography Website

This guide will help you set up all the required elements in your Wix Editor to make the code work properly.

## 📋 Required Element IDs

You need to create these elements in your Wix Editor and assign them the following IDs:

### **Navigation Bar** (`masterPage.js`)
- `#navBar` - Navigation bar container (Box or Repeater)
- `#navLinks` - Container for navigation links (Box)
- `#mobileMenuButton` - Mobile menu toggle button (Button)
- `#mobileMenu` - Mobile menu container (Box)
- `#closeMenuButton` - Close menu button (Button)

### **Hero Section** (`Home.c1dmp.js`)
- `#heroSlider` - Main slider container (Box)
- `#heroImages` - Container for hero images (Repeater or Box with multiple Images)
- `#heroContent` - White transparent block container (Box)
- `#heroTitle` - Hero title text (Text)
- `#heroText` - Hero description text (Text)
- `#heroPrevBtn` - Previous slide button (Button)
- `#heroNextBtn` - Next slide button (Button)
- `#heroIndicators` - Slide indicators container (Box)

### **About Section** (`Home.c1dmp.js`)
- `#aboutSection` - About section container (Box)
- `#aboutContainer` - Grid container (Box)
- `#aboutImage` - About section image (Image)
- `#aboutContent` - Content container (Box)
- `#aboutTitle` - About section title (Text)
- `#aboutText` - About section text (Text)

### **Client Logos Section** (`Home.c1dmp.js`)
- `#clientLogosSection` - Section container (Box)
- `#clientLogosContainer` - Scroller container (Box)
- `#clientLogosWrapper` - Logos wrapper (Box)
  - Add multiple Image elements inside this wrapper

### **Gallery Section** (`Home.c1dmp.js`)
- `#gallerySection` - Gallery section container (Box)
- `#galleryContainer` - Gallery container (Box)
- `#galleryTitle` - Gallery title (Text)
- `#galleryImages` - Images container (Repeater or Box with multiple Images)

### **Hire Me Button** (`Home.c1dmp.js`)
- `#hireMeButton` - Hire me button (Button)

### **Contact Form Section** (`Home.c1dmp.js`)
- `#contactSection` - Contact section container (Box)
- `#contactForm` - Form container (Box)
- `#contactFormTitle` - Form title (Text)
- `#nameInput` - Name input field (Text Input)
- `#emailInput` - Email input field (Text Input)
- `#messageInput` - Message textarea (Text Input - Multiline)
- `#submitButton` - Submit button (Button)
- `#successMessage` - Success message container (Text)
- `#errorMessage` - Error message container (Text)

### **Footer** (`Home.c1dmp.js`)
- `#footer` - Footer container (Box)
- `#footerContent` - Footer content grid (Box)
- `#footerBrand` - Brand section (Box)
- `#footerLinks` - Links section (Box)
- `#footerContact` - Contact section (Box)
- `#socialLinks` - Social media links container (Box)
- `#footerBottom` - Footer bottom text (Text)

---

## 🎨 Design Setup Instructions

### 1. **Hero Section Setup**
1. Create a Box element, set ID to `heroSlider`
2. Add 3-4 Image elements inside, set parent ID to `heroImages`
3. Create a Box for the white transparent block, set ID to `heroContent`
4. Add Text elements for title and text inside `heroContent`
5. Add navigation buttons and indicators

### 2. **About Section Setup**
1. Create a Box with ID `aboutSection`
2. Inside, create a grid container (`aboutContainer`)
3. Add Image on left side (`aboutImage`)
4. Add content Box on right side (`aboutContent`)
5. Add title and text elements

### 3. **Client Logos Setup**
1. Create a Box with ID `clientLogosSection`
2. Inside, create `clientLogosContainer`
3. Inside that, create `clientLogosWrapper`
4. Add multiple Image elements (client logos) inside the wrapper

### 4. **Gallery Setup**
1. Create a Box with ID `gallerySection`
2. Add title with ID `galleryTitle`
3. Create container with ID `galleryContainer`
4. Add Repeater or multiple Images with parent ID `galleryImages`

### 5. **Contact Form Setup**
1. Create a Box with ID `contactSection`
2. Inside, create a Box with ID `contactForm`
3. Add all form elements with their respective IDs
4. Make sure to set input types correctly

---

## 🔧 Backend Setup

### 1. **Contact Form Backend** (Optional but Recommended)
1. Go to Wix Editor → Database → Add Collection
2. Create a collection called "ContactSubmissions"
3. Add fields: `name` (Text), `email` (Text), `message` (Text), `dateCreated` (Date)
4. Update `src/backend/contact.web.js` to uncomment the data saving code

### 2. **Email Notifications** (Optional)
1. Set up Wix Email API
2. Update `contact.web.js` to send emails
3. Configure your email address in the code

---

## 📝 Step-by-Step Setup Process

### Step 1: Create Page Structure
1. Open Wix Editor
2. Go to your Home page
3. Start adding elements section by section:
   - Hero Section first
   - Then About Section
   - Then Client Logos
   - Then Gallery
   - Then Hire Me Button
   - Then Contact Form
   - Finally Footer

### Step 2: Assign Element IDs
1. Click on each element
2. Go to Settings → Advanced → ID
3. Assign the corresponding ID from the list above
4. **Important**: IDs must match exactly (case-sensitive)

### Step 3: Upload Images
1. Upload hero images to your Media Manager
2. Upload client logos
3. Upload gallery images
4. Upload about section image
5. Assign them to the respective elements

### Step 4: Configure Styling
1. The CSS is already in `src/styles/global.css`
2. You can customize colors, fonts, and spacing in the CSS file
3. The theme is set to black (#000000)

### Step 5: Test Functionality
1. Preview your site
2. Test the hero slider
3. Test the gallery animations
4. Test the contact form
5. Test the Hire Me button

---

## 🎯 Quick Checklist

- [ ] All element IDs are assigned correctly
- [ ] Hero images are uploaded (3-4 images)
- [ ] Client logos are uploaded (at least 5-6 logos)
- [ ] Gallery images are uploaded
- [ ] About section image is uploaded
- [ ] Contact form elements are set up
- [ ] Footer content is added
- [ ] Navigation links are configured
- [ ] Backend collection is created (optional)
- [ ] Email notifications are set up (optional)

---

## ⚠️ Common Issues & Solutions

### Issue: Hero slider not working
**Solution**: Make sure `#heroImages` contains multiple Image elements, not just one.

### Issue: Gallery not animating
**Solution**: Ensure `#galleryImages` contains multiple Image elements.

### Issue: Client logos not scrolling
**Solution**: Make sure logos are inside `#clientLogosWrapper` and there are at least 5 logos.

### Issue: Contact form not submitting
**Solution**: 
- Check that all input IDs are correct
- Verify backend function is properly connected
- Check browser console for errors

### Issue: Hire Me button not scrolling
**Solution**: Ensure `#contactSection` ID is assigned correctly.

---

## 🚀 After Setup

1. **Preview** your site to test all functionality
2. **Publish** when ready
3. **Monitor** contact form submissions
4. **Customize** colors and content as needed

---

## 📞 Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Verify all element IDs match exactly
3. Ensure all required elements are created
4. Test in preview mode first

**Note**: The code is designed to work with Wix Velo. Make sure you're using a Wix Editor X or Wix Studio site with Velo enabled.

