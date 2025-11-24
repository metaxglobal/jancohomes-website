# Quick Testing Guide - Tablet Fix

## How to Test in Chrome DevTools

1. **Open your site** (localhost or deployed)

2. **Open DevTools:**
   - Press `F12` or `Ctrl+Shift+I` (Windows)
   - Or right-click → "Inspect"

3. **Enable Device Toolbar:**
   - Press `Ctrl+Shift+M`
   - Or click the phone/tablet icon in DevTools

4. **Test These Devices:**

### iPad Devices (Should show MOBILE layout)
```
iPad Mini         → 768px  → Mobile Nav ✅
iPad              → 810px  → Mobile Nav ✅
iPad Air          → 820px  → Mobile Nav ✅
iPad Pro 11"      → 834px  → Mobile Nav ✅
iPad Pro 12.9"    → 1024px → Mobile Nav ✅
```

### Laptop/Desktop (Should show DESKTOP layout)
```
Laptop            → 1280px → Desktop Nav ✅
Desktop           → 1440px → Desktop Nav ✅
Full HD           → 1920px → Desktop Nav ✅
```

## What to Look For

### ✅ On iPad (< 1024px):
- **Navigation:** Hamburger menu (3 lines) in top right
- **Logo:** Green Janco logo on the left
- **Sections:** Single column, full width
- **Cards:** Stack vertically or 2 columns max
- **Text:** Larger, easier to read
- **Buttons:** Bigger, touch-friendly

### ✅ On Laptop (>= 1024px):
- **Navigation:** Full menu bar with links (About, Services, Projects, etc.)
- **Sections:** Multi-column layouts
- **Cards:** 3-4 columns
- **Spacing:** More padding (120px on sides)

## Quick Screenshot Test

Take screenshots at these widths and compare:

1. **768px (iPad)** - Should look like mobile
2. **1024px (iPad Pro)** - Should look like mobile  
3. **1280px (Laptop)** - Should look like desktop

## Testing the Breakpoint Switch

1. Set device to "Responsive"
2. Start at width `1023px` → Should show **mobile**
3. Increase to `1024px` → Should show **mobile**
4. Increase to `1025px` → Should switch to **desktop**

## Common Issues & Solutions

### Issue: "iPad shows desktop layout"
**Check:** Make sure you refreshed the page after code changes
**Solution:** Hard refresh with `Ctrl+Shift+R`

### Issue: "Layout looks broken"
**Check:** Clear browser cache
**Solution:** `Ctrl+Shift+Delete` → Clear cache

### Issue: "Changes not showing"
**Check:** Dev server is running
**Solution:** Restart with `npm run dev`

## Test Checklist

- [ ] iPad Mini (768px) shows mobile nav
- [ ] iPad Air (820px) shows mobile nav
- [ ] iPad Pro (1024px) shows mobile nav
- [ ] MacBook (1280px) shows desktop nav
- [ ] Navigation hamburger works on iPad
- [ ] Scroll to sections works
- [ ] Forms work on all devices
- [ ] WhatsApp widget visible on all sizes

---

**All tests passed?** ✅ You're good to deploy!
