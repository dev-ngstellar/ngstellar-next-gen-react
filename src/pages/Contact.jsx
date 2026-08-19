import { FaMapLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet-async";

// REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE KEYS
// Note: TEMPLATE_ID must be your EmailJS Template ID (e.g., "template_xxxxxxx"), NOT the Service ID.
const SERVICE_ID = "service_4dgpcwr";
const TEMPLATE_ID = "template_y1dqzf2";
const PUBLIC_KEY = "oJ0NUxKWWEBrNzzUs";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    let error = "";
    if (name === "fullName") {
      if (value.trim() && value.trim().length < 2) error = "Name must be at least 2 characters";
      else if (/\d/.test(value)) error = "Name should not contain numbers";
    }
    if (name === "email") {
      if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
    }
    if (name === "subject") {
      if (value.trim() && value.trim().length < 3) error = "Subject must be at least 3 characters";
    }
    if (name === "message") {
      if (value.trim() && value.trim().length < 10) error = "Message must be at least 10 characters";
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    else if (formData.fullName.trim().length < 2) tempErrors.fullName = "Name must be at least 2 characters";
    else if (/\d/.test(formData.fullName)) tempErrors.fullName = "Name should not contain numbers";

    if (!formData.email.trim()) tempErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Invalid email format";

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    else if (formData.subject.trim().length < 3) tempErrors.subject = "Subject must be at least 3 characters";

    if (!formData.message.trim()) tempErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) tempErrors.message = "Message must be at least 10 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus("sending");
      setErrorMessage("");

      // Prepare template parameters
      // Make sure these names match the variables in your EmailJS template
      const templateParams = {
        to_name: "NG Stellar Team",
        from_name: formData.fullName,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus("success");
          setFormData({ fullName: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus(""), 5000);
        }, (err) => {
          console.error('FAILED...', err);
          const errorMsg = err?.text || err?.message || JSON.stringify(err);
          setErrorMessage(errorMsg);
          setStatus("error");
        });
    }
  };

  return (
    <section className="py-12 md:py-20">
      <Helmet>
        <title>Contact Us - NG Stellar</title>
        <meta
          name="description"
          content="Get in touch with NG Stellar for inquiries, support, or partnership opportunities."
        />
        <meta
          name="keywords"
          content="Contact Us, Customer Support, Business Inquiry, Get in Touch, Office Location, NG Stellar Contact"
        />
      </Helmet>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* LEFT SIDE TEXT BLOCK */}
        <div className="space-y-5 sm:space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-white">
              Let&apos;s chat.
              <br />
              Tell us about your <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(90deg, #335fa8 0%, #7db941 100%)'
                }}
              >Project.</span>
            </h2>

            <p className="text-slate-300/70 text-sm sm:text-base">
              Let&apos;s create something together
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <BsBuildingsFill className="text-lg text-fuchsia-400" />NGStellar Solutions
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              By TrueConnect Strategic Services Private Limited
            </p>
          </div>

          {/* 📞 PHONE & ✉️ EMAIL CONTACT INFO (COMPACT & RESPONSIVE GRID) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <a
              href="tel:+919790652929"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-slate-200 text-xs sm:text-sm hover:border-fuchsia-500/50 hover:text-fuchsia-400 transition-all group"
            >
              <FaPhone className="text-sm text-fuchsia-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="truncate">+91 9790652929</span>
            </a>
            <a
              href="mailto:contact@ngstellar.com"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-slate-200 text-xs sm:text-sm hover:border-fuchsia-500/50 hover:text-fuchsia-400 transition-all group"
            >
              <FaEnvelope className="text-sm text-fuchsia-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="truncate">contact@ngstellar.com</span>
            </a>
          </div>

          {/* 📍 ADDRESS + GOOGLE MAP */}
          <div className="space-y-2 pt-1">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <FaMapLocationDot className="text-lg text-fuchsia-400" />
              Our Location
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              151/18, D R Avenue 1, Netaji Nagar, Moolapalayam, Erode, Tamil Nadu 638002
            </p>

            {/* Map Box - Compact Height */}
            <div className="w-full h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.859664536294!2d77.7194252758548!3d11.306791978438159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f98aba9f235%3A0x6f743610f354489c!2sNithya%20Gokul%20Associates%20(Since%202010)%20%7C%20Corporate%20Compliance%20%26%20Legal%20Advisors!5e0!3m2!1sen!2sin!4v1715243880000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM CARD */}
        <div
          className="rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-primary-500/20 mt-8 lg:mt-0"
          style={{
            background: "linear-gradient(135deg, rgba(51, 95, 168, 0.1) 0%, rgba(90, 155, 65, 0.15) 50%, rgba(125, 185, 65, 0.1) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(51, 95, 168, 0.2)",
          }}
        >
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-5 md:mb-6">
            Send us a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-slate-900/50 border ${errors.fullName ? 'border-red-500/50' : 'border-slate-700/50'} text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${errors.fullName ? 'focus:ring-red-500' : 'focus:ring-fuchsia-500'} focus:border-transparent transition-all disabled:opacity-50`}
                placeholder="Full Name*"
              />
              {errors.fullName && <p className="text-red-400 text-xs mt-1 ml-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-slate-900/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-700/50'} text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-fuchsia-500'} focus:border-transparent transition-all disabled:opacity-50`}
                placeholder="Email Address*"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-slate-900/50 border ${errors.subject ? 'border-red-500/50' : 'border-slate-700/50'} text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${errors.subject ? 'focus:ring-red-500' : 'focus:ring-fuchsia-500'} focus:border-transparent transition-all disabled:opacity-50`}
                placeholder="Subject*"
              />
              {errors.subject && <p className="text-red-400 text-xs mt-1 ml-1">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Tell us more about your project
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-slate-900/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-700/50'} text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-fuchsia-500'} focus:border-transparent transition-all resize-none disabled:opacity-50`}
                placeholder="Type your message*"
              ></textarea>
              {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message}</p>}
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
                {errorMessage ? `EmailJS Error: ${errorMessage}` : "Failed to send message. Please try again later."}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg shadow-lg shadow-primary-500/30 transition-all hover:brightness-110 hover:shadow-secondary-500/40 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
