import Navbar from '../components/Navbar';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 text-white py-20 lg:py-28 overflow-hidden"
      >
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-400 rounded-full filter blur-[120px] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400 rounded-full filter blur-[120px] opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600/50 border border-brand-400/30 text-brand-100 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Global Inquiries &amp; Advisory
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Get In Touch
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg sm:text-xl text-brand-100 font-normal leading-relaxed">
            Have a question, proposal, or need strategic guidance across borders? Reach out to our specialized advisory team and we will respond promptly.
          </p>
        </div>
      </section>

      {/* Main Section: Form & Info */}
      <main id="contact" className="flex-1 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ContactInfo />
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

