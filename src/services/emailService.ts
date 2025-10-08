import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_hostit'; // You'll need to create this in EmailJS
const EMAILJS_TEMPLATE_ID = 'template_contact'; // You'll need to create this in EmailJS
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // You'll get this from EmailJS

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      message: formData.message,
      to_email: 'Contact@hostIT.com',
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
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
        to: 'Contact@hostIT.com',
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
