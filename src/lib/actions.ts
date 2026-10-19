'use server';

export async function postForm(formData: FormData) {
  // Extract form data  
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  console.log('Data to post:', data);

  // Ensure the webhook URL is defined
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('WEBHOOK_URL is not defined in environment variables');
    return { type: 'error', message: 'Server misconfiguration: Missing webhook URL' };
  }

  try {
    // Send POST request to the webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Handle non-OK response
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Webhook responded with status ${response.status}: ${errorText}`);
      return { type: 'error', message: `Server error: ${response.status}` };
    }

    // Success
    const responseData = await response.text();
    console.log('Webhook response:', responseData);
    return { type: 'success' };
  } catch (error) {
    // Handle network or other unexpected errors
    console.error('Error posting to webhook:', error);
    return { type: 'error', message: 'Network error' };
  }
}
