import emailjs from '@emailjs/browser';

// EmailJS configuration - using environment variables for security
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_l53wwur';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kbf2d6b';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'aFMY4FzZzeI5jSpaj';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'contact@Host-IT.app';

// Initialize EmailJS if public key is available
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Check if EmailJS is properly configured
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.error('EmailJS not configured. Please set up environment variables.');
      
      // For development: log the form data
      console.log('Contact form submission:', {
        from: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        to: CONTACT_EMAIL
      });
      
      // Return false if not configured
      return false;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      message: formData.message,
      to_email: CONTACT_EMAIL,
      reply_to: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully to', CONTACT_EMAIL, response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Alternative: Using a simple fetch to a backend endpoint (if you have one)
export const sendContactEmailViaAPI = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        to: 'contact@Host-IT.app',
        subject: `New Contact Form Submission from ${formData.name}`,
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully via API');
      return true;
    } else {
      console.error('API error:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error sending email via API:', error);
    return false;
  }
};
