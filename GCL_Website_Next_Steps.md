# GCL Ministries Website — Project Notes & Next Steps

> God Cannot Lie Ministries | Charlotte, NC  
> Website file: `GCL_Website.html`

---

## ✅ What's Been Done

### Website
- [x] Full single-page website built (`GCL_Website.html`)
- [x] Logo added — saved as `gcl-logo.png` in the same folder as the HTML
  - Nav bar logo (top left)
  - Hero section logo (large, centered)
  - Pastor section avatar
- [x] Prayer Request section added (between Pastor and Contact sections)
  - Optional name and email fields
  - Anonymous checkbox option
  - Wired to same form handler as Contact form
- [x] Prayer link added to nav (desktop, mobile, and footer)
- [x] Contact and Prayer forms set up with Formspree placeholders (ready to activate)

### Local Server
- [x] Python 3.14.4 installed
- [x] Local server running via:
  ```bash
  python -m http.server 8080
  ```
- [x] Website accessible at: `http://localhost:8080/GCL_Website.html`

### PDF to DOC Skill
- [x] Skill created at `C:\Users\hayle\.kiro\skills\pdf-to-doc.md`
- [x] `pdf2docx` Python library installed
- [x] Conversion script created: `convert_pdf.py`
- [x] FIT Financial Worksheet converted:
  - Input: `FIT_financial_integrity_training_worksheet_branded_income_added.pdf`
  - Output: `FIT_financial_integrity_training_worksheet_formatted.docx`
- [x] FIT Financial Worksheet markdown created: `FIT_Financial_Worksheet.md`

---

## 📋 Next Steps

### 1. Activate Contact Forms (Email)
The forms currently show a success message but do NOT send emails yet.  
Pick one of the options below based on where you host:

#### Option A — Web3Forms (Best for GitHub Pages / Free Hosting)
- Free, unlimited submissions, no account needed
1. Go to [web3forms.com](https://web3forms.com)
2. Enter `godcannotlieministries@yahoo.com` — they email you an access key
3. Replace placeholders in `GCL_Website.html`:
   - `YOUR_CONTACT_FORM_ID`
   - `YOUR_PRAYER_FORM_ID`

#### Option B — Formspree (Already wired in the HTML)
- Free tier: 50 submissions/month
1. Go to [formspree.io](https://formspree.io) and sign up
2. Create 2 forms, set notification email to `godcannotlieministries@yahoo.com`
3. Replace in `GCL_Website.html`:
   - `YOUR_CONTACT_FORM_ID`
   - `YOUR_PRAYER_FORM_ID`

#### Option C — PHP Mail (Best for paid hosting like Bluehost/Hostinger)
- No third-party service needed — sends directly from server
- Kiro can build a `contact.php` file when you're ready
- Forms post directly to your email with zero middlemen

---

### 2. Choose a Hosting Plan

#### Recommended: Free Start → Cheap Domain

| Step | Service | Cost |
|------|---------|------|
| Hosting | [Netlify](https://netlify.com) | **Free** |
| Domain | [Namecheap](https://namecheap.com) | ~$12/year |
| Forms | Netlify Forms (built in) | **Free** |

**How to deploy on Netlify:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop your project folder onto the Netlify dashboard
3. Site goes live instantly at a `.netlify.app` URL
4. Connect your custom domain from Namecheap

#### Alternative: Paid Hosting (if you want PHP/email direct)

| Host | Cost | Notes |
|------|------|-------|
| [Hostinger](https://hostinger.com) | ~$3/mo | Cheapest, free domain 1st year, PHP included |
| [Bluehost](https://bluehost.com) | ~$3/mo | Reliable, free domain, PHP included |
| [GoDaddy](https://godaddy.com) | ~$5/mo | Popular, easy to manage |

> **Note:** GitHub Pages is free but does NOT support PHP.  
> Use Web3Forms or Netlify Forms if hosting on GitHub Pages.

---

### 3. Logo File
Make sure `gcl-logo.png` is saved in the same folder as `GCL_Website.html`.  
The logo appears in 3 places on the site:
- Top left nav bar
- Hero section (large center logo)
- Pastor section avatar

---

### 4. Future Enhancements (Optional)
- [ ] Add a photo of Pastor Griffith to replace the logo in the pastor section
- [ ] Add online giving / donation button (PayPal, Cash App, or Givelify for churches)
- [ ] Add a sermon archive / media page (pull from YouTube channel)
- [ ] Add a church calendar / events section
- [ ] Add Google Maps embed for 3000 Melita Ave, Charlotte NC 28216

---

## 📁 Project Files

| File | Description |
|------|-------------|
| `GCL_Website.html` | Main website file |
| `gcl-logo.png` | Church logo (place in same folder) |
| `convert_pdf.py` | Script to convert PDF files to Word docs |
| `FIT_financial_integrity_training_worksheet_branded_income_added.pdf` | Original FIT worksheet PDF |
| `FIT_financial_integrity_training_worksheet_formatted.docx` | Converted Word version |
| `FIT_Financial_Worksheet.md` | Markdown version of the FIT worksheet |
| `GCL_Website_Next_Steps.md` | This file |

---

## 🔗 Quick Links

- YouTube: [GCL Ministries Channel](http://www.youtube.com/channel/UCCiVzrxhbXI34x8fAq1f82w)
- Facebook: [godcannotlieministries](https://www.facebook.com/godcannotlieministries)
- Twitter: [@godcannotlie](https://www.instagram.com/godcannotlie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==) *(now Instagram)*
- Prison Ministry Partner: [iamonesimus.com](http://iamonesimus.com)
- Church Email: godcannotlieministries@yahoo.com
- Church Phone: 704-292-6985
- Address: 3000 Melita Ave, Charlotte, NC 28216

---

*Last updated: August 2026*
