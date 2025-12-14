import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' }
    let isValid = true

    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus('sending')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'koraim23@gmail.com', href: 'mailto:koraim23@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+20 1021684857', href: 'tel:+201021684857' },
    { icon: '📍', label: 'Location', value: 'Damanhur, Egypt', href: null }
  ]

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/yourusername' },
    { icon: '🐦', label: 'Twitter', href: 'https://twitter.com/yourusername' }
  ]

  return (
    <article className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-white text-3xl font-semibold relative pb-4">
          Contact
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></span>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl border border-[#333]"
              >
                <div className="text-3xl flex-shrink-0">{info.icon}</div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white hover:text-yellow-400 transition-colors text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-medium mb-3">Follow Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#333] rounded-xl flex items-center justify-center text-2xl hover:border-yellow-400/30 hover:scale-110 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={`w-full p-4 rounded-xl bg-[#2a2a2a] border ${
                  errors.name ? 'border-red-500' : 'border-[#333]'
                } text-gray-200 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className={`w-full p-4 rounded-xl bg-[#2a2a2a] border ${
                  errors.email ? 'border-red-500' : 'border-[#333]'
                } text-gray-200 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project or just say hi..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={6}
                className={`w-full p-4 rounded-xl bg-[#2a2a2a] border ${
                  errors.message ? 'border-red-500' : 'border-[#333]'
                } text-gray-200 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full md:w-auto px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                status === 'sending'
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-yellow-400 text-black hover:bg-yellow-500'
              }`}
            >
              {status === 'sending' ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span>📨</span>
                </>
              )}
            </button>

            {/* Success Message */}
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <p className="text-green-400 text-sm flex items-center gap-2">
                  <span>✅</span>
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <span>❌</span>
                  Something went wrong. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </article>
  )
}