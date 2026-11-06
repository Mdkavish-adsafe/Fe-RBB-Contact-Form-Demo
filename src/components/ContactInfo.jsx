export default function ContactInfo() {
  const cards = [
    {
      title: 'Email Us',
      value: 'kavish@risingbeyondborders.org',
      badge: 'Direct Contact',
      description: 'Our team typically responds within 1 business day.',
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:kavish@risingbeyondborders.org',
    },
    {
      title: 'Call Us',
      value: '+91 8983791881',
      badge: 'Direct Line',
      description: 'Mon - Fri from 9:00 AM to 6:00 PM IST.',
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+918983791881',
    },
    {
      title: 'Headquarters',
      value: '100 Bishopsgate, London EC2N 4AG, UK',
      badge: 'Office address placeholder',
      description: 'Consultations by scheduled appointment.',
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: null,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Direct Channels</h2>
        <p className="mt-2 text-sm text-gray-600">
          Have an urgent inquiry or prefer direct correspondence? Connect with our advisory desk through any of the channels below.
        </p>
      </div>

      <div className="space-y-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-6 transition-all duration-200 hover:shadow-lg hover:border-brand-200 flex items-start gap-4"
          >
            <div className="shrink-0 p-3 rounded-xl bg-brand-50 border border-brand-100">
              {item.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  {item.badge}
                </span>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  className="mt-1 block text-sm font-medium text-brand-600 hover:text-brand-800 break-all transition"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-sm font-medium text-gray-800 break-words">
                  {item.value}
                </p>
              )}

              <p className="mt-1 text-xs text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Response guarantee note */}
      <div className="rounded-xl bg-gradient-to-br from-brand-50 to-blue-50/50 border border-brand-100 p-5">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-brand-900">Confidentiality &amp; Security</h4>
            <p className="mt-1 text-xs text-brand-700 leading-relaxed">
              All communications are safeguarded under strict privacy standards. We do not share your contact details with external third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

