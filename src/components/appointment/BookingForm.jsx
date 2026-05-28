'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiUser, FiPhone, FiMail, FiFileText, FiClock, FiCheckCircle, FiDollarSign, FiCreditCard } from 'react-icons/fi';
import { services } from '@/data/services';

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM'
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    timeSlot: '',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    paymentMethod: 'hospital', // 'hospital' or 'online'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const validateStep1 = () => {
    return formData.service && formData.date && formData.timeSlot;
  };

  const validateStep2 = () => {
    const phoneRegex = /^[0-9]{10}$/;
    return formData.fullName.trim().length > 2 && phoneRegex.test(formData.phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request and payment gateway loader
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setBookingSuccess(true);
  };

  if (bookingSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 md:p-12 text-center border-2 border-lavender-200 max-w-2xl mx-auto bg-white"
      >
        <div className="w-20 h-20 bg-lavender-100 rounded-full flex items-center justify-center text-lavender-600 mx-auto mb-6">
          <FiCheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          Your appointment with <strong>Dr. Aparna Bhatwal Goyal</strong> has been scheduled successfully. A confirmation message with instructions has been sent to your phone number.
        </p>

        <div className="bg-lavender-50 p-6 rounded-2xl text-left mb-8 border border-lavender-100 max-w-md mx-auto space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 font-semibold">Patient:</span>
            <span className="text-gray-900 font-bold">{formData.fullName}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 font-semibold">Service:</span>
            <span className="text-gray-900 font-bold">
              {services.find((s) => s.slug === formData.service)?.title || formData.service}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 font-semibold">Date & Time:</span>
            <span className="text-gray-900 font-bold">{formData.date} at {formData.timeSlot}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 font-semibold">Payment:</span>
            <span className="text-lavender-600 font-bold uppercase">
              {formData.paymentMethod === 'online' ? 'Paid Online (Mock)' : 'Pay at SNG Hospital'}
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            setFormData({
              service: '',
              date: '',
              timeSlot: '',
              fullName: '',
              phone: '',
              email: '',
              notes: '',
              paymentMethod: 'hospital',
            });
            setBookingSuccess(false);
            setStep(1);
          }}
          className="btn-primary"
        >
          Book Another Appointment
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-card max-w-3xl mx-auto bg-white border border-lavender-100 p-6 md:p-10">
      {/* Step Indicators */}
      <div className="flex justify-between items-center mb-10 max-w-md mx-auto">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                step >= num
                  ? 'bg-lavender-600 text-white shadow-md shadow-lavender-500/20'
                  : 'bg-lavender-100 text-lavender-600'
              }`}
            >
              {num}
            </div>
            {num < 3 && (
              <div
                className={`h-1 w-16 sm:w-24 transition-colors duration-300 ${
                  step > num ? 'bg-lavender-600' : 'bg-lavender-100'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* Step 1: Select Service, Date & Slot */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 border-b pb-3 mb-6">Select Scan & Timing</h3>

              {/* Service Select */}
              <div>
                <label className="form-label" htmlFor="service">
                  Select Diagnostic Service / Scan *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">-- Choose a Service --</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Date Picker */}
                <div>
                  <label className="form-label" htmlFor="date">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="form-input text-gray-900"
                      required
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="form-label">Preferred Time Slot *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData((prev) => ({ ...prev, timeSlot: slot }))}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                          formData.timeSlot === slot
                            ? 'bg-lavender-600 border-lavender-600 text-white shadow-md shadow-lavender-500/20'
                            : 'border-lavender-100 hover:border-lavender-300 text-gray-700 bg-white'
                        }`}
                      >
                        <FiClock className="inline mr-1 w-3.5 h-3.5" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!validateStep1()}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Patient Information */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 border-b pb-3 mb-6">Patient Information</h3>

              {/* Full Name */}
              <div>
                <label className="form-label" htmlFor="fullName">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="form-input pl-12"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                  <label className="form-label" htmlFor="phone">
                    Phone Number (10 digits) *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. 9876543210"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input pl-12"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="form-label" htmlFor="email">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input pl-12"
                    />
                  </div>
                </div>
              </div>

              {/* Medical Notes */}
              <div>
                <label className="form-label" htmlFor="notes">
                  Symptoms / Medical History / Reference Doctor (Optional)
                </label>
                <div className="relative">
                  <FiFileText className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Provide any clinical information or symptoms"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="form-input pl-12"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button type="button" onClick={prevStep} className="btn-secondary">
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!validateStep2()}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Payment Options & Submission */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 border-b pb-3 mb-6">Payment Options</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Pay at Hospital */}
                <label
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    formData.paymentMethod === 'hospital'
                      ? 'border-lavender-500 bg-lavender-50/50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="hospital"
                    checked={formData.paymentMethod === 'hospital'}
                    onChange={handleInputChange}
                    className="mt-1 text-lavender-600 focus:ring-lavender-500"
                  />
                  <div>
                    <span className="font-bold text-gray-900 block mb-1">Pay at SNG Hospital</span>
                    <span className="text-xs text-gray-500 leading-relaxed block">
                      Secure your slot online now and pay the diagnostic fee at the hospital reception desk on arrival.
                    </span>
                  </div>
                </label>

                {/* Prepay Online */}
                <label
                  className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    formData.paymentMethod === 'online'
                      ? 'border-lavender-500 bg-lavender-50/50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleInputChange}
                    className="mt-1 text-lavender-600 focus:ring-lavender-500"
                  />
                  <div>
                    <span className="font-bold text-gray-900 block mb-1">Prepay Online (Mock)</span>
                    <span className="text-xs text-gray-500 leading-relaxed block">
                      Pay diagnostic fee online using a mock Razorpay payment gateway simulator. Receives priority booking.
                    </span>
                  </div>
                </label>
              </div>

              {/* Consultation Summary */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 space-y-3">
                <h4 className="font-bold text-gray-900 mb-2">Booking Summary</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Service Fee:</span>
                  <span className="text-gray-900 font-bold">₹ 1,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">CGST & SGST (18%):</span>
                  <span className="text-gray-900 font-bold">₹ 270</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                  <span className="font-bold text-gray-900">Total Payable:</span>
                  <span className="font-bold text-lavender-700 text-lg">₹ 1,770</span>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button type="button" onClick={prevStep} className="btn-secondary" disabled={isSubmitting}>
                  Back
                </button>
                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {formData.paymentMethod === 'online' ? 'Processing Gateway...' : 'Confirming Booking...'}
                    </>
                  ) : (
                    <>
                      {formData.paymentMethod === 'online' ? (
                        <>
                          <FiCreditCard className="w-5 h-5" /> Prepay & Book
                        </>
                      ) : (
                        <>
                          <FiCheckCircle className="w-5 h-5" /> Confirm Appointment
                        </>
                      )}
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
