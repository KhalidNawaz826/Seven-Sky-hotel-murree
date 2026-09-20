import React, { useState } from 'react';
import { Calendar, Users, Home, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { roomsData } from '../../data/roomsData';
import { hotelData } from '../../data/hotelData';
import { BookingInquiryData } from '../../types';
import { generateWhatsAppInquiryUrl } from '../../utils/whatsapp';
import { getTomorrowDate, getDayAfterTomorrowDate } from '../../utils/formatters';
import { Button } from '../common/Button';

interface BookingInquiryFormProps {
  initialRoomType?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const BookingInquiryForm: React.FC<BookingInquiryFormProps> = ({
  initialRoomType = '',
  onSuccess,
  compact = false
}) => {
  const [formData, setFormData] = useState<BookingInquiryData>({
    checkIn: getTomorrowDate(),
    checkOut: getDayAfterTomorrowDate(),
    roomType: initialRoomType || roomsData[0].name,
    adults: 2,
    children: 0,
    roomsCount: 1,
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.guestName.trim()) {
      errs.guestName = 'Please enter your full name';
    }
    if (!formData.guestPhone.trim()) {
      errs.guestPhone = 'Please enter your mobile or WhatsApp phone number';
    }
    if (!formData.checkIn) {
      errs.checkIn = 'Check-in date is required';
    }
    if (!formData.checkOut) {
      errs.checkOut = 'Check-out date is required';
    } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      errs.checkOut = 'Check-out must be after check-in date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleWhatsAppInquiry = () => {
    const url = generateWhatsAppInquiryUrl({
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      roomType: formData.roomType,
      guests: Number(formData.adults) + Number(formData.children),
      rooms: formData.roomsCount,
      guestName: formData.guestName || undefined,
      notes: formData.notes || undefined
    });
    window.open(url, '_blank');
    if (onSuccess) onSuccess();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save inquiry to local state / future backend integration point
    try {
      const pastInquiries = JSON.parse(localStorage.getItem('seven_sky_inquiries') || '[]');
      pastInquiries.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('seven_sky_inquiries', JSON.stringify(pastInquiries));
    } catch {
      // Ignore storage errors
    }

    setSubmitted(true);
    if (onSuccess) {
      setTimeout(() => onSuccess(), 4000);
    }
  };

  if (submitted) {
    return (
      <div className="bg-ivory-50 border border-gold-300/40 rounded-lg p-6 sm:p-8 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl text-forest-950">Inquiry Request Received</h3>
        <p className="text-sm text-stone-600 max-w-md mx-auto">
          Thank you, <strong className="text-forest-950">{formData.guestName}</strong>. Our front desk team at Seven Sky Hotel has received your availability request for <strong className="text-forest-950">{formData.roomType}</strong>.
        </p>

        <div className="bg-white p-4 rounded border border-stone-200 text-xs text-stone-600 max-w-sm mx-auto text-left space-y-1">
          <div><strong>Dates:</strong> {formData.checkIn} to {formData.checkOut}</div>
          <div><strong>Guests:</strong> {formData.adults} Adults, {formData.children} Children ({formData.roomsCount} Room)</div>
          <div><strong>Contact:</strong> {formData.guestPhone}</div>
        </div>

        <p className="text-xs text-stone-500">
          For immediate room confirmation or urgent snow travel inquiries, you can also reach our front desk directly:
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <Button
            variant="gold"
            size="sm"
            onClick={handleWhatsAppInquiry}
            icon={<MessageSquare className="w-4 h-4" />}
          >
            Open in WhatsApp
          </Button>
          <Button
            variant="outline"
            size="sm"
            href={`tel:${hotelData.contact.landline}`}
            icon={<Phone className="w-4 h-4" />}
          >
            Call Front Desk ({hotelData.contact.landlineFormatted})
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Notice Banner */}
      <div className="bg-forest-50 border border-forest-200 text-forest-900 rounded p-3 text-xs flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Direct Reservation Inquiry:</span> Room rates in Murree vary seasonally. Submitting this form sends your dates directly to the Seven Sky Hotel front desk for current availability and best rates.
        </div>
      </div>

      {/* Date & Room Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Check-In */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-gold-600" />
            Check-In Date *
          </label>
          <input
            type="date"
            name="checkIn"
            min={new Date().toISOString().split('T')[0]}
            value={formData.checkIn}
            onChange={handleInputChange}
            className={`w-full px-3 py-2.5 bg-white border ${
              errors.checkIn ? 'border-red-500' : 'border-stone-300'
            } rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none transition-all`}
          />
          {errors.checkIn && <p className="text-[11px] text-red-600 mt-1">{errors.checkIn}</p>}
        </div>

        {/* Check-Out */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-gold-600" />
            Check-Out Date *
          </label>
          <input
            type="date"
            name="checkOut"
            min={formData.checkIn || new Date().toISOString().split('T')[0]}
            value={formData.checkOut}
            onChange={handleInputChange}
            className={`w-full px-3 py-2.5 bg-white border ${
              errors.checkOut ? 'border-red-500' : 'border-stone-300'
            } rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none transition-all`}
          />
          {errors.checkOut && <p className="text-[11px] text-red-600 mt-1">{errors.checkOut}</p>}
        </div>
      </div>

      {/* Room Category & Counts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-gold-600" />
            Room Preference
          </label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
            className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none transition-all"
          >
            {roomsData.map((room) => (
              <option key={room.id} value={room.name}>
                {room.name} ({room.bedType})
              </option>
            ))}
            <option value="Any Available Room">Any Available Room</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
            Rooms Count
          </label>
          <select
            name="roomsCount"
            value={formData.roomsCount}
            onChange={handleInputChange}
            className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none transition-all"
          >
            <option value={1}>1 Room</option>
            <option value={2}>2 Rooms</option>
            <option value={3}>3 Rooms</option>
            <option value={4}>4+ Rooms</option>
          </select>
        </div>
      </div>

      {/* Guests Count */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-gold-600" />
            Adults (12+ yrs)
          </label>
          <select
            name="adults"
            value={formData.adults}
            onChange={handleInputChange}
            className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none"
          >
            <option value={1}>1 Adult</option>
            <option value={2}>2 Adults</option>
            <option value={3}>3 Adults</option>
            <option value={4}>4 Adults</option>
            <option value={5}>5+ Adults</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
            Children (0-11 yrs)
          </label>
          <select
            name="children"
            value={formData.children}
            onChange={handleInputChange}
            className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none"
          >
            <option value={0}>0 Children</option>
            <option value={1}>1 Child</option>
            <option value={2}>2 Children</option>
            <option value={3}>3+ Children</option>
          </select>
        </div>
      </div>

      {/* Guest Contact Information */}
      <div className="pt-2 border-t border-stone-200">
        <h4 className="text-xs uppercase tracking-widest font-bold text-forest-900 mb-3">
          Your Contact Details
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gold-600" />
              Full Name *
            </label>
            <input
              type="text"
              name="guestName"
              placeholder="e.g. Tariq Khan"
              value={formData.guestName}
              onChange={handleInputChange}
              className={`w-full px-3 py-2.5 bg-white border ${
                errors.guestName ? 'border-red-500' : 'border-stone-300'
              } rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none transition-all`}
            />
            {errors.guestName && <p className="text-[11px] text-red-600 mt-1">{errors.guestName}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              Mobile / WhatsApp Number *
            </label>
            <input
              type="tel"
              name="guestPhone"
              placeholder="e.g. 0300-1234567"
              value={formData.guestPhone}
              onChange={handleInputChange}
              className={`w-full px-3 py-2.5 bg-white border ${
                errors.guestPhone ? 'border-red-500' : 'border-stone-300'
              } rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none transition-all`}
            />
            {errors.guestPhone && <p className="text-[11px] text-red-600 mt-1">{errors.guestPhone}</p>}
          </div>
        </div>

        <div className="mt-3">
          <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-gold-600" />
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="guestEmail"
            placeholder="e.g. yourname@example.com"
            value={formData.guestEmail}
            onChange={handleInputChange}
            className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none"
          />
        </div>

        {!compact && (
          <div className="mt-3">
            <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
              Special Requests or Questions
            </label>
            <textarea
              name="notes"
              rows={2}
              placeholder="e.g. Arrival time, winter heating preferences, parking for SUV..."
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-stone-300 rounded-sm text-sm text-charcoal-900 focus:ring-2 focus:ring-forest-800 focus:border-forest-800 outline-none"
            />
          </div>
        )}
      </div>

      {/* Submission Actions */}
      <div className="pt-3 flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full sm:flex-1"
        >
          Request Availability
        </Button>

        <Button
          type="button"
          variant="gold"
          size="md"
          className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 border-none"
          onClick={handleWhatsAppInquiry}
          icon={<MessageSquare className="w-4 h-4" />}
        >
          Inquire via WhatsApp
        </Button>
      </div>
      <p className="text-[11px] text-stone-500 text-center pt-1">
        Direct hotel reservation inquiry. No payment card required.
      </p>
    </form>
  );
};
