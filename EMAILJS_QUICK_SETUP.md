# 🚀 EmailJS Quick Setup - 5 Minutes

## Step-by-Step Guide

### 1️⃣ Create EmailJS Account
Visit: **https://dashboard.emailjs.com/sign-up**
- Sign up (FREE - 200 emails/month)
- Verify your email

### 2️⃣ Add Email Service
- Click "Add New Service"
- Choose: Gmail, Outlook, or your email provider
- Connect and get your **Service ID** (save it!)

### 3️⃣ Create Email Template
- Go to "Email Templates" → "Create New Template"
- Copy this configuration:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Body:**
```
You have received a new message from your HostIT website contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}
EMAIL: {{from_email}}
COMPANY: {{company}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to respond to {{from_name}}.
```

**Settings:**
- To Email: `contact@Host-IT.app`
- Reply To: `{{reply_to}}`

Save and get your **Template ID**!

### 4️⃣ Get Public Key
- Go to "Account" → "General"
- Copy your **Public Key**

### 5️⃣ Add to Netlify
Go to Netlify: **Site Settings → Build & Deploy → Environment Variables**

Add these 4 variables:
```
VITE_EMAILJS_SERVICE_ID = service_l53wwur
VITE_EMAILJS_TEMPLATE_ID = template_kbf2d6b
VITE_EMAILJS_PUBLIC_KEY = aFMY4FzZzeI5jSpaj
VITE_CONTACT_EMAIL = contact@Host-IT.app
```

### 6️⃣ Redeploy
- Redeploy your site on Netlify
- Test the contact form!

## 🎯 For Local Development

Create `.env` file in project root:
```env
VITE_EMAILJS_SERVICE_ID=service_l53wwur
VITE_EMAILJS_TEMPLATE_ID=template_kbf2d6b
VITE_EMAILJS_PUBLIC_KEY=aFMY4FzZzeI5jSpaj
VITE_CONTACT_EMAIL=contact@Host-IT.app
```

Restart dev server: `npm run dev`

## ✅ Done!
Your contact form will now send emails to **contact@Host-IT.app**!

---

📖 **Full guide:** See `EMAIL_SETUP_GUIDE.md` for detailed instructions and troubleshooting.

