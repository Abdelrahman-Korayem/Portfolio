import React from 'react'

export default function Blog() {
  const posts = [
    {
      title: 'Building Scalable React Applications with Next.js',
      category: 'Web Development',
      date: 'November 15, 2024',
      excerpt: 'Learn how to build production-ready React applications using Next.js 14, with Server Components, App Router, and modern best practices.',
      image: '⚛️',
      readTime: '8 min read'
    },
    {
      title: 'Mastering TypeScript for React Developers',
      category: 'TypeScript',
      date: 'October 28, 2024',
      excerpt: 'A comprehensive guide to using TypeScript with React, covering types, generics, and advanced patterns for type-safe components.',
      image: '📘',
      readTime: '12 min read'
    },
    {
      title: 'State Management in 2024: Redux vs React Query',
      category: 'State Management',
      date: 'October 10, 2024',
      excerpt: 'Comparing modern state management solutions and when to use Redux Toolkit versus React Query for your next project.',
      image: '🔄',
      readTime: '10 min read'
    },
    {
      title: 'Modern CSS: TailwindCSS Best Practices',
      category: 'CSS',
      date: 'September 22, 2024',
      excerpt: 'Tips and tricks for building beautiful, maintainable UIs with TailwindCSS, including custom configurations and optimization techniques.',
      image: '🎨',
      readTime: '6 min read'
    },
    {
      title: 'API Integration Patterns in React',
      category: 'Web Development',
      date: 'September 5, 2024',
      excerpt: 'Best practices for integrating RESTful APIs in React applications, including error handling, caching, and loading states.',
      image: '🔌',
      readTime: '9 min read'
    },
    {
      title: 'Building Accessible Web Applications',
      category: 'Accessibility',
      date: 'August 18, 2024',
      excerpt: 'Essential accessibility principles and techniques to make your web applications usable for everyone, including ARIA and keyboard navigation.',
      image: '♿',
      readTime: '7 min read'
    }
  ]

  return (
    <article className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-white text-3xl font-semibold relative pb-4">
          Blog
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></span>
        </h2>
      </header>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, idx) => (
          <article
            key={idx}
            className="group bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl border border-[#333] overflow-hidden hover:border-yellow-400/30 transition-all duration-300 cursor-pointer"
          >
            {/* Post Image/Icon */}
            <div className="relative h-40 bg-[#1a1a1a] flex items-center justify-center text-6xl overflow-hidden">
              <div className="group-hover:scale-110 transition-transform duration-500">
                {post.image}
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-5">
              {/* Meta Info */}
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  📅 {post.date}
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="flex items-center gap-1">
                  ⏱️ {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More Button */}
              <button className="flex items-center gap-2 text-yellow-400 text-sm font-medium group-hover:gap-3 transition-all">
                Read More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#333] text-gray-300 rounded-xl font-medium hover:border-yellow-400/30 hover:text-yellow-400 transition-all">
          Load More Posts
        </button>
      </div>
    </article>
  )
}