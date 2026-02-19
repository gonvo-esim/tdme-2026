# TDME Website - Quick Reference Guide

## 🚀 Deploy Your Site in 3 Steps

### Step 1: Push to GitHub
```bash
cd /home/oscar/Music/tdme-2026
git init
git add .
git commit -m "TDME Website"
git remote add origin https://github.com/YOUR-USERNAME/tdme-2026.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Select your GitHub repository
4. Click "Deploy"

### Step 3: Access Your Site
Your site will be live at: `https://tdme-2026.vercel.app` (or custom domain)

---

## 📍 All Page Routes

| Route | Page Name | Status |
|-------|-----------|--------|
| `/` | Home | ✅ Complete |
| `/esim` | eSIMGEN | ✅ Complete |
| `/industrial` | Industrial Connectivity | ✅ Complete |
| `/data-transmission` | Data Transmission | ✅ Complete |
| `/carrier` | Carrier & Communication | ✅ Complete |
| `/security` | Security & Access | ✅ Complete |
| `/industrial-applications` | Industrial Applications | ✅ Complete |
| `/services` | Professional Services | ✅ Complete |
| `/contact` | Contact & Information | ✅ Complete |
| `/grms` | GRMS System | 🔄 Coming Soon |
| `/network-monitoring` | Network Monitoring | 🔄 Coming Soon |
| `/temperature-compliance` | Temperature Compliance | 🔄 Coming Soon |

---

## 🎨 Color Themes by Page

- **Home** - Multi-color with black hero
- **eSIM** - Blue (#3B82F6)
- **Industrial** - Orange (#EA580C)
- **Data** - Purple (#8B5CF6)
- **Carrier** - Cyan (#0891B2)
- **Security** - Red (#C41E3A)
- **Industrial Apps** - Yellow (#F59E0B)
- **Services** - Green (#16A34A)
- **Contact** - Gray (#4B5563)

---

## 📱 Responsive Breakpoints

- **Mobile**: 375px (fully responsive)
- **Tablet**: 768px (optimized layout)
- **Desktop**: 1024px (full width)
- **Large**: 1280px (max-width container)

---

## 🔧 Local Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## 📁 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/components/Navigation.tsx` | Update nav links/logo |
| `src/components/Footer.tsx` | Update contact info |
| `src/app/page.tsx` | Edit home page content |
| `src/app/*/page.tsx` | Edit individual page content |
| `src/app/globals.css` | Global styles |
| `tailwind.config.js` | Tailwind configuration |

---

## 🎯 Common Customizations

### Change Company Name
Edit in `/src/components/Navigation.tsx` and `/src/components/Footer.tsx`:
```tsx
<Link href="/" className="text-2xl font-bold">
  TDME  ← Change this
</Link>
```

### Update Contact Information
Edit in `/src/components/Footer.tsx`:
```tsx
<li>Email: info@tdme.net  ← Change this</li>
<li>Phone: +1 (800) TDME-NET  ← Change this</li>
```

### Change Colors
Replace Tailwind color classes:
- `bg-blue-600` → `bg-green-600`
- `text-orange-700` → `text-purple-700`
- `hover:text-blue-400` → `hover:text-yellow-400`

### Add New Page
1. Create folder: `src/app/your-page-name/`
2. Create file: `src/app/your-page-name/page.tsx`
3. Copy template from existing page
4. Add link to Navigation.tsx
5. Done!

---

## 📊 Website Statistics

- **12 Total Pages** (9 complete, 3 coming soon)
- **3 Reusable Components**
- **Full Mobile Responsiveness**
- **Professional Design System**
- **Zero External Dependencies** (besides core libraries)
- **Optimized Performance**

---

## ✅ Pre-Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Build successful
- [ ] Site accessible at live URL
- [ ] All pages loading correctly
- [ ] Navigation working
- [ ] Footer displaying on all pages
- [ ] Contact form visible
- [ ] Mobile view responsive
- [ ] Images loading (when added)
- [ ] Custom domain configured (optional)

---

## 🔗 Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Guides**: https://guides.github.com

---

## 💡 Pro Tips

1. **Use Vercel**: Deployment is automatic on every GitHub push
2. **Custom Domain**: Add your custom domain in Vercel project settings
3. **Analytics**: Enable Vercel Analytics to track visitors
4. **Environment Variables**: Add in Vercel dashboard if needed
5. **SEO**: Add meta descriptions to pages for better search ranking
6. **Images**: Use Next.js Image component for optimization
7. **Forms**: Use third-party service (Formspree, Netlify) for email submissions

---

## 🆘 Troubleshooting

### Build Fails
- Check Node version: `node --version` (need v18+)
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`

### Pages Not Showing
- Check routes in `src/app/` directory structure
- Verify Navigation.tsx links are correct
- Clear browser cache (Ctrl+Shift+Delete)

### Styling Issues
- Rebuild Tailwind: `npm run build`
- Check class names for typos
- Verify tailwind.config.js is correct

---

## 📝 Notes

- All pages use TypeScript for type safety
- Tailwind CSS handles all styling
- No external UI component library needed
- Optimized for both desktop and mobile
- Ready for SEO optimization
- Prepared for content management integration

---

**Your website is ready to launch! 🚀**

Next step: Push to GitHub and deploy to Vercel!
