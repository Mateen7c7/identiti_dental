import { useEffect, useState } from "react";

const REVIEWS = [
  {
    name: "Sofia Malik",
    title: "Smile Makeover",
    rating: 5,
    review:
      "The team treated me like family. They explained every step, calmed my nerves, and the results are beyond what I imagined. I get compliments on my smile daily.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Olivia Chen",
    title: "Invisalign Journey",
    rating: 5,
    review:
      "Appointments ran on time, the tech was modern, and they listened to my concerns. My aligners were done ahead of schedule and I’m obsessed with how natural my teeth look.",
    image:
      "https://images.unsplash.com/photo-1549351236-caca0f174515?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Noah Patel",
    title: "Implant + Whitening",
    rating: 4,
    review:
      "They walked me through financing, made the process painless, and followed up afterward. The implant feels like a real tooth and whitening boosted my confidence.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Elena Novak",
    title: "Emergency Visit",
    rating: 5,
    review:
      "I cracked a tooth before a big event. They squeezed me in, fixed it the same day, and even sent me home with aftercare goodies. Truly life savers.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];

const Star = ({ filled }) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      style={{ color: filled ? '#E7522D' : '#cbd5e1' }}
      fill="currentColor"
    >
    <path d="M12 2.75 14.91 9l6.59.52-5.02 4.2 1.58 6.33L12 16.77 5.94 20.05l1.58-6.33L2.5 9.5 9.09 9 12 2.75Z" />
  </svg>
);

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % REVIEWS.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 mx-auto h-[520px] w-[90%] max-w-5xl rounded-3xl blur-3xl" style={{ background: 'linear-gradient(to right, rgba(231, 82, 45, 0.1), rgba(231, 82, 45, 0.05), white)' }} />
      <div className="flex flex-col gap-10 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: '#E7522D' }}>
            Loved by Patients
          </p>
          <h2 className="text-3xl font-bold md:text-4xl" style={{ color: '#1D1C1C' }}>
            Testimonials & Patient Stories
          </h2>
          <p className="text-base text-slate-600 md:text-lg">
            See why thousands trust Identiti Dental for smile makeovers, urgent
            care, and every visit in between.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {REVIEWS.map((review, index) => (
              <article
                key={review.name}
                className="w-full shrink-0 rounded-3xl px-1 md:px-2"
              >
                <div
                  className={`group flex h-full flex-col gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                    index === current ? "ring-2" : ""
                  }`}
                  style={index === current ? { ringColor: '#E7522D', ringWidth: '2px' } : {}}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-slate-100">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold" style={{ color: '#1D1C1C' }}>
                        {review.name}
                      </p>
                      <p className="text-sm text-slate-500">{review.title}</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={`${review.name}-star-${starIndex}`}
                        filled={starIndex < review.rating}
                      />
                    ))}
                  </div>

                  <blockquote className="text-slate-600">
                    “{review.review}”
                  </blockquote>
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Previous review"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/80 p-3 text-slate-500 shadow-md transition hover:scale-105 hover:text-slate-900"
          >
            ‹
          </button>
          <button
            aria-label="Next review"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/80 p-3 text-slate-500 shadow-md transition hover:scale-105 hover:text-slate-900"
          >
            ›
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {REVIEWS.map((review, index) => (
            <button
              key={`dot-${review.name}`}
              aria-label={`Go to review ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              style={current === index ? { backgroundColor: '#E7522D' } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;