import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

import { PRACTICE_AREAS } from '../../constants/data';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Send form data to the firm's email via mailto fallback
      // Build a structured email body
      const subject = encodeURIComponent(
        `Consultation Request from ${formData.fullName} — ${formData.practiceArea || 'General Inquiry'}`
      );
      const body = encodeURIComponent(
        `New Consultation Request\n` +
        `─────────────────────────\n\n` +
        `Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Practice Area: ${formData.practiceArea || 'Not specified'}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `─────────────────────────\n` +
        `Submitted via ogbemudjeomezi.com contact form`
      );

      // Also attempt to send via the existing chatbot API endpoint as a backup
      try {
        await fetch('https://obeksai.pythonanywhere.com/api/website/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `[CONTACT FORM SUBMISSION]\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPractice Area: ${formData.practiceArea || 'Not specified'}\nMessage: ${formData.message}`,
            ai_id: 'bd64a448-2a4e-4d44-a654-ea05fcb6dcec',
            user_id: '5da6f04a-fc9b-45f1-a4c2-d94012e52c4c',
            client_id: `contact_form_${Date.now()}`,
            conversation_id: `contact_form_${Date.now()}`,
          }),
        });
      } catch {
        // Silently fail — the mailto link is the primary delivery method
      }

      // Open mailto link to send the email directly
      window.open(`mailto:info@ogbemudjeomezi.com?subject=${subject}&body=${body}`, '_self');

      // Mark as submitted after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', practiceArea: '', message: '' });
      }, 500);
    } catch {
      setIsSubmitting(false);
      setSubmitError('Something went wrong. Please try again or email us directly at info@ogbemudjeomezi.com');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 bg-[#EBE6DC] border-b border-[#E6E1D5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B8860B]">
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Schedule a Confidential Consultation
          </h2>
          <p className="text-base text-[#59544B] font-normal leading-relaxed">
            Contact our Victoria Island chambers to consult with our legal practitioners regarding your commercial matter or litigation requirement.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Chambers Address & Direct Contact */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 sm:p-10 rounded-sm space-y-8 shadow-xl relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <h3 className="font-serif text-2xl font-bold text-white">
                Chambers Contact
              </h3>
              <p className="text-xs text-gray-300 font-normal leading-relaxed">
                We respond to all confidential client inquiries within 24 hours during business days.
              </p>
            </div>

            <div className="space-y-6 relative z-10 text-sm font-normal">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white font-serif mb-0.5">Victoria Island Office</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    3rd Floor, 34 Kofo Abayomi Street, Victoria Island, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white font-serif mb-0.5">Telephone Lines</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    <a href="tel:+2348023032981" className="hover:text-[#D4AF37] transition-colors">+234 802 303 2981</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white font-serif mb-0.5">Direct Email</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    <a href="mailto:info@ogbemudjeomezi.com" className="hover:text-[#D4AF37] transition-colors">info@ogbemudjeomezi.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white font-serif mb-0.5">Office Hours</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM<br />
                    Saturday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#B8860B]" />
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7 bg-[#FCFBFA] border border-[#E6E1D5] p-8 sm:p-10 rounded-sm shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#59544B] font-normal max-w-md mx-auto">
                  Thank you for contacting Ogbemudje, Omezi &amp; Co. Our partners will review your inquiry and contact you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase font-bold tracking-wider text-[#B8860B] underline cursor-pointer pt-2"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F2EB] border border-[#E6E1D5] rounded-xs text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F2EB] border border-[#E6E1D5] rounded-xs text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F2EB] border border-[#E6E1D5] rounded-xs text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]">
                      Practice Area Discipline
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F2EB] border border-[#E6E1D5] rounded-xs text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A]"
                    >
                      <option value="">Select Practice Area</option>
                      {PRACTICE_AREAS.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]">
                    Brief Overview of Legal Matter *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please summarize your legal requirements or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F2EB] border border-[#E6E1D5] rounded-xs text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  />
                </div>

                {submitError && (
                  <div className="text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-md">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#1A1A1A] text-white hover:bg-[#B8860B] text-xs font-semibold px-8 py-3.5 rounded-sm transition-all duration-300 inline-flex items-center justify-center gap-2 tracking-wide group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
