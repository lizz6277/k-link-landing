// Vercel Serverless Function for contact form
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Log the submission (you can see this in Vercel logs)
    console.log('Contact form submission:', { name, email, message });

    // TODO: Here you can add email sending logic
    // Option 1: Use Resend (recommended by Vercel, free tier available)
    // Option 2: Use SendGrid, Mailgun, etc.
    // Option 3: Store in a database (Vercel Postgres, Supabase, etc.)

    // For now, just return success
    // You can check Vercel logs to see the submissions
    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

