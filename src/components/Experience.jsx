import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "40+",
    label: "Years of Expertise",
    detail: "Family-led care blending seasoned wisdom with modern precision.",
  },
  {
    value: "20 yrs",
    label: "Clinic Legacy",
    detail: "Established in 2006 and still run by the same family you trust.",
  },
  {
    value: "25 + 10",
    label: "Global Practice",
    detail: "25 years in Kuwait & 10 years in Saudi Arabia refined our craft.",
  },
  {
    value: "25k+",
    label: "Happy Customers",
    detail: "Smiles restored for 25,000+ patients across generations.",
  },
];

const fatherImg = "/father.jpeg";
const childImg = "/child_image.jpg";

const Experience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-[#FFFFF0] py-20 text-[#000000] md:py-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-linear-to-b from-[#F05B28]/10 to-transparent blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 md:px-10 lg:flex-row lg:items-center lg:gap-12">
        <div
          className={`flex-1 space-y-8 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#F05B28]">
            <span className="h-px w-10 bg-[#F05B28]" />
            Trusted Experience
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              40 years of family-rooted dental excellence.
            </h2>
            <p className="text-base leading-relaxed text-[#000000]/80 sm:text-lg">
              Our clinic opened in 2006 with a simple promise—deliver the warmth
              of family dentistry with global standards. Inspired by a father who
              served 25 years in Kuwait and 10 years in Saudi Arabia, we have
              welcomed generations of patients who now feel like family.
            </p>
            <p className="text-base leading-relaxed text-[#000000]/80 sm:text-lg">
              More than 25,000 happy customers have trusted us with preventative,
              restorative, and cosmetic treatments. Every smile represents a
              story of careful listening, personalised planning, and gentle care.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`rounded-2xl border border-[#F05B28]/20 bg-white/70 p-6 shadow-lg shadow-[#F05B28]/10 transition-all duration-500 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <p className="text-3xl font-bold text-[#F05B28]">{stat.value}</p>
                <p className="mt-2 text-lg font-semibold text-[#000000]">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-[#000000]/70">{stat.detail}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#F05B28] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#FFFFF0] shadow-lg shadow-[#F05B28]/40 transition hover:-translate-y-1 hover:bg-[#d34d20]"
            >
              Book a visit
            </a>
            <p className="text-sm uppercase tracking-[0.25em] text-[#000000]/70">
              Family-owned since 2006
            </p>
          </div>
        </div>

        <div
          className={`relative flex flex-1 items-center justify-center transition-all duration-700 ease-out lg:justify-end ${
            isVisible
              ? "translate-y-0 opacity-100 delay-150"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative w-full max-w-md">
            <div className="rounded-[2.5rem] border border-[#F05B28]/20 bg-linear-to-b from-white via-[#FFF9EE] to-[#FFE2D0] p-4 shadow-2xl shadow-[#F05B28]/20">
              <img
                src={fatherImg}
                alt="Clinic founder whose global experience shaped our care"
                className="h-88 w-full rounded-4xl object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-1/2 hidden w-[85%] -translate-x-1/2 rounded-2xl bg-white/95 backdrop-blur-sm px-6 py-3 text-sm text-[#000000] shadow-lg border border-slate-200 sm:block">
                Father & Mentor — 25 yrs in Kuwait, 10 yrs in Saudi Arabia
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-white/95 backdrop-blur-sm px-6 py-4 text-sm text-[#000000] shadow-lg border border-slate-200 sm:hidden">
              Father & Mentor — 25 yrs in Kuwait, 10 yrs in Saudi Arabia
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-44 rounded-3xl border-2 border-white bg-white/90 p-3 shadow-xl shadow-[#F05B28]/20 sm:block">
              <img
                src={childImg}
                alt="Second-generation dentist continuing the legacy"
                className="h-40 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-xs font-semibold text-[#000000]">
                Second-generation specialist keeping smiles youthful.
              </p>
            </div>
            <div className="mt-8 rounded-3xl border-2 border-white bg-white/95 p-4 shadow-xl shadow-[#F05B28]/20 sm:hidden">
              <img
                src={childImg}
                alt="Second-generation dentist continuing the legacy"
                className="h-52 w-full rounded-2xl object-bottom"
                loading="lazy"
              />
              <p className="mt-4 text-base font-semibold leading-snug text-[#000000]">
                Second-generation specialist keeping smiles youthful.
              </p>
            </div>
            <div className="absolute -top-10 right-0 rounded-2xl bg-[#F05B28] px-5 py-4 text-white shadow-2xl">
              <p className="text-3xl font-bold">25k+</p>
              <p className="text-xs uppercase tracking-wide">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;