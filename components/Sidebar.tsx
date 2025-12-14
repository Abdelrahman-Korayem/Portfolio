"use client";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

import React, { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  const contactInfo = [
    {
      icon: <MdEmail />,
      label: 'Email',
      value: 'koraim23@gmail.com',
      href: 'mailto:koraim23@gmail.com'
    },
    {
      icon: <FaPhoneAlt />
,
      label: 'Phone',
      value: '+20 1021684857',
      href: 'tel:+201021684857'
    },
    {
      icon: <FaLocationDot />
,
      label: 'Location',
      value: 'Damanhour, Egypt',
      href: null
    }
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelrahman-korayem/' },
    { icon: <FaGithub />, name: 'GitHub', href: 'https://github.com/Abdelrahman-Korayem' },
    
  ]

  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-[#2a2a2a] p-6 lg:sticky lg:top-4 shadow-xl">
      {/* Profile Section */}
      <div className="flex items-start gap-4 relative">
        {/* Avatar */}
        <div className="relative group">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-400 p-0.5">
            <img 
              src="/assets/my-avatar.jpeg" 
              alt="Abdelrahman Korayem" 
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          {/* Online Indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1a1a] animate-pulse"></div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-white text-xl font-bold mb-1">
            Abdelrahman Korayem
          </h1>
          <span className="inline-block px-3 py-1 bg-[#2a2a2a] text-gray-300 text-xs rounded-lg border border-[#333]">
            Front-End Developer
          </span>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center text-black font-semibold hover:scale-110 transition-transform shadow-lg"
          aria-label={open ? 'Hide contacts' : 'Show contacts'}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>

      {/* Contact Info - Always visible on desktop, toggleable on mobile */}
      <div className={`space-y-4 overflow-hidden transition-all duration-300 ${
        open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-[500px] lg:opacity-100'
      }`}>
        {/* Contact List */}
        <div className="space-y-3">
          {contactInfo.map((contact, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 bg-[#0f0f0f] rounded-xl border border-[#2a2a2a] hover:border-yellow-400/30 transition-colors group"
            >
              <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                  {contact.label}
                </p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors break-all"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-white text-sm">{contact.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="pt-4">
          <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-3">
            Connect With Me
          </h3>
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-12 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl flex items-center justify-center text-2xl hover:border-yellow-400/30 hover:scale-110 hover:-translate-y-1 transition-all group"
                title={social.name}
                aria-label={social.name}
              >
                <span className="group-hover:scale-125 transition-transform">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
 <a 
  href="/Abdelrahman-shawky-korayem-CV.pdf"
  download
  className="block w-full"
>
  <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
    <SiReaddotcv />
    Download CV
  </button>
</a>

      </div>
    </div>
  )
}