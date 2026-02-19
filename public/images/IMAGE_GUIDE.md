# TDME Website - Image Management Guide

## Folder Structure

All images are organized in `/public/images/` with the following structure:

```
public/
└── images/
    ├── esim/
    ├── industrial/
    ├── data-transmission/
    ├── network-monitoring/
    ├── temperature-compliance/
    ├── jacob-jensen/
    └── bittel/
```

## How to Add Images

### 1. Upload Your Images
Upload image files to the corresponding folder:
- Images for eSIM page → `/public/images/esim/`
- Images for Industrial page → `/public/images/industrial/`
- Images for Data Transmission page → `/public/images/data-transmission/`
- Images for Network Monitoring page → `/public/images/network-monitoring/`
- Images for Temperature Compliance page → `/public/images/temperature-compliance/`
- Images for Jacob Jensen page → `/public/images/jacob-jensen/`
- Images for Bittel page → `/public/images/bittel/`

### 2. Provide Image Names
Once uploaded, provide the image filenames (e.g., "esim-hero.jpg", "phone-system.png")

### 3. I'll Update the Code
I'll update the page code to link to your images in the public folder

---

## Image Naming Recommendations

### eSIM Page
- `esim-hero.jpg` - Hero section background
- `esim-product-image.jpg` - Product image placeholder 1
- `esim-coverage-map.jpg` - Coverage map image placeholder 2

### Industrial Page
- `industrial-facility.jpg` - Hero or facility image
- `power-station.jpg` - Industrial facility image placeholder

### Data Transmission Page
- `data-transmission-network.jpg` - Network infrastructure image
- `switching-equipment.jpg` - Hardware/switching equipment image

### Network Monitoring Page
- `network-dashboard.jpg` - Dashboard screenshot image placeholder 1
- `network-analytics.jpg` - Analytics interface image placeholder 2

### Temperature Compliance Page
- `loggi-device.jpg` - LoggFi device image
- `temperature-dashboard.jpg` - Dashboard screenshot image placeholder 1
- `temp-analytics.jpg` - Analytics interface image placeholder 2
- `company-logos.jpg` - Trusted companies/logos image placeholder

### Jacob Jensen Page
- `jacob-jensen-hero.jpg` - Hero section image
- `phone-system-showcase.jpg` - Product showcase image placeholder 1
- `phone-design.jpg` - Design award/detail image placeholder 2

### Bittel Page
- `bittel-hero.jpg` - Hero section image
- `bittel-products.jpg` - Product portfolio image placeholder 1
- `bittel-installation.jpg` - Hotel room installation image placeholder 2

---

## Image Upload Instructions

### For Supported Formats:
- ✅ JPG / JPEG (.jpg, .jpeg)
- ✅ PNG (.png)
- ✅ WebP (.webp)
- ✅ GIF (.gif)

### Recommended Image Sizes:
- **Hero images:** 1920×1080 or 1200×600px (wide format)
- **Placeholder sections:** 800×400px or 600×600px
- **Product images:** 600×400px or 800×600px

### File Size Guidelines:
- Aim for under 200KB per image for web performance
- Use compression tools if needed

---

## How Images Will Be Used

Once you provide image filenames, I'll update the pages to use actual images instead of placeholders like this:

### Current (Placeholder):
```html
<div className="bg-gradient-to-br from-teal-100 to-orange-100 rounded-lg">
  <div className="text-6xl mb-4">🌍</div>
  <p>eSIM Product Image</p>
  <p className="text-sm text-gray-600 mt-2">Add your travel/globe image here</p>
</div>
```

### After Upload (With Your Image):
```html
<img src="/images/esim/esim-product-image.jpg" alt="eSIM Product" className="w-full rounded-lg shadow-lg" />
```

---

## Next Steps

1. **Create your images** or gather existing images
2. **Upload to folders** in `/public/images/[page-name]/`
3. **Send me the filenames** (or ask me to implement with your suggested names)
4. **I'll update the code** to use your actual images

---

## Example Usage in Code

Once images are provided, pages will be updated to include:

```jsx
// Simple image tag
<img 
  src="/images/esim/esim-product-image.jpg" 
  alt="eSIM Product Showcase"
  className="w-full rounded-lg shadow-lg"
/>

// Or with Next.js Image component (optimized)
import Image from "next/image";

<Image
  src="/images/esim/esim-product-image.jpg"
  alt="eSIM Product Showcase"
  width={800}
  height={400}
  className="rounded-lg shadow-lg"
/>
```

---

## Questions?

If you need any clarification on:
- Which images go on which pages
- Image dimensions
- File formats
- Or anything else

Just let me know and I'll help!
