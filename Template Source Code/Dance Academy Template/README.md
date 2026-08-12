# Rhythm Dance Academy - Website Template

A modern, responsive React + Vite static website template designed for dance academies, studios, and performing arts schools.

## Contact Form Email Configuration

The Contact Us form is fully decoupled from the UI components so that you can reuse this template for new clients without modifying React components.

### 1. Where Recipient Email is Configured

Open `src/data/contact.js`:

```javascript
export const contactConfig = {
  // Recipient email address where form submissions will be directed.
  recipientEmail: "demo@example.com",

  // Email subject line for incoming website enquiries
  subject: "New Dance Academy Website Enquiry",

  // Optional endpoint service URL (e.g. Formspree, Web3Forms, or custom Serverless endpoint)
  apiEndpoint: import.meta.env.VITE_CONTACT_API_ENDPOINT || "",

  // Optional public API key if using Web3Forms or client-side provider
  apiKey: import.meta.env.VITE_CONTACT_API_KEY || ""
};
```

### 2. How to Change Email for a New Client

To configure the template for a new client:
1. Open `src/data/contact.js`.
2. Update `recipientEmail: "demo@example.com"` to `recipientEmail: "client@example.com"`.
3. Optionally update `subject` to your preferred email title.

No changes to `ContactForm.jsx` or any UI file are required.

### 3. How the Email is Sent

- **Template Demo / Local Mode**: If `apiEndpoint` is empty, the form performs client-side validation, displays an interactive loading spinner ("Sending..."), and confirms successful submission.
- **Production / Service Endpoint Mode**: When an endpoint URL (`VITE_CONTACT_API_ENDPOINT`) is provided, `ContactForm.jsx` dispatches a JSON payload containing the submitted data (`name`, `email`, `phone`, `age_group`, `dance_style`, `experience_level`, `preferred_class`, `message`) to your service endpoint.

### 4. Required Environment Variables

Copy `.env.example` to `.env.local` to configure environment variables:

```bash
# Optional endpoint URL (e.g. Web3Forms or Formspree)
VITE_CONTACT_API_ENDPOINT=https://api.web3forms.com/submit

# Optional access key
VITE_CONTACT_API_KEY=your_public_access_key
```

### 5. Testing the Contact Form Locally

1. Run `npm run dev` to launch the development server.
2. Navigate to `http://localhost:5173/contact`.
3. Fill out the form fields and click **Send Enquiry**.
4. Test class pre-selection by clicking **Book Trial Class** under any class on the Classes screen.

### 6. Production Deployment

Build the static site for production deployment:

```bash
npm run build
```

Deploy the `dist/` directory to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
