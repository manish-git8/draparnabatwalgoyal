import { blogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiBookOpen } from 'react-icons/fi';

// Generate static parameters for all blog slugs
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for search engines
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | Dr. Aparna`,
    description: post.excerpt,
    keywords: [post.category, 'radiology blog', 'health tips Indore', 'Dr. Aparna Bhatwal Goyal'],
  };
}

// Helper to parse simple markdown bold notation **text**
function parseText(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => 
    index % 2 === 1 ? <strong key={index} className="font-extrabold text-gray-900">{part}</strong> : part
  );
}

// Helper to render simple markdown content
function renderMarkdown(content) {
  return content.split('\n\n').map((block, index) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Heading 2
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2 border-gray-100">
          {parseText(trimmed.replace('## ', ''))}
        </h2>
      );
    }

    // Heading 3
    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {parseText(trimmed.replace('### ', ''))}
        </h3>
      );
    }

    // Unordered List
    if (trimmed.startsWith('- ')) {
      return (
        <ul key={index} className="list-disc pl-6 space-y-2.5 my-6 text-gray-600">
          {trimmed.split('\n').map((li, idx) => (
            <li key={idx}>
              {parseText(li.trim().replace(/^-\s+/, ''))}
            </li>
          ))}
        </ul>
      );
    }

    // Regular Paragraph
    return (
      <p key={index} className="text-gray-600 leading-relaxed text-base mb-6">
        {parseText(trimmed)}
      </p>
    );
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container-custom py-12 max-w-4xl">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-600 hover:text-lavender-700 mb-8 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Article Cover Card */}
        <div className="glass-card bg-white border border-lavender-100 overflow-hidden mb-10">
          {/* Cover Banner */}
          <div className="relative h-64 sm:h-80 bg-gradient-to-br from-lavender-750 via-lavender-600 to-lavender-450 flex items-center justify-center p-8 text-white text-center">
            <div className="absolute inset-0 dot-pattern opacity-25" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block text-xs font-bold bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full uppercase tracking-wider text-white mb-4">
                {post.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug drop-shadow-md">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Metadata Bar */}
          <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100 flex flex-wrap items-center gap-6 text-xs font-semibold text-gray-500">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="w-4 h-4 text-lavender-500" />
              Published: {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock className="w-4 h-4 text-lavender-500" />
              Reading Time: {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 ml-auto">
              <FiBookOpen className="w-4 h-4 text-lavender-500" />
              Written by Dr. Aparna
            </span>
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-10 md:p-12">
            <div className="prose max-w-none">
              {renderMarkdown(post.content)}
            </div>
            
            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-lavender-50/60 rounded-2xl border border-lavender-100 text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700 font-bold block mb-1">Medical Disclaimer:</strong>
              The information provided in this article is for educational purposes only and should not be treated as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified healthcare provider with any questions you may have regarding a medical condition.
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="glass-card p-8 bg-gradient-to-r from-lavender-50 to-white border border-lavender-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Need a Diagnostic Scan?</h4>
            <p className="text-sm text-gray-500">Consult with Dr. Aparna Bhatwal Goyal at SNG Hospital.</p>
          </div>
          <Link href="/appointment" className="btn-primary shrink-0">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
