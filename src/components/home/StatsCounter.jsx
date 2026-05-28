'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function StatsCounter() {
  const stats = [
    { end: 10, suffix: '+', label: 'Years Experience' },
    { end: 50000, suffix: '+', label: 'Patients Served' },
    { end: 15000, suffix: '+', label: 'Reports Delivered' },
    { end: 3, suffix: '', label: 'Specializations' },
  ];

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="absolute inset-0 gradient-radial" />
      <div className="container-custom relative z-10">
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <AnimatedCounter
                key={i}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
