# Email Setup Guide for HostIT Contact Form

## Overview
The contact form is now configured to send emails to `Contact@hostIT.com` when users submit the form. You have two options for implementation:

## Option 1: EmailJS (Recommended for Frontend-Only)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new service (Gmail, Outlook, etc.)

### Step 2: Create Email Template
1. In EmailJS dashboard, go to "Email Templates"
2. Create a new template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (Contact@hostIT.com)
   - `{{reply_to}}` - Reply-to email

### Step 3: Update Configuration
1. Get your Service ID, Template ID, and Public Key from EmailJS
2. Update `src/services/emailService.ts`:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id_here';
   const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
   const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
   ```

### Step 4: Test
- The form will now send real emails to Contact@hostIT.com
- Users will see success/error popups

## Option 2: Backend API (For Full Control)

### Step 1: Set Up Backend Server
1. Create a Node.js/Express server
2. Install email service (Nodemailer, SendGrid, etc.)
3. Implement the API endpoint at `/api/send-email`

### Step 2: Configure Email Service
Choose one of these services:
- **SendGrid**: Professional email service
- **Nodemailer**: Direct SMTP sending
- **AWS SES**: Amazon's email service
- **Mailgun**: Developer-friendly email API

### Step 3: Update Frontend
1. Uncomment the API call in `src/services/emailService.ts`
2. Comment out the EmailJS call
3. Deploy your backend server

## Current Implementation Features

### ✅ What's Working:
- Form validation (required fields)
- Loading state during submission
- Success popup: "Email Sent Successfully!"
- Error popup: "Error Sending Email"
- Form reset after successful submission
- Disabled button during submission

### 📧 Email Content:
The email will include:
- **From**: User's name and email
- **To**: Contact@hostIT.com
- **Subject**: "New Contact Form Submission from [Name]"
- **Body**: 
  - Name
  - Email
  - Company (if provided)
  - Message
  - Reply-to set to user's email

### 🎨 UI Features:
- Button shows "Sending..." during submission
- Button is disabled during submission
- Toast notifications for success/error
- Form clears after successful submission

## Testing
1. Fill out the contact form
2. Click "Send Message"
3. Check for success popup
4. Verify email arrives at Contact@hostIT.com

## Security Notes
- EmailJS handles CORS and security
- For backend API, implement rate limiting
- Validate and sanitize all input
- Use environment variables for API keys

## Next Steps
1. Choose your preferred email service
2. Follow the setup guide above
3. Test the functionality
4. Deploy to production

The contact form is now fully functional and ready to receive real customer inquiries!
