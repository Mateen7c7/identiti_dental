import React, { useEffect, useRef, useState } from "react";

const transformationCases = [
  {
    id: "gummy-smile",
    badge: "Smile Design",
    title: "Gummy Smile Sculpting",
    description:
      "Laser gum contouring paired with eight minimal-prep porcelain veneers evened out her gum line and delivered a brighter, fuller smile that still looks natural.",
    before: "/bf1.webp",
    after: "/bf2.webp",
    highlights: [
      { label: "Treatment Time", value: "10 days" },
      { label: "Procedures", value: "Laser contouring + veneers" },
      { label: "Shade Lift", value: "4 levels whiter" },
    ],
    testimonial:
      "“I finally feel confident smiling without covering my mouth. The veneers look just like my own teeth.”",
  },
  {
    id: "tooth-rebuild",
    badge: "Restorative",
    title: "Broken Tooth Rebuild",
    description:
      "Biomimetic bonding rebuilt fractured enamel, while a single ceramic crown restored strength and symmetry across the front teeth.",
    before:
      "https://images.unsplash.com/photo-1507697364665-69eeca9d0d11?auto=format&fit=crop&w=900&q=80",
    after: "/bf4.jpg",
    highlights: [
      { label: "Chair Time", value: "2 visits" },
      { label: "Focus", value: "Central incisors" },
      { label: "Durability", value: "5+ year guarantee" },
    ],
    testimonial:
      "“You can’t even tell which tooth cracked. The repair blends in perfectly with the rest of my smile.”",
  },
  {
    id: "full-mouth",
    badge: "Implant & Aesthetics",
    title: "Full-Mouth Rehabilitation",
    description:
      "A combination of guided implants, crowns, and chairside whitening restored proper bite support and created a cohesive, youthful smile.",
    before:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    after: "/bf2.webp",
    highlights: [
      { label: "Timeline", value: "6 weeks" },
      { label: "Implants", value: "4 immediate-load" },
      { label: "Satisfaction", value: "100% post-op" },
    ],
    testimonial:
      "“It’s a night and day difference. I can chew comfortably and love how my teeth photograph now.”",
  },
];

const useInView = (threshold = 0.35) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const TransformationCard = ({ data, index }) => {
  const [position, setPosition] = useState(65);
  const { ref, isVisible } = useInView();

  return (
    <article
      ref={ref}
      className={`grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl backdrop-blur lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:p-10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } transition-all duration-700`}
      style={{ transitionDelay: `${index * 80}ms`, boxShadow: '0 20px 60px rgba(240, 91, 40, 0.1)' }}
    >
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-semibold tracking-wide" style={{ borderColor: 'rgba(240, 91, 40, 0.3)', backgroundColor: 'rgba(240, 91, 40, 0.1)', color: '#F05B28' }}>
          {data.badge}
        </span>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[#000000] md:text-3xl">
            {data.title}
          </h3>
          <p className="mt-3 text-base text-slate-700 md:text-lg">
            {data.description}
          </p>
        </div>
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-inner sm:grid-cols-3">
          {data.highlights.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-[#000000]">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="text-sm italic text-slate-700"> {data.testimonial}</p>
      </div>

      <div className="relative">
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <img
            src={data.before}
            alt={`Before treatment for ${data.title}`}
            className="h-80 w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 lg:h-full"
            loading="lazy"
          />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
            aria-hidden="true"
          >
            <img
              src={data.after}
              alt={`After treatment for ${data.title}`}
              className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full"
              loading="lazy"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 top-0"
            style={{ left: `${position}%` }}
          >
            <div className="relative h-full w-0.5 bg-white/70">
              <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/70 text-slate-900 shadow-lg">
                ⇆
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-sm border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#000000] shadow-md">
            Before
          </div>
          <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/90 backdrop-blur-sm border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#000000] shadow-md">
            After
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label={`Drag to compare before and after for ${data.title}`}
            className="absolute bottom-4 left-1/2 w-2/3 -translate-x-1/2 cursor-pointer"
            style={{ accentColor: '#F05B28' }}
          />
        </div>
      </div>
    </article>
  );
};

const BeforeAfter = () => {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#FFFFF0] py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(240, 91, 40, 0.18), transparent 55%)' }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center text-[#000000]">
          <p className="text-sm font-semibold uppercase tracking-[0.4em]" style={{ color: '#F05B28' }}>
            Proof First
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#000000] sm:text-4xl">
            Before & After Gallery
          </h2>
          <p className="mt-4 text-base text-slate-700 sm:text-lg">
            Real patients. Real transformations. Slide across each case to see
            how tailored treatment plans restored confidence and function—often
            in a matter of days.
          </p>
        </header>

        <div className="mt-14 space-y-10">
          {transformationCases.map((item, index) => (
            <TransformationCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;