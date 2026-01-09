# Bhumija Holidays - Production Readiness Requirements

This document lists everything needed to make the website production-ready. Please provide the items marked with checkboxes.

---

## 1. IMAGES REQUIRED

### Package Gallery Images - COMPLETED
All 16 package images have been downloaded from Unsplash and placed in `/public/packages/`:
- [x] kathmandu-1.jpg, kathmandu-2.jpg, kathmandu-3.jpg, kathmandu-4.jpg
- [x] janakpur-1.jpg, janakpur-2.jpg, janakpur-3.jpg, janakpur-4.jpg
- [x] odyssey-1.jpg, odyssey-2.jpg, odyssey-3.jpg, odyssey-4.jpg, odyssey-5.jpg
- [x] mithila-art-1.jpg, mithila-art-2.jpg, mithila-art-3.jpg

### Gallery Images - COMPLETED
All 20 gallery images have been downloaded from Unsplash and placed in `/public/gallery/`:

**Kathmandu (10 images):**
- [x] pashupatinath-temple.jpg, boudhanath-stupa.jpg, swayambhunath-stupa.jpg
- [x] kathmandu-durbar-square.jpg, patan-durbar-square.jpg, bhaktapur-durbar-square.jpg
- [x] changu-narayan-temple.jpg, kopan-monastery.jpg, garden-of-dreams.jpg, thamel.jpg

**Janakpurdham (10 images):**
- [x] janaki-mandir.jpg, ram-mandir-janakpur.jpg, vivah-mandap.jpg
- [x] dhanush-sagar.jpg, ganga-sagar.jpg, ratna-sagar.jpg
- [x] jaleshwar-mahadev-temple.jpg, mithila-art-center.jpg, dhanusha-dham.jpg, parshuram-kund.jpg

### Testimonial Avatars - COMPLETED
- [x] Using placeholder avatars (approved by user)

---

### Branding Assets - COMPLETED

**Favicon & App Icons - IMPLEMENTED:**
- [x] `icon.svg` - SVG favicon with "BH" branding (auto-generated)
- [x] `apple-icon.tsx` - Dynamic Apple touch icon (180x180, auto-generated)

**Social Sharing Image - IMPLEMENTED:**
- [x] `opengraph-image.tsx` - Dynamic OG image (1200x630) using random gallery photos with branding overlay

---

## 2. CONTACT INFORMATION - IMPLEMENTED

### Company Details - IMPLEMENTED IN APP

- [x] **Phone Number**: +977 9840149464 - Updated in data/content.ts
- [x] **Email**: info@bhumijaholidays.com - Updated in data/content.ts
- [x] **WhatsApp Number**: +977 9840149464 - Added to Footer & Contact page

### Office Address - IMPLEMENTED IN APP

- [x] **Kathmandu Office**: Balkhu, Kathmandu - Updated in Footer & Contact page
- [x] **Janakpur Office**: Ramaanand Chowk, Janakpur - Updated in Footer & Contact page

**Postal Codes - IMPLEMENTED:**
- [x] Kathmandu: 44600
- [x] Janakpur: 45600

---

## 3. SOCIAL MEDIA - HIDDEN UNTIL CREATED

Social media links are currently hidden in the footer until pages are created.

- [ ] **Facebook**: `https://facebook.com/bhumijaholidays` - NOT YET CREATED
- [ ] **Instagram**: `https://instagram.com/bhumijaholidays` - NOT YET CREATED
- [ ] **Twitter/X**: - NOT NEEDED
- [ ] **YouTube Channel** (optional)
- [ ] **TripAdvisor** (optional)

---

## 4. CONTENT VERIFICATION

### Travel Packages

Review the 4 packages and confirm pricing/details are accurate:

| Package | Duration | Current Price | Correct? |
|---------|----------|---------------|----------|
| Kathmandu Heritage Discovery | 5 days | NPR 45,000 | [ ] Yes / [ ] Change to: ___ |
| Janakpurdham Spiritual Journey | 4 days | NPR 35,000 | [ ] Yes / [ ] Change to: ___ |
| Nepal Cultural Odyssey | 8 days | NPR 85,000 | [ ] Yes / [ ] Change to: ___ |
| Mithila Art & Heritage Retreat | 3 days | NPR 25,000 | [ ] Yes / [ ] Change to: ___ |

