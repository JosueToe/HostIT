// Simple API endpoint for sending emails
// This would typically be implemented in your backend server
// For now, this is a placeholder that simulates email sending

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, message, to, subject } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Here you would integrate with your email service:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Mailgun
    // - etc.

    // For demonstration, we'll simulate a successful email send
    console.log('Email would be sent to:', to);
    console.log('From:', name, email);
    console.log('Company:', company);
    console.log('Message:', message);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real implementation, you would:
    // 1. Validate the email address
    // 2. Sanitize the message content
    // 3. Send the email using your preferred service
    // 4. Handle any errors from the email service

    res.status(200).json({ 
      message: 'Email sent successfully',
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending email',
      success: false 
    });
  }
}
