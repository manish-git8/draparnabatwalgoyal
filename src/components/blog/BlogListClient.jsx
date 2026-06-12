'use client';

import { useState, useMemo } from 'react';
import BlogCard from './BlogCard';
import BlogSearch from './BlogSearch';

export default function BlogListClient({ initialPosts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically extract unique categories
  const categories = useMemo(() => {
    const cats = initialPosts.map((p) => p.category);
    return [...new Set(cats)];
  }, [initialPosts]);

  // Filter posts based on search term & category selection
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchTerm, activeCategory]);

  return (
    <div className="container-custom">
      <BlogSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={categories}
      />

      {filteredPosts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-lavender-100 max-w-2xl mx-auto shadow-sm">
          <p className="text-lg text-gray-500 font-medium mb-4">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setActiveCategory('All');
            }}
            className="btn-secondary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
