import React, { useState } from 'react'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";

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
    {
      icon: <MdEmail />,
      label: 'Email',
      value: 'koraim23@gmail.com',
      href: 'mailto:koraim23@gmail.com'
    },
    {
      icon: <FaPhoneAlt />,
      label: 'Phone',
      value: '+20 1021684857',
      href: 'tel:+201021684857'
    },
    {
      icon: <FaLocationDot />,
      label: 'Location',
      value: 'Damanhur, Egypt',
      href: null
    }
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelrahman-korayem/' },
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Abdelrahman-Korayem' },
  ]

  return (
    <article className="p-8 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] shadow-2xl">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
            <MdEmail className="text-2xl text-black" />
          </div>
          <h2 className="text-white text-4xl font-bold">
            Contact
          </h2>
        </div>
        <p className="text-gray-400 text-lg ml-16">Let's connect and create something amazing together</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-[#0f0f0f]/50 border border-[#2a2a2a] p-5 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/10 to-orange-400/10 flex items-center justify-center text-yellow-400 text-xl group-hover:scale-110 transition-transform shadow-lg">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-yellow-400 transition-colors text-sm font-medium block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#333] to-transparent my-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent blur-sm"></div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4 px-1">
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 h-14 bg-[#0f0f0f]/50 border border-[#2a2a2a] rounded-2xl flex items-center justify-center hover:border-yellow-400/30 hover:scale-105 transition-all relative overflow-hidden"
                  title={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/10 group-hover:to-orange-400/10 transition-all duration-300"></div>
                  <span className="relative text-2xl text-gray-400 group-hover:text-yellow-400 group-hover:scale-110 transition-all">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Element */}
          <div className="hidden lg:block mt-8 p-6 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400/20">
            <p className="text-yellow-400 text-sm font-medium mb-2">💡 Quick Response</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              I typically respond within 24 hours. For urgent matters, feel free to call me directly.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={`w-full px-5 py-4 rounded-2xl bg-[#0f0f0f]/50 border ${errors.name ? 'border-red-500' : 'border-[#2a2a2a]'
                  } text-gray-200 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-all`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className={`w-full px-5 py-4 rounded-2xl bg-[#0f0f0f]/50 border ${errors.email ? 'border-red-500' : 'border-[#2a2a2a]'
                  } text-gray-200 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-all`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project or just say hi..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={6}
                className={`w-full px-5 py-4 rounded-2xl bg-[#0f0f0f]/50 border ${errors.message ? 'border-red-500' : 'border-[#2a2a2a]'
                  } text-gray-200 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-all resize-none`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className={`group relative w-full md:w-auto px-8 py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 overflow-hidden shadow-lg ${status === 'sending'
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105'
                }`}
            >
              {status !== 'sending' && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              )}
              <span className="relative flex items-center gap-2">
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </span>
            </button>

            {/* Success Message */}
            {status === 'success' && (
              <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-2xl backdrop-blur-sm">
                <p className="text-green-400 text-sm flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-5 bg-red-500/10 border border-red-500/30 rounded-2xl backdrop-blur-sm">
                <p className="text-red-400 text-sm flex items-center gap-2 font-medium">
                  <AlertCircle className="w-5 h-5" />
                  Something went wrong. Please try again.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}