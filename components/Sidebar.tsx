"use client";
import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { FaPhoneAlt } from 'react-icons/fa';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

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
      value: 'Damanhour, Egypt',
      href: null
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelrahman-korayem/' },
    { icon: <FaGithub />, name: 'GitHub', href: 'https://github.com/Abdelrahman-Korayem' },
  ];

  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl border border-[#2a2a2a] overflow-hidden lg:sticky lg:top-4 shadow-2xl">
      {/* Header Section with Image Background */}
      <div className="relative h-32 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
          aria-label={open ? 'Hide contacts' : 'Show contacts'}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Profile Section */}
      <div className="px-6 -mt-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Avatar with border */}
          <div className="relative mb-4">
            <div className="w-36 h-36 rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-400 p-1 shadow-2xl">
              <img
                src="/assets/my-avatar.jpeg"
                alt="Abdelrahman Korayem"
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 rounded-full text-white text-xs font-medium flex items-center gap-1 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Available
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-white text-2xl font-bold mb-2">
            Abdelrahman Korayem
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <span className="text-yellow-400 text-sm font-medium">Front-End Developer</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-[800px] lg:opacity-100'
        }`}>
        {/* Contact Info */}
        <div className="space-y-2 mb-6">
          {contactInfo.map((contact, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-[#0f0f0f]/50 border border-[#2a2a2a] p-4 hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/10 to-orange-400/10 flex items-center justify-center text-yellow-400 text-xl group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs font-medium mb-0.5">
                    {contact.label}
                  </p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-white text-sm hover:text-yellow-400 transition-colors block truncate"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm truncate">{contact.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#333] to-transparent mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent blur-sm"></div>
        </div>

        {/* Social Links */}
        <div className="mb-6">
          <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 px-1">
            Social Links
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden h-14 bg-[#0f0f0f]/50 border border-[#2a2a2a] rounded-2xl flex items-center justify-center hover:border-yellow-400/30 transition-all duration-300"
                title={social.name}
                aria-label={social.name}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/10 group-hover:to-orange-400/10 transition-all duration-300"></div>
                <span className="relative text-2xl text-gray-400 group-hover:text-yellow-400 group-hover:scale-125 transition-all duration-300">
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
          className="block w-full group"
        >
          <button className="relative w-full h-14 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-2xl overflow-hidden shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/30 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative flex items-center justify-center gap-2">
              <SiReaddotcv className="text-xl" />
              Download CV
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}