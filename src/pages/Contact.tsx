import React, { useState } from 'react';
import { hotelData } from '../data/hotelData';
import { SEO } from '../components/common/SEO';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Please enter your name';
    if (!formState.phone.trim()) errs.phone = 'Please enter your contact number';
    if (!formState.message.trim()) errs.message = 'Please type your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*Inquiry via Seven Sky Hotel Website*\n` +
      `• *Name:* ${formState.name || 'Guest'}\n` +
      `• *Phone:* ${formState.phone || 'Not provided'}\n` +
      `• *Subject:* ${formState.subject}\n` +
      `• *Message:* ${formState.message || 'Hello, I have an inquiry about Seven Sky Hotel Murree.'}`
    );
    window.open(`https://wa.me/${hotelData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <SEO
        title="Contact Us | Direct Phone, WhatsApp & Address"
        description="Contact Seven Sky Hotel Murree directly. Call 051-3411412 or 0349-4777770, chat on WhatsApp, or find us on Abid Majeed Road near GPO Chowk."
      />

      {/* Header */}
      <div className="bg-forest-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Direct Front Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Contact Seven Sky Hotel
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            We are here 24 hours a day to answer inquiries regarding room availability, winter heating, travel directions, and group bookings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-lg p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl text-forest-950">Hotel Information</h3>
              
              <div className="space-y-5 text-sm text-stone-700 font-light">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ivory-100 flex items-center justify-center text-gold-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-forest-950 block">Physical Address</span>
                    <p className="text-stone-600 mt-1">
                      {hotelData.location.address},<br />
                      {hotelData.location.city}, {hotelData.location.postalCode}, Pakistan
                    </p>
                    <span className="text-[11px] text-stone-400 block mt-1">Near GPO Chowk & Mall Road</span>
                  </div>
                </div>

                {/* Landline */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ivory-100 flex items-center justify-center text-gold-600 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-forest-950 block">Hotel Landline</span>
                    <a
                      href={`tel:${hotelData.contact.landline}`}
                      className="text-base font-semibold text-forest-900 hover:text-gold-600 font-mono transition-colors block mt-1"
                    >
                      {hotelData.contact.landlineFormatted}
                    </a>
                    <span className="text-[11px] text-stone-400">Front Desk & Reservations</span>
                  </div>
                </div>

                {/* Mobile / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-forest-950 block">Mobile & WhatsApp</span>
                    <a
                      href={`tel:${hotelData.contact.mobile}`}
                      className="text-base font-semibold text-forest-900 hover:text-gold-600 font-mono transition-colors block mt-1"
                    >
                      {hotelData.contact.mobileFormatted}
                    </a>
                    <span className="text-[11px] text-stone-400">Direct booking messages</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ivory-100 flex items-center justify-center text-gold-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-forest-950 block">Front Desk Hours</span>
                    <p className="text-stone-600 mt-1">{hotelData.policies.frontDeskHours}</p>
                    <span className="text-[11px] text-stone-400">24/7 Check-in & luggage care</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-stone-200">
                <a
                  href={`https://wa.me/${hotelData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Seven Sky Hotel Murree, I would like to inquire about room availability.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg p-8 border border-stone-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block">
                  Write to Us
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 mt-1">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Have a general question, winter snowfall query, or group reservation inquiry? Send us a message and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="bg-ivory-50 border border-gold-300/40 rounded-lg p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-forest-950">Thank You, {formState.name}!</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                    Your inquiry has been recorded. Our front desk management will reach out via phone or email shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <Button
                      variant="gold"
                      size="sm"
                      onClick={handleWhatsAppDirect}
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Also Send via WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Tariq Mehmood"
                        className={`w-full px-3.5 py-2.5 bg-ivory-50 border ${
                          errors.name ? 'border-red-500' : 'border-stone-300'
                        } rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none`}
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0300-1234567"
                        className={`w-full px-3.5 py-2.5 bg-ivory-50 border ${
                          errors.phone ? 'border-red-500' : 'border-stone-300'
                        } rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="yourname@example.com"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-stone-300 rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-stone-300 rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none"
                      >
                        <option value="General Question">General Question</option>
                        <option value="Winter Snow Stay & Heating">Winter Snow Stay & Heating</option>
                        <option value="Group / Family Booking">Group / Family Booking</option>
                        <option value="Directions & Parking">Directions & Parking</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Please let us know how we can assist you..."
                      className={`w-full px-3.5 py-2.5 bg-ivory-50 border ${
                        errors.message ? 'border-red-500' : 'border-stone-300'
                      } rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 outline-none`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full sm:flex-1"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Send Message
                    </Button>

                    <Button
                      type="button"
                      variant="gold"
                      size="md"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 border-none"
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Dispatch on WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
