export const contactConfig = {
  // Recipient email address where form submissions will be directed.
  // Change this placeholder email to your client's active recipient email.
  recipientEmail: "demo@example.com",

  // Email subject line for incoming website enquiries
  subject: "New Dance Academy Website Enquiry",

  // Endpoint service configuration for form submissions.
  // In production, point this to your serverless function, Formspree, Web3Forms, or EmailJS endpoint.
  // Example Web3Forms endpoint: "https://api.web3forms.com/submit"
  // Example Formspree endpoint: "https://formspree.io/f/your_form_id"
  apiEndpoint: import.meta.env.VITE_CONTACT_API_ENDPOINT || "",

  // Optional API key if using Web3Forms or similar client-side form dispatchers
  apiKey: import.meta.env.VITE_CONTACT_API_KEY || ""
};
