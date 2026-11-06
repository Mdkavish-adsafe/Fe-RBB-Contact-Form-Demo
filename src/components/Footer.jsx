export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Overview */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-500 to-teal-400 flex items-center justify-center text-white font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Rising Beyond Borders
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Empowering global growth, cross-border strategies, and tailored advisory solutions for organizations navigating international expansion.
            </p>
            <p className="text-xs text-brand-400 font-medium">
              Demonstration Contact Ingestion Pipeline &bull; Cloudflare Workers &amp; Turnstile Protected
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section Placeholder */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 font-medium">Email:</span>
                <a href="mailto:kavish@risingbeyondborders.org" className="text-gray-300 hover:text-white transition">kavish@risingbeyondborders.org</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 font-medium">Phone:</span>
                <a href="tel:+918983791881" className="text-gray-300 hover:text-white transition">+91 8983791881</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 font-medium">Office:</span>
                <span className="text-gray-300">London EC2N 4AG, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; 2024 Rising Beyond Borders. All rights reserved.</p>
          <p>Protected by Cloudflare Turnstile bot deterrence.</p>
        </div>
      </div>
    </footer>
  );
}

