import React from 'react'

const Experience = () => {
  const stats = [
    {
      value: '40+',
      label: 'Years of Expertise',
      detail: 'Trusted multi-generational dental care for every smile.'
    },
    {
      value: '20',
      label: 'Years Since Opening',
      detail: 'Clinic founded in 2006 and serving families ever since.'
    },
    {
      value: '25K+',
      label: 'Smiles Served',
      detail: 'More than 25,000 patients cared for with compassion and precision.'
    },
    {
      value: '25',
      label: 'Years in Kuwait',
      detail: 'Father led advanced restorative care across Kuwait.'
    },
    {
      value: '10',
      label: 'Years in Saudi Arabia',
      detail: 'Refined cosmetic dentistry in premium Saudi clinics.'
    }
  ]

  return (
    <section id="experience" className="relative py-20 px-6 bg-[#FFFFF0] overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-64 h-64 bg-[#F05B28] rounded-full blur-3xl absolute -top-20 -left-10"></div>
        <div className="w-72 h-72 bg-[#000000] rounded-full blur-3xl absolute bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm tracking-[0.3em] uppercase text-[#000000]/60">Our Legacy</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#000000]">
            Experience Rooted In
            <span style={{ color: '#F05B28' }}> Generations of Care</span>
          </h2>
          <p className="text-lg text-[#000000]/70 max-w-3xl mx-auto">
            From our clinic’s beginning in 2006 to decades of international practice, we blend
            refined techniques with heartfelt care to deliver confident smiles. Across India and the
            Middle East, we have guided more than 25,000 patients to healthier, brighter teeth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white shadow-lg rounded-2xl p-6 border border-[#F05B28]/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-4xl font-bold" style={{ color: '#F05B28' }}>
                {stat.value}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#000000]">{stat.label}</h3>
              <p className="mt-3 text-sm text-[#000000]/70">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#000000]/10 shadow-lg">
              <p className="text-sm tracking-[0.3em] uppercase text-[#000000]/60 mb-3">
                Established 2006
              </p>
              <h3 className="text-3xl font-semibold text-[#000000]">
                20-Year-Old Clinic Built on Trust
              </h3>
              <p className="mt-4 text-[#000000]/70 leading-relaxed">
                Identiti Dental opened its doors in 2006 with a simple purpose: deliver precise,
                compassionate dentistry to every family. Two decades later, we still honor that promise
                with modern technology, gentle techniques, and truly personal care.
              </p>
            </div>

            <div className="bg-[#000000] text-white rounded-3xl p-8 shadow-2xl">
              <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-3">
                International Craftsmanship
              </p>
              <h3 className="text-3xl font-semibold">
                A Father’s Expertise Around the Gulf
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed">
                With 25 years of restorative dentistry in Kuwait and another 10 years elevating smiles
                in Saudi Arabia, our family’s Middle East experience brings world-class standards back
                home to Identiti Dental every single day.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#F05B28]/20">
            <p className="text-sm tracking-[0.3em] uppercase text-[#F05B28]">
              Our Story at a Glance
            </p>
            <div className="mt-6 space-y-6">
              {[
                {
                  year: '2006',
                  title: 'Clinic Opens',
                  text: 'Identiti Dental welcomes its first patients as a boutique clinic with big ambitions.'
                },
                {
                  year: '2010s',
                  title: 'Growing Trust',
                  text: 'Families across the city rely on our gentle approach for preventive and restorative care.'
                },
                {
                  year: 'Today',
                  title: '40 Years Strong',
                  text: 'Combined experience from India, Kuwait, and Saudi Arabia fuels our modern smile design studio.'
                },
                {
                  year: '25K+',
                  title: 'Patients Served',
                  text: 'An ever-growing community trusts us for preventive, cosmetic, and restorative care.'
                }
              ].map((item) => (
                <div key={item.year} className="flex gap-4">
                  <div>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-semibold"
                      style={{ backgroundColor: '#F05B28', color: '#FFFFF0' }}
                    >
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#000000]">{item.title}</h4>
                    <p className="text-sm text-[#000000]/70 mt-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience