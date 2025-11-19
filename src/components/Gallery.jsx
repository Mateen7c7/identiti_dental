import React from "react";

const galleryShowcase = [
  {
    title: "Clinic Reception",
    description:
      "A calming entry experience styled with soft lighting, curated artwork, and concierge hospitality the moment patients arrive.",
    image: "/g1.jpeg",
    badge: "Welcome Lounge",
    accent: "from-cyan-400/70 via-blue-500/60 to-indigo-500/50",
  },
  {
    title: "Treatment Room",
    description:
      "Ergonomic chairs, ergonomic lighting, and immersive ceiling visuals to keep every treatment serene and comfortable.",
    image: "/g2.jpeg",
    badge: "Care Suite",
    accent: "from-emerald-400/70 via-teal-500/60 to-sky-500/60",
  },
  {
    title: "Advanced Equipment",
    description:
      "State-of-the-art diagnostic monitors, precision instruments, and touchless sanitation systems ready for modern dentistry.",
    image: "/g3.jpeg",
    badge: "Tech Hub",
    accent: "from-amber-400/70 via-orange-500/60 to-rose-500/60",
  },
//   {
//     title: "Patient Lounge",
//     description:
//       "Spa-inspired lounge featuring aromatherapy, hydration bar, and plush seating to unwind before or after appointments.",
//     image: "/bf4.jpg",
//     badge: "Relax Zone",
//     accent: "from-fuchsia-400/70 via-purple-500/60 to-blue-500/60",
//   },
  {
    title: "Awards & Recognition",
    description:
      "Celebrating industry accolades, continuing education milestones, and heartfelt patient stories on a living awards wall.",
    image: "/g4.jpeg",
    badge: "Excellence",
    accent: "from-lime-400/70 via-green-500/60 to-emerald-500/60",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-950 py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="blur-[140px] duration-1000 animate-pulse absolute -top-32 left-0 h-72 w-72 rounded-full bg-cyan-500/40" />
        <div className="blur-[160px] duration-1000 animate-pulse absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/30 delay-300" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs tracking-[0.3em] uppercase text-cyan-200">
            Spaces & Comfort
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Experience Identiti Dental’s calming, tech-forward environment
          </h2>
          <p className="mt-4 text-base text-slate-200 sm:text-lg">
            Every space is choreographed to reduce anxiety, showcase innovation,
            and highlight the thoughtful touches that make each visit relaxing.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryShowcase.map(({ title, description, image, badge, accent }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-white/30"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-r ${accent} opacity-0 transition duration-500 group-hover:opacity-60`}
                />
              </div>
              <div className="relative space-y-4 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100">
                  {badge}
                  <span className="h-1 w-1 rounded-full bg-cyan-200" />
                  Comfort Focused
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{description}</p>
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-300">
                  <span>Fully Sanitized</span>
                  <span>360° Care</span>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full border border-white/20 bg-white/5 opacity-0 transition duration-500 group-hover:translate-x-6 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -bottom-10 -left-6 h-20 w-20 rounded-full border border-white/10 bg-white/5 opacity-0 transition duration-500 group-hover:-translate-y-3 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;