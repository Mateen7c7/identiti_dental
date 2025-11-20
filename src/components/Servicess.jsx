import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Dental Checkup',
    description:
      'Digital diagnostics, oral cancer screening, and tailored prevention plans at every visit.',
    accent: 'from-sky-400/20 via-sky-500/10 to-transparent',
    icon: (
      <path
        d="M8 4.5C9.933 4.5 11.5 6.067 11.5 8 11.5 9.933 9.933 11.5 8 11.5 6.067 11.5 4.5 9.933 4.5 8 4.5 6.067 6.067 4.5 8 4.5zM8 11.5V15M8 11.5C10.7614 11.5 13 9.26142 13 6.5 13 4.01472 10.9853 2 8.5 2 5.73858 2 3.5 4.23858 3.5 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    )
  },
  {
    title: 'Teeth Cleaning & Whitening',
    description:
      'Advanced airflow polishing plus safe LED whitening to brighten up to 8 shades.',
    accent: 'from-amber-400/20 via-amber-500/10 to-transparent',
    icon: (
      <>
        <path
          d="M6 2.5c0 .828-.672 1.5-1.5 1.5S3 3.328 3 2.5 3.672 1 4.5 1 6 1.672 6 2.5zM12 6.5c0 .828-.672 1.5-1.5 1.5S9 7.328 9 6.5 9.672 5 10.5 5 12 5.672 12 6.5z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M4.5 4v10M10.5 8v6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </>
    )
  },
  {
    title: 'Root Canal',
    description:
      'Microscope-assisted therapy with single-visit comfort protocols for faster healing.',
    accent: 'from-rose-400/20 via-rose-500/10 to-transparent',
    icon: (
      <path
        d="M5 2h6c.552 0 1 .448 1 1v5.5c0 2.209-1.791 4-4 4s-4-1.791-4-4V3c0-.552.448-1 1-1zM8 12v2.5M6 2l1 3m3-3-1 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: 'Braces & Aligners',
    description:
      'Discreet clear aligners and smart self-ligating braces guided by 3D smile design.',
    accent: 'from-indigo-400/20 via-indigo-500/10 to-transparent',
    icon: (
      <path
        d="M3 8h10M4 5.5h1.5M10.5 5.5H12M4 10.5h1.5M10.5 10.5H12M6 5.5v5M9 5.5v5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: 'Cosmetic Dentistry',
    description:
      'Porcelain veneers, bonding, and smile makeovers tailored to facial harmony.',
    accent: 'from-fuchsia-400/20 via-fuchsia-500/10 to-transparent',
    icon: (
      <path
        d="M4.5 4c2 0 2.5-1.5 3.5-1.5S10 4 11.5 4c1.5 0 2.5-1 2.5-1s-1 9-5 9S2 3 2 3s1 1 2.5 1z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: 'Dental Implants',
    description:
      'Guided implant surgery with 3D-printed templates for precise, long-lasting smiles.',
    accent: 'from-emerald-400/20 via-emerald-500/10 to-transparent',
    icon: (
      <path
        d="M6 2h4v6c0 1.105-.895 2-2 2s-2-.895-2-2V2zM6 14h4M6 11h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    title: 'Kids Dentistry',
    description:
      'Fun, fear-free visits with fluoride varnish, sealants, and growth tracking.',
    accent: 'from-lime-400/20 via-lime-500/10 to-transparent',
    icon: (
      <>
        <path
          d="M4 7c-.552 0-1-.448-1-1V3.5C3 2.672 3.672 2 4.5 2S6 2.672 6 3.5V6c0 .552-.448 1-1 1zM10 7c-.552 0-1-.448-1-1V3.5C9 2.672 9.672 2 10.5 2S12 2.672 12 3.5V6c0 .552-.448 1-1 1z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M2.5 9c1 1.5 2.5 2.5 5.5 2.5S12.5 10.5 13.5 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )
  }
]

const Servicess = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cardIndex = Number(entry.target.getAttribute('data-index'))
            setVisibleCards(prev =>
              prev.includes(cardIndex) ? prev : [...prev, cardIndex]
            )
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )

    cardRefs.current.forEach(card => card && observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(231, 82, 45, 0.15), transparent 60%)' }} />
        <div className="absolute -top-20 right-10 h-72 w-72 animate-pulse rounded-full blur-3xl" style={{ backgroundColor: 'rgba(231, 82, 45, 0.2)' }} />
        <div className="absolute bottom-0 left-10 h-80 w-80 animate-pulse rounded-full blur-3xl" style={{ backgroundColor: 'rgba(231, 82, 45, 0.2)' }} />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(231, 82, 45, 0.9)' }}>
            Our Services
          </p>
          <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Everything your smile needs, in one calming destination
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            From preventative visits to transformative cosmetic treatments, our
            curated services are designed to keep every member of the family
            confident and comfortable.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-index={index}
              ref={element => {
                cardRefs.current[index] = element
              }}
              className={`scroll-scale-in group relative rounded-3xl border border-white/10 bg-linear-to-br ${service.accent} p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur transition duration-500 ease-out ${
                visibleCards.includes(index) ? 'visible' : ''
              }`}
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/60 shadow-[0_20px_40px_rgba(8,47,73,0.65)] transition duration-500 group-hover:scale-110" style={{ color: '#E7522D' }}>
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {service.icon}
                </svg>
                <div className="absolute inset-0 -z-10 rounded-2xl border border-white/5" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {service.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold" style={{ color: '#E7522D' }}>
                <span>Learn more</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8h8M8 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />
              <div className="pointer-events-none absolute inset-x-4 bottom-4 top-4 rounded-[26px] bg-linear-to-b from-white/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicess