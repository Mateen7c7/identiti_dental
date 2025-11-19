import React from "react";

const Contact = () => {
  const contactDetails = [
    {
      label: "Clinic Address",
      value: "123 Harmony Ave, Suite 204, San Diego, CA 92101",
      action: "https://maps.google.com/?q=123+Harmony+Ave+San+Diego",
    },
    {
      label: "Phone",
      value: "(619) 555-0143",
      action: "tel:+16195550143",
    },
    {
      label: "Email",
      value: "care@identiti.dental",
      action: "mailto:care@identiti.dental",
    },
    {
      label: "Working Hours",
      value: "Mon–Fri 8:00am – 6:00pm · Sat 9:00am – 2:00pm",
    },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData.entries()));
    event.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
            Contact & Location
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Let’s make your next appointment effortless
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Reach out in the way that works best for you—our concierge team
            replies within minutes during office hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 to-cyan-400 text-xl font-semibold text-white">
                ✨
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">
                  Contact us
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  Tell us about your smile goals
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none ring-sky-100 transition focus:border-sky-400 focus:bg-white focus:ring-4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none ring-sky-100 transition focus:border-sky-400 focus:bg-white focus:ring-4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(619) 555-0143"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none ring-sky-100 transition focus:border-sky-400 focus:bg-white focus:ring-4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Preferred date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none ring-sky-100 transition focus:border-sky-400 focus:bg-white focus:ring-4"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Let us know what you need help with..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none ring-sky-100 transition focus:border-sky-400 focus:bg-white focus:ring-4"
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-sky-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:translate-y-0.5 hover:brightness-110"
              >
                Request appointment
              </button>
              <p className="text-sm text-slate-500">
                We’ll confirm within one business day.
              </p>
            </div>
          </form>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white bg-white/80 p-8 shadow-[0_15px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                      {item.label}
                    </p>
                    {item.action ? (
                      <a
                        href={item.action}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex text-lg font-medium text-slate-900 transition hover:text-sky-500"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-lg font-medium text-slate-900">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-slate-100 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Follow us
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-semibold text-slate-800 transition hover:text-sky-500"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white shadow-[0_15px_60px_rgba(15,23,42,0.12)]">
              <iframe
                title="Identiti Dental on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.3834260929406!2d-117.1627725!3d32.7157365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954a71ff6bf97%3A0x397c9b0f5bfeabb0!2sDowntown%20San%20Diego%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1732030218000!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 sm:h-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;