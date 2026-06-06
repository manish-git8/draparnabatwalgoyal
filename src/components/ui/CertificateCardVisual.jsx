'use client';

const sizeStyles = {
  sm: {
    wrapper: 'rounded-lg',
    icon: 'w-5 h-5',
    badge: 'text-[9px] px-1.5 py-0.5 top-1 left-1',
    title: 'text-xs',
    padding: 'p-2',
  },
  md: {
    wrapper: 'rounded-xl',
    icon: 'w-10 h-10',
    badge: 'text-[10px] px-2 py-0.5 top-2.5 left-2.5',
    title: 'text-sm',
    padding: 'p-4',
  },
  lg: {
    wrapper: 'rounded-2xl sm:rounded-3xl',
    icon: 'w-14 h-14 sm:w-16 sm:h-16',
    badge: 'text-xs px-3 py-1 top-4 left-4',
    title: 'text-base sm:text-lg',
    padding: 'p-6 sm:p-8',
  },
};

export default function CertificateCardVisual({
  icon: Icon,
  gradient,
  badge,
  title,
  size = 'md',
  className = '',
}) {
  const styles = sizeStyles[size];

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} text-white text-center ${styles.wrapper} ${styles.padding} ${className}`}
    >
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-white/10 blur-xl" />

      {badge && (
        <span
          className={`absolute ${styles.badge} font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md rounded-full`}
        >
          {badge}
        </span>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center rounded-2xl bg-white/15 p-3 sm:p-4 backdrop-blur-sm shadow-lg">
          <Icon className={styles.icon} />
        </div>
        {title && size === 'lg' && (
          <h4 className={`relative z-10 font-extrabold leading-snug line-clamp-3 drop-shadow-md ${styles.title}`}>
            {title}
          </h4>
        )}
      </div>
    </div>
  );
}
