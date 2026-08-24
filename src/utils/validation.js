/**
 * NG Stellar Client-Side Validation Utilities
 */

/**
 * Validates whether an email address matches standard email format.
 * Rejects empty values, missing @, missing domain, missing TLD, or double @.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(trimmed);
}

/**
 * Normalizes an Indian mobile number by stripping spaces, dashes, brackets,
 * and standard country code prefixes (+91, 91, or leading 0).
 * @param {string} phone
 * @returns {string} 10-digit number or cleaned string
 */
export function normalizePhone(phone) {
  if (!phone || typeof phone !== 'string') return '';
  let cleaned = phone.trim().replace(/[\s\-().]/g, '');
  if (cleaned.startsWith('+91') && cleaned.length === 13) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = cleaned.slice(1);
  }
  return cleaned;
}

/**
 * Validates an Indian mobile number.
 * Must be 10 digits starting with 6, 7, 8, or 9.
 * Optional country code (+91, 91) and formatting characters allowed.
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidIndianMobile(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const normalized = normalizePhone(phone);
  return /^[6-9]\d{9}$/.test(normalized);
}

/**
 * Validates a web URL (e.g. LinkedIn or portfolio).
 * @param {string} url
 * @returns {boolean}
 */
export function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return true;
  try {
    const hasProtocol = /^https?:\/\//i.test(trimmed);
    const parsed = new URL(hasProtocol ? trimmed : `https://${trimmed}`);
    return Boolean(parsed.hostname && parsed.hostname.includes('.') && parsed.hostname.length >= 4);
  } catch {
    return false;
  }
}
