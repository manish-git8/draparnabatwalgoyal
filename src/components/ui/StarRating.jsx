import { FiStar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ rating = 5, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating ? 'text-lavender-400' : 'text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}
