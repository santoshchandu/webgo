# Farmhouse Rental Website

A beautiful, modern, and responsive website for your farmhouse rental property.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Photo Gallery**: Interactive gallery with 36 high-quality farmhouse images
- **Image Lightbox**: Click any image to view in full-screen modal with navigation
- **Booking Form**: Easy-to-use contact form for rental inquiries
- **Smooth Animations**: Modern animations and transitions throughout the site
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Friendly**: Semantic HTML structure for better search engine visibility

## Sections

1. **Hero Section**: Eye-catching landing area with call-to-action
2. **About Section**: Description of the farmhouse with key statistics
3. **Photo Gallery**: All 36 farmhouse images in a responsive grid
4. **Amenities**: Showcase of all available facilities and features
5. **Booking Section**: Contact form and property information
6. **Footer**: Additional links and contact details

## How to Use

### Opening the Website

Simply open the `index.html` file in any modern web browser:
- Double-click the file, or
- Right-click and select "Open with" → Your preferred browser

### Customizing Content

#### Update Contact Information
Edit `index.html` and find the contact section to update:
- Phone number
- Email address
- Location
- Pricing information

#### Modify Amenities
In `index.html`, locate the amenities section to:
- Add or remove amenity cards
- Change icons and descriptions
- Update features

#### Change Colors
Edit `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #2c5f2d;    /* Main green color */
    --secondary-color: #97bc62;   /* Light green */
    --accent-color: #ff6b35;      /* Orange accent */
}
```

#### Add/Remove Photos
1. Place new images in the same folder as the HTML files
2. Edit `script.js` and update the `images` array with your image filenames

### Deploying to Web

To make your website accessible online:

#### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files (HTML, CSS, JS, and images)
4. Enable GitHub Pages in repository settings

#### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop the entire folder
3. Get your live website URL instantly

#### Option 3: Web Hosting
Upload all files to your web hosting service via FTP or cPanel file manager

## File Structure

```
Farmhouse/
├── index.html              # Main HTML file
├── styles.css              # All styling
├── script.js               # JavaScript functionality
├── README.md               # This file
└── [36 image files]        # All farmhouse photos
```

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Features Explained

### Interactive Gallery
- Click any image to open in full-screen mode
- Use arrow keys or buttons to navigate between images
- Press ESC to close the lightbox
- Smooth animations and transitions

### Booking Form
The form includes validation for:
- Name and email (required)
- Check-in and check-out dates
- Number of guests
- Special requests

Note: Currently shows an alert on submission. To connect to a real booking system, you'll need to integrate with:
- A form submission service (FormSpree, Netlify Forms)
- Your own backend server
- Email service

### Mobile Responsive
The website automatically adjusts for:
- Desktop (full navigation bar)
- Tablet (adapted layout)
- Mobile (hamburger menu)

## Tips for Best Results

1. **Images**: Keep all images in the same folder as the HTML file
2. **Image Size**: Images are automatically optimized for web display
3. **Customization**: All text can be edited directly in the HTML file
4. **Colors**: Use the CSS variables for consistent color changes
5. **Testing**: Test the website on different devices and browsers

## Need Help?

If you need to make changes:
1. Text changes: Edit `index.html`
2. Colors and styling: Edit `styles.css`
3. Functionality: Edit `script.js`

Always make backups before making changes!

## Performance Tips

- Images are lazy-loaded for faster initial page load
- Smooth scrolling is enabled for better user experience
- Optimized CSS and JavaScript for quick loading

---

Enjoy your new farmhouse rental website!
