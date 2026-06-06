import {
  FiAward,
  FiBookOpen,
  FiHeart,
  FiShield,
  FiBriefcase,
  FiFileText,
  FiClipboard,
  FiTarget,
} from 'react-icons/fi';

export const certificates = [
  {
    id: 'mbbs-degree',
    title: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    shortTitle: 'MBBS Degree',
    issuer: 'Seth GS Medical College & KEM Hospital, Mumbai (MUHS)',
    year: '2010',
    badge: 'MBBS Degree',
    description:
      'Undergraduate medical degree from the prestigious Seth Gordhandas Sunderdas Medical College & KEM Hospital, Mumbai.',
    icon: FiBookOpen,
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    id: 'md-degree',
    title: 'Postgraduate Degree of Doctor of Medicine (MD)',
    shortTitle: 'MD (Radio-Diagnosis)',
    issuer: 'Dr. D.Y. Patil Vidyapeeth (Deemed University), Pune',
    year: '2016',
    badge: 'MD Radiodiagnosis',
    description:
      'Postgraduate Doctor of Medicine in Radio-Diagnosis degree certificate, conferred in May 2016.',
    icon: FiAward,
    gradient: 'from-lavender-500 to-lavender-800',
  },
  {
    id: 'tata-memorial',
    title: 'Clinical Observership & Training Certificate',
    shortTitle: 'Tata Memorial Hospital',
    issuer: 'Tata Memorial Hospital, Mumbai (Tata Memorial Centre)',
    year: '2016',
    badge: 'Oncology Imaging',
    description:
      "Specialized clinical observership and training in the Department of Radio-Diagnosis at India's premier cancer research institute.",
    icon: FiShield,
    gradient: 'from-indigo-500 to-violet-700',
  },
  {
    id: 'fetal-medicine',
    title: 'Fetal Medicine Training Programme Certificate',
    shortTitle: 'Fetal Medicine Training',
    issuer: 'ScholarMD Edvent (Continuing Medical Education)',
    year: '2025-2026',
    badge: 'Fetal Medicine',
    description:
      'Certificate for completing the comprehensive structured Fetal Medicine Training Programme (ScholarMD Edvent).',
    icon: FiHeart,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'msk-observership',
    title: 'MSK Imaging Observership Certificate',
    shortTitle: 'MSK Observership',
    issuer: 'N M Medical Centre, Sancheti Hospital Campus, Pune',
    year: '2017',
    badge: 'MSK Radiology',
    description:
      'Observership in musculoskeletal imaging (cross-sectional and ultrasound) with emphasis on joint, spine, and neurography reporting.',
    icon: FiTarget,
    gradient: 'from-teal-500 to-cyan-700',
  },
  {
    id: 'bombay-hospital',
    title: 'Clinical Associate Experience Certificate',
    shortTitle: 'Bombay Hospital, Indore',
    issuer: 'Bombay Hospital, Indore (NABH Accredited)',
    year: '2017-2018',
    badge: 'Experience Track',
    description:
      'Experience certificate as Clinical Associate in the Department of Radiodiagnosis (CT, MRI, X-Ray, USG).',
    icon: FiBriefcase,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'md-registration',
    title: 'MP Medical Council Additional Registration Certificate',
    shortTitle: 'MD Registration',
    issuer: 'Madhya Pradesh Medical Council, Bhopal',
    year: '2017',
    badge: 'Postgraduate Reg',
    description:
      'Additional medical registration certificate certifying the MD (Radiodiagnosis) qualification with the Madhya Pradesh Medical Council.',
    icon: FiFileText,
    gradient: 'from-slate-500 to-slate-700',
  },
  {
    id: 'mbbs-registration',
    title: 'MBBS Reciprocal Registration Certificate',
    shortTitle: 'Medical Registration',
    issuer: 'Madhya Pradesh Medical Council',
    year: '2017',
    badge: 'Medical Registration',
    description:
      'Official reciprocal permanent medical registration certificate for the undergraduate qualification.',
    icon: FiClipboard,
    gradient: 'from-blue-500 to-indigo-700',
  },
];
