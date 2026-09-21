import React, { useState } from 'react';
import { CONTACT_INFO } from '../../constants/data';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 bg-[var(--color-mist)] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-obsidian)] leading-tight">
            We Are Ready to <em className="italic text-[var(--color-champagne)] font-serif">Assist You</em>
          </h2>
          <p className="text-[0.95rem] text-gray-600 max-w-2xl leading-relaxed mt-2 font-light">
            Schedule a confidential consultation or submit an inquiry directly to our legal team in Victoria Island, Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Info Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Chambers Open &bull; 9:00 AM &ndash; 5:00 PM</span>
            </div>

            <div className="bg-white border border-[var(--color-line)] p-6 rounded-md shadow-xs flex items-start gap-4 hover:border-[var(--color-champagne)]/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-champagne)] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[var(--color-obsidian)] mb-1">Office Address</h4>
                <p className="text-[0.88rem] text-gray-600 leading-relaxed font-light whitespace-pre-line">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            <div className="bg-white border border-[var(--color-line)] p-6 rounded-md shadow-xs flex items-start gap-4 hover:border-[var(--color-champagne)]/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-champagne)] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[var(--color-obsidian)] mb-1">Telephone</h4>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-[0.88rem] text-gray-700 hover:text-[var(--color-champagne)] font-medium transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="bg-white border border-[var(--color-line)] p-6 rounded-md shadow-xs flex items-start gap-4 hover:border-[var(--color-champagne)]/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-champagne)] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[var(--color-obsidian)] mb-1">Email Inquiry</h4>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[0.88rem] text-gray-700 hover:text-[var(--color-champagne)] font-medium transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="bg-white border border-[var(--color-line)] p-6 rounded-md shadow-xs flex items-start gap-4 hover:border-[var(--color-champagne)]/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[var(--color-obsidian)] text-[var(--color-champagne)] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[var(--color-obsidian)] mb-1">Working Hours</h4>
                <p className="text-[0.88rem] text-gray-600 leading-relaxed font-light whitespace-pre-line">
                  {CONTACT_INFO.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7 bg-white border border-[var(--color-line)] rounded-md p-8 sm:p-10 shadow-lg">
            <h3 className="font-serif text-2xl font-semibold text-[var(--color-obsidian)] mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-md text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-2xl font-semibold">Inquiry Successfully Sent</h4>
                <p className="text-sm text-emerald-700 font-light max-w-md mx-auto">
                  Thank you for reaching out to Ogbemudje, Omezi &amp; Co. A legal representative will respond to your message promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-[var(--color-champagne)] underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-line)] rounded-xs text-[0.88rem] text-gray-800 focus:outline-none focus:border-[var(--color-champagne)] focus:ring-1 focus:ring-[var(--color-champagne)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-line)] rounded-xs text-[0.88rem] text-gray-800 focus:outline-none focus:border-[var(--color-champagne)] focus:ring-1 focus:ring-[var(--color-champagne)] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234…"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-line)] rounded-xs text-[0.88rem] text-gray-800 focus:outline-none focus:border-[var(--color-champagne)] focus:ring-1 focus:ring-[var(--color-champagne)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Brief subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--color-line)] rounded-xs text-[0.88rem] text-gray-800 focus:outline-none focus:border-[var(--color-champagne)] focus:ring-1 focus:ring-[var(--color-champagne)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-1.5">
                    Legal Matter Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your legal requirements or inquiry…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-line)] rounded-xs text-[0.88rem] text-gray-800 focus:outline-none focus:border-[var(--color-champagne)] focus:ring-1 focus:ring-[var(--color-champagne)] transition-all resize-y min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full mt-2" icon={<Send className="w-4 h-4" />}>
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
