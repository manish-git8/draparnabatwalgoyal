'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus({ submitting: false, success: true, error: null });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  if (status.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 border-2 border-lavender-200 text-center bg-white"
      >
        <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center text-lavender-600 mx-auto mb-4">
          <FiCheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-6 text-sm leading-relaxed">
          Thank you for reaching out. We have received your message and our administration team will contact you shortly.
        </p>
        <button
          onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
          className="btn-secondary py-2.5 px-6 rounded-xl text-sm"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-card p-6 md:p-8 bg-white border border-lavender-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Send an Inquiry</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="form-label" htmlFor="name">Full Name *</label>
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input pl-12"
              required
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Phone */}
          <div>
            <label className="form-label" htmlFor="phone">Phone Number *</label>
            <div className="relative">
              <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="10-digit number"
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input pl-12"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="form-label" htmlFor="email">Email (Optional)</label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input pl-12"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="form-label" htmlFor="message">Your Message *</label>
          <div className="relative">
            <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
            <textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className="form-input pl-12"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full justify-center"
          disabled={status.submitting}
        >
          {status.submitting ? (
            <>Sending Message...</>
          ) : (
            <>
              <FiSend className="w-4 h-4" /> Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
