# Setting Up Images

To complete the newsletter setup with your images, follow these steps:

## 1. Add the Wharton Logo

Save the Wharton logo image (the one with the shield and "Wharton University of Pennsylvania" text) as:
```
public/wharton-logo.png
```

**Recommended specifications:**
- Format: PNG (with transparent background)
- Dimensions: Approximately 400x100px or similar aspect ratio
- The logo will display at 128px wide × 32px tall in the header

## 2. Add the Hero Statue Image

Save the statue image (the contemplative figure with hand on face) as:
```
public/hero-statue.jpg
```

**Recommended specifications:**
- Format: JPG or PNG
- Dimensions: Minimum 1200px wide for good quality
- Aspect ratio: Wide/landscape format works best
- The image will display at full newsletter width (600px max) × 256px tall

## 3. File Structure

After adding the images, your `public/` folder should look like this:

```
public/
├── wharton-logo.png
└── hero-statue.jpg
```

## 4. Alternative: Use Direct URLs

If you prefer to host the images elsewhere, you can modify `app/components/Header.js` and update the `src` attributes:

```javascript
// Replace this:
src="/wharton-logo.png"

// With your hosted URL:
src="https://your-domain.com/path-to-wharton-logo.png"
```

Make sure to also update `next.config.js` to allow external domains:

```javascript
images: {
  domains: ['your-domain.com'],
},
```

## Current Implementation

The header now includes:
- **Wharton logo** in the top bar (left side)
- **Wellness Initiative** label next to the logo
- **Issue number and date** on the right
- **Hero image** spanning full width below the title
- **Overlay text** on the hero image with an inspirational quote about vulnerability

Once you add the actual image files, restart your development server:
```bash
npm run dev
```

