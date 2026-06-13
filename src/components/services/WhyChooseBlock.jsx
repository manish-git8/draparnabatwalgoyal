import Image from 'next/image';
import { FiShield } from 'react-icons/fi';
import { SERVICE_CARD_IMAGES } from '@/lib/site';

const CT_IMAGE = '/images/cards/ct-scan.png';
const USG_IMAGE = '/images/cards/usg-ultrasound.png';

function getBackgroundImages(slug) {
  if (slug === 'ct-scan') {
    return { primary: CT_IMAGE, secondary: null, label: 'Advanced CT Imaging' };
  }
  if (slug === 'usg-ultrasound' || slug === 'usg-guided-procedures' || slug === 'doppler-study') {
    return { primary: USG_IMAGE, secondary: null, label: 'Precision USG' };
  }
  const cardImage = SERVICE_CARD_IMAGES[slug];
  if (cardImage) {
    return { primary: cardImage, secondary: null, label: 'Diagnostic Excellence' };
  }
  return { primary: CT_IMAGE, secondary: USG_IMAGE, label: null };
}

export default function WhyChooseBlock({ slug, content }) {
  const { primary, secondary, label } = getBackgroundImages(slug);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-lavender-100 shadow-md shadow-lavender-500/5">
      <div className={`absolute inset-0 ${secondary ? 'grid grid-cols-2' : ''}`}>
        <div className="relative min-h-[180px]">
          <Image src={primary} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-white/94 via-lavender-50/90 to-white/96" />
        </div>
        {secondary && (
          <div className="relative min-h-[180px] hidden sm:block">
            <Image src={secondary} alt="" fill className="object-cover" sizes="50vw" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-bl from-white/94 via-lavender-50/90 to-white/96" />
          </div>
        )}
      </div>

      <div className="relative z-10 p-8 md:p-10">
        {label && (
          <span className="inline-flex rounded-full bg-lavender-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-lavender-700 mb-4">
            {label}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FiShield className="w-5 h-5 text-lavender-600" />
          Why Choose Dr. Aparna at SNG Hospital?
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-3xl">{content}</p>
      </div>
    </div>
  );
}
