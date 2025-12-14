import React, { useState } from 'react'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Tadweer Platform',
      category: 'web development',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'React Hook Form', 'Zod'],
      description: 'A role-based recycling platform (User/Admin/Company) built on modular React architecture with schema-driven forms, Context API, and full i18n support.',
      image: "assets/Tadweer.png",
      github: 'https://github.com/yourusername/tadweer',
      demo: null,
      highlights: [
        'Role-based authentication system',
        'Schema-driven forms with RHF + Zod',
        'Full internationalization (i18n)',
        'Mock Stripe payment integration'
      ]
    },
    {
      title: 'Fresh Cart',
      category: 'web development',
      tags: ['React', 'TailwindCSS', 'Vite', 'React Query', 'Context API'],
      description: 'Responsive e-commerce platform with product browsing, shopping cart, wishlist, and order management features.',
      image: "assets/frech.png",
      github: 'https://github.com/Abdelrahman-Korayem/Fresh-cart',
      demo: 'https://fresh-cart-navy-one.vercel.app/',
      highlights: [
        'User authentication & password reset',
        'Shopping cart & wishlist management',
        'React Query for data caching',
        'Fully responsive design'
      ]
    },

    {
      title: 'Shop Zone',
      category: 'web development',
      tags: ['React', 'TailwindCSS', 'Vite', 'Redux Toolkit'],
      description: 'All-in-one e-commerce application for accessories, clothing, and grocery products with a clean UI and scalable state management.',
      image: "assets/shop-zone.png",
      github: 'https://github.com/Abdelrahman-Korayem/Shop-Zone',
      demo: 'https://shop-zone-two.vercel.app/home',
      highlights: [
        'Multi-category products (Accessories, Fashion, Grocery)',
        'Global state management using Redux Toolkit',
        'Shopping cart & quantity management',
        'Product search & category filtering',
        'Fast and lightweight setup with Vite',
        'Fully responsive design using TailwindCSS'
      ]
    },
    {
      title: 'Fashion-ecommerce',
      category: 'web development',
      tags: ['HTML', 'CSS', 'JS'],
      description: 'Modern fashion e-commerce platform for women’s clothing with a focus on elegant UI, smooth shopping experience, and mobile-first design.',
      image: "assets/fashion.png",
      github: 'https://github.com/Abdelrahman-Korayem/Fashion-ecommerce',
      demo: 'https://abdelrahman-korayem.github.io/Fashion-ecommerce/',
      highlights: [
        'Women’s fashion product catalog (dresses, tops)',
        'Advanced filtering by size, color, and category',
        'Shopping cart & favorites (wishlist)',
        'Fast data fetching & caching using React Query',
        'Fully responsive & mobile-friendly design'
      ]
    },

  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web development', label: 'Web Development' },
    { id: 'web design', label: 'Web Design' },
    { id: 'applications', label: 'Applications' }
  ]

  const visible = projects.filter(p => filter === 'all' || p.category === filter)

  return (
    <article className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-white text-3xl font-semibold relative pb-4">
          Portfolio
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></span>
        </h2>
      </header>

      {/* Filter Buttons - Desktop */}
      <div className="hidden md:flex gap-3 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${filter === cat.id
              ? 'bg-yellow-400 text-black'
              : 'bg-[#2a2a2a] text-gray-300 hover:text-white hover:bg-[#333]'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Filter Dropdown - Mobile */}
      <div className="md:hidden mb-8">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#2a2a2a] border border-[#333] text-gray-300 focus:border-yellow-400 focus:outline-none"
        >
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl border border-[#333] overflow-hidden hover:border-yellow-400/30 transition-all duration-300 animate-fadeIn"
          >
            {/* Project Image/Icon */}
            <div className="relative h-48 bg-[#1a1a1a] flex items-center justify-center text-7xl overflow-hidden">
              <div className="group-hover:scale-110 transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover rounded-xl"
                />
              </div>


              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xl hover:bg-yellow-500 transition-colors"
                    title="View on GitHub"
                  >
                    ⚡
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xl hover:bg-yellow-500 transition-colors"
                    title="Live Demo"
                  >
                    🔗
                  </a>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white text-lg font-semibold group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#1a1a1a] border rounded-full border-[#333]  text-gray-300 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-1">
                {project.highlights.slice(0, 2).map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="text-yellow-400 mt-0.5">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-4 pt-4 border-t border-[#333]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-[#1a1a1a] text-gray-300 rounded-lg text-sm text-center hover:bg-[#2a2a2a] hover:text-yellow-400 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-yellow-400 text-black rounded-lg text-sm text-center font-medium hover:bg-yellow-500 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {visible.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400">No projects found in this category.</p>
        </div>
      )}
    </article>
  )
}