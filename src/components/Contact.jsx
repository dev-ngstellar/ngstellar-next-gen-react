function Contact() {
  return (
    <section id="contact" className="mt-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-slate-50">Contact Us</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
          Ready to start a project or want to learn more about our services?
        </p>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/70">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-slate-100">
            Tell us about your idea and we&apos;ll help you shape it into a standout
            digital experience.
          </p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>Email: info@ngstellarsolutions.org</li>
            <li>Phone: +91-00000-00000</li>
          </ul>
        </div>
        <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/40 transition hover:brightness-110 hover:shadow-fuchsia-400/60">
          Let&apos;s Talk
        </button>
      </div>
    </section>
  );
}

export default Contact;


