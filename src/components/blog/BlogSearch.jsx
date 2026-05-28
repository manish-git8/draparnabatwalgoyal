'use client';

import { FiSearch } from 'react-icons/fi';

export default function BlogSearch({ searchTerm, onSearchChange, activeCategory, onCategoryChange, categories }) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto mb-12">
      {/* Search Input */}
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search articles by title or keyword..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="form-input pl-12 py-4 w-full shadow-sm"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center pt-2">
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            activeCategory === 'All'
              ? 'bg-lavender-600 border-lavender-600 text-white shadow-md'
              : 'border-lavender-100 hover:border-lavender-300 text-gray-600 bg-white'
          }`}
        >
          All Articles
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeCategory === category
                ? 'bg-lavender-600 border-lavender-600 text-white shadow-md'
                : 'border-lavender-100 hover:border-lavender-300 text-gray-600 bg-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