- [ ] Review itinerary details for accuracy
- [ ] Confirm inclusions/exclusions are correct
- [ ] Update any seasonal availability

### Testimonials

Currently using 5 auto-generated testimonials. Choose one:

- [*] **Option A**: Keep generated testimonials as-is
- [ ] **Option B**: Provide real customer reviews (name, location, review text, rating)
- [ ] **Option C**: Remove testimonials section entirely

### FAQs

- [*] Review the 10 FAQs for accuracy
- [ ] Add/remove/modify any questions

### Legal Documents

- [*] Have Terms & Conditions reviewed by legal counsel
- [*] Have Privacy Policy reviewed for compliance
- [*] Have Cancellation Policy reviewed and confirmed

---

## 5. EMAIL CONFIGURATION - IMPLEMENTED

### Resend Email Service

- [x] **RESEND_API_KEY**: Configured in `.env.local`
- [x] **Sending Email**: `bhoomija@nexalaris.com`
- [x] **Admin Email**: Configurable via `ADMIN_EMAIL` env variable (default: `bibeksah36@gmail.com`)

Note: Admin email can be changed anytime by updating the `ADMIN_EMAIL` in `.env.local`

---

## 6. ANALYTICS & TRACKING

- [ ] **Google Analytics 4 Measurement ID**:
  - Provide: G-XXXXXXXXXX

- [ ] **Google Search Console** verification (optional):
  - Will you verify the site? YES 

- [ ] **Facebook Pixel ID** (optional):
  - Provide: ________________________________

---

## 7. DOMAIN & HOSTING

- [ ] **Domain**: Confirm `bhumijaholidays.com` is registered and ready
- [ ] **SSL Certificate**: Will be auto-configured by Vercel
- [ ] **DNS configured**: Point domain to Vercel

---

## 8. ADDITIONAL FEATURES

- [x] **WhatsApp Chat Button** - IMPLEMENTED - Floating button on all pages
- [x] **Newsletter Signup** - IMPLEMENTED - Added to footer
- [ ] **Google Maps Embed** - Not needed
- [ ] **Live Chat Widget** - Not needed
- [ ] **Cookie Consent Banner** - Not needed

---

## SUMMARY CHECKLIST

### Must Have (Blocking)
- [x] At least 1 image per package (minimum 4 images total) - DONE
- [x] Working phone number - PROVIDED
- [x] Verified email domain - Using bhoomija@nexalaris.com
- [x] Resend API key - CONFIGURED
- [x] Favicon - DONE (SVG + Apple icon)
- [ ] Package pricing confirmation

### Should Have (Important)
- [x] All 16 package images - DONE
- [x] All 20 gallery images - DONE
- [x] Social sharing image - DONE (Dynamic OG with gallery photos)
- [ ] Google Analytics setup
- [ ] Verified social media links
- [x] Complete office address - PROVIDED

### Nice to Have (Can add later)
- [ ] Real customer testimonials
- [x] App icons - DONE (SVG + Apple touch icon)
- [x] WhatsApp integration - DONE
- [x] Newsletter signup - DONE

### Production Features Added
- [x] Custom 404 page
- [x] Error boundary (error.tsx)
- [x] Loading skeleton (loading.tsx)
- [x] Security headers middleware (HSTS, CSP, X-Frame-Options)
- [x] JSON-LD structured data (TravelAgency, FAQPage)
- [x] Web app manifest (PWA support)
- [x] Contact form error handling (proper feedback)

---

## HOW TO PROVIDE ASSETS

**For Images:**
1. Create a folder with all images named as listed above
2. Share via Google Drive, Dropbox, or attach to this conversation

**For Text Information:**
- Fill in the blanks above or provide in chat

**For API Keys:**
- Share securely (will be added to environment variables, not code)

---

Once you provide these items, I will:
1. ~~Add all images to the `/public/` folder~~ - DONE
2. Update contact information across all files
3. Configure email sending with verified domain
4. Add error pages and security improvements
5. Set up analytics
6. Add favicon and app icons
7. Final testing and verification
