import emailjs from '@emailjs/browser';

// Centralized EmailJS configuration for NG Stellar Contact form
// Reuses the configured service_4dgpcwr and template_y1dqzf2
const DEFAULT_SERVICE_ID = 'service_4dgpcwr';
const DEFAULT_TEMPLATE_ID = 'template_y1dqzf2';
const DEFAULT_AUTO_REPLY_TEMPLATE_ID = 'template_contact_autoreply';
const DEFAULT_PUBLIC_KEY = 'oJ0NUxKWWEBrNzzUs';

export const getEmailConfig = () => ({
  serviceId: import.meta.env.VITE_EMAILJS_CONTACT_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || DEFAULT_TEMPLATE_ID,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_AUTO_REPLY_TEMPLATE_ID || DEFAULT_AUTO_REPLY_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY,
});

/**
 * Send contact enquiry email to contact@ngstellar.com and visitor auto-reply using EmailJS
 * @param {{name: string, email: string, subject: string, message: string}} params
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendContactEmail(params) {
  const { serviceId, templateId, autoReplyTemplateId, publicKey } = getEmailConfig();

  const submissionTimestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  });

  // The Contact form sends ONLY these application parameters
  const templateParams = {
    name: params.name.trim(),
    email: params.email.trim(),
    subject: params.subject.trim(),
    message: params.message.trim(),
    submitted_at: submissionTimestamp,
  };

  try {
    if (publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
      // 1. Send Primary Notification to contact@ngstellar.com
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // 2. Send Auto-Reply to visitor if template is configured
      if (autoReplyTemplateId && autoReplyTemplateId !== 'YOUR_AUTO_REPLY_TEMPLATE_ID') {
        try {
          await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey);
        } catch (autoErr) {
          // If auto-reply fails but primary succeeds, do NOT fail the submission
          console.warn('Contact auto-reply skipped or failed, primary enquiry sent successfully:', autoErr);
        }
      }
    } else {
      // Local fallback simulation if public key is not configured
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
    return { success: true };
  } catch (err) {
    console.error('Contact Email Service Error:', err);
    return {
      success: false,
      error: "We couldn't submit your message right now. Please check your details and try again.",
    };
  }
}

