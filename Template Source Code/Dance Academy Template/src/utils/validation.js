/**
 * Reusable Contact Form Validation Utility
 */

export const validateContactForm = (formData) => {
  const errors = {};

  // 1. Full Name Validation
  const trimmedName = (formData.fullName || '').trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Please enter a valid name (at least 2 characters).';
  } else if (/^\d+$/.test(trimmedName)) {
    errors.fullName = 'Please enter a valid name (letters and spaces only).';
  } else if (/^[^a-zA-Z0-9\s]+$/.test(trimmedName)) {
    errors.fullName = 'Please enter a valid name.';
  }

  // 2. Email Address Validation
  const trimmedEmail = (formData.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (/\s/.test(trimmedEmail) || !emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  // 3. Phone Number Validation
  const trimmedPhone = (formData.phone || '').trim();
  // Allow international formatting: optional leading +, digits, spaces, hyphens, parentheses
  const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
  const digitsOnly = trimmedPhone.replace(/\D/g, '');
  if (!trimmedPhone) {
    errors.phone = 'Please enter your phone number.';
  } else if (!phoneRegex.test(trimmedPhone) || digitsOnly.length < 7 || /[a-zA-Z]/.test(trimmedPhone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  // 4. Class / Program Selection Validation
  const preferredClass = (formData.preferredClass || '').trim();
  if (!preferredClass) {
    errors.preferredClass = 'Please select a class or program.';
  }

  // 5. Message Content Validation
  const trimmedMessage = (formData.message || '').trim();
  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 5) {
    errors.message = 'Please enter a message with at least 5 characters.';
  }

  return errors;
};
