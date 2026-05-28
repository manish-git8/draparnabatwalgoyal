export const services = [
  {
    slug: 'usg-ultrasound',
    title: 'USG (Ultrasound)',
    shortDesc: 'Consona N9 based high-resolution ultrasound with advanced Doppler and AI-assisted tools for precise diagnosis.',
    icon: '🔬',
    image: '/services/usg.jpg',
    overview: 'At SNG Hospital, ultrasound imaging is performed on the Mindray Consona N9 platform with ZST+ architecture for improved image quality, dynamic pixel focusing, and better tissue clarity. It is a safe, non-invasive, and painless diagnostic tool used for abdomen, pelvis, gynecology, obstetrics, vascular, small parts, and emergency evaluations.',
    benefits: [
      'Non-invasive and radiation-free imaging',
      'Real-time visualization of organs',
      'Safe for pregnant women and children',
      'Quick results with immediate interpretation',
      'Color Doppler and Power Doppler flow assessment',
      'Advanced tools like elastography and needle visualization when indicated'
    ],
    procedure: 'During an ultrasound examination, a gel is applied to the skin over the area being examined and the probe is moved to acquire images. Depending on the clinical need, advanced modes such as Doppler flow, fetal measurements, elastography, and structured protocols may be used for higher diagnostic confidence. Most scans are completed in 15-30 minutes.',
    whyChoose: 'Dr. Aparna combines over 10 years of radiology experience with Consona N9 technology, including ZST+ imaging, AI-assisted women and fetal imaging tools, and multi-application workflows to provide reliable, clinically actionable reports.',
    faqs: [
      { q: 'How should I prepare for an ultrasound?', a: 'Preparation depends on the type of ultrasound. For abdominal scans, you may need to fast for 6-8 hours. For pelvic scans, a full bladder may be required. Our team will provide specific instructions when you book.' },
      { q: 'Is ultrasound safe?', a: 'Yes, ultrasound is one of the safest imaging modalities. It uses sound waves instead of radiation, making it safe for all patients including pregnant women.' },
      { q: 'How long does an ultrasound take?', a: 'Most ultrasound examinations take between 15-30 minutes, depending on the area being examined.' }
    ]
  },
  {
    slug: 'usg-guided-procedures',
    title: 'USG-Guided Procedures',
    shortDesc: 'Image-guided breast biopsy, FNAC, aspiration, and targeted needle procedures with real-time ultrasound guidance.',
    icon: '💉',
    image: '/images/service-usg-guided.svg',
    overview: 'USG-guided procedures use real-time ultrasound imaging to precisely target lesions, cysts, or suspicious tissue for sampling and intervention. This includes breast biopsy support, FNAC, fluid aspiration, and other focused needle guidance procedures with improved accuracy and confidence.',
    benefits: [
      'Real-time needle guidance for higher precision',
      'Useful for breast lesions and superficial masses',
      'Supports FNAC, biopsy, aspiration, and drainage',
      'Minimally invasive and generally well tolerated',
      'Improves diagnostic yield with targeted sampling',
      'Faster workflow with focused intervention planning'
    ],
    procedure: 'After clinical review and imaging correlation, the target area is localized under ultrasound. The skin is cleaned, local anesthesia is used when required, and needle placement is monitored continuously in real time. Tissue or fluid samples are collected and sent for further pathological analysis where indicated.',
    whyChoose: 'At SNG Hospital, Dr. Aparna performs USG-guided procedures with meticulous imaging-plane control, lesion targeting, and safety-first protocols. Her diagnostic expertise helps clinicians plan the right intervention while reducing repeat procedures.',
    faqs: [
      { q: 'What procedures are covered under USG guidance?', a: 'Common procedures include breast lesion targeting, FNAC, core biopsy guidance, cyst aspiration, and selected fluid drainage procedures.' },
      { q: 'Is USG-guided biopsy painful?', a: 'Most patients feel only mild discomfort. Local anesthesia is used for most biopsy-type procedures to improve comfort.' },
      { q: 'How long does an USG-guided procedure take?', a: 'Most procedures are completed within 20-40 minutes, depending on target location and complexity.' }
    ]
  },
  {
    slug: 'doppler-study',
    title: 'Color Doppler Study',
    shortDesc: 'Arterial and venous Doppler studies for blood-flow assessment in peripheral, carotid, abdominal, and obstetric vascular indications.',
    icon: '🫀',
    image: '/images/service-doppler.svg',
    overview: 'Color Doppler ultrasound evaluates blood flow direction, velocity, and vessel patency in real time. It is commonly used for arterial insufficiency, venous thrombosis, carotid screening, abdominal vascular evaluation, and pregnancy-related Doppler assessment.',
    benefits: [
      'Non-invasive vascular flow assessment',
      'Helps detect narrowing, blockage, or clots',
      'Useful for DVT, varicose, and limb pain workup',
      'Supports carotid and abdominal vascular screening',
      'Obstetric Doppler for fetal and placental circulation',
      'Immediate image-based clinical guidance'
    ],
    procedure: 'A focused ultrasound probe is placed over target vessels with color and spectral Doppler modes to measure flow pattern and velocity. Depending on indication, bilateral limb, neck, abdominal, or obstetric vessels are examined and documented in a structured report.',
    whyChoose: 'Dr. Aparna provides high-quality Doppler interpretation using advanced ultrasound modes for accurate vascular diagnosis. At SNG Hospital, each Doppler study is protocol-based and clinically correlated to support timely treatment planning.',
    faqs: [
      { q: 'What is the difference between USG and Doppler?', a: 'Routine USG shows organ structure, while Doppler adds blood-flow information such as speed and direction inside vessels.' },
      { q: 'Do I need fasting for Doppler study?', a: 'Some abdominal Doppler studies may require fasting, while limb and carotid Doppler usually do not. You will receive test-specific instructions while booking.' },
      { q: 'How long does a Doppler scan take?', a: 'Most Doppler studies are completed in about 20-40 minutes, depending on the vascular territory being assessed.' }
    ]
  },
  {
    slug: 'ct-scan',
    title: 'CT Scan',
    shortDesc: 'Advanced computed tomography scanning for detailed cross-sectional imaging and accurate diagnosis.',
    icon: '🖥️',
    image: '/services/ct.jpg',
    overview: 'CT (Computed Tomography) scanning combines X-ray technology with computer processing to create detailed cross-sectional images of the body. It provides superior visualization of bones, soft tissues, and blood vessels, enabling accurate diagnosis of various conditions.',
    benefits: [
      'Highly detailed cross-sectional images',
      'Fast scanning time for emergency cases',
      'Excellent for detecting tumors and injuries',
      'Superior bone and tissue visualization',
      'Guides surgical and treatment planning',
      '3D reconstruction capabilities'
    ],
    procedure: 'During a CT scan, you lie on a motorized table that slides into a donut-shaped scanner. The X-ray tube rotates around your body, capturing multiple images from different angles. A computer processes these images to create detailed cross-sectional views. The scan usually takes 10-30 minutes.',
    whyChoose: 'With advanced CT technology and Dr. Aparna\'s expert interpretation skills, SNG Hospital provides accurate and timely CT scan reports. Her fellowship training ensures comprehensive analysis of complex cases.',
    faqs: [
      { q: 'Is a CT scan painful?', a: 'No, a CT scan is completely painless. You may feel slight warmth if contrast dye is used.' },
      { q: 'How long does it take to get CT results?', a: 'Reports are typically available within 24 hours. Emergency cases are prioritized for immediate reporting.' },
      { q: 'Do I need contrast dye?', a: 'Some CT scans require contrast dye for better visualization. Your doctor will determine this based on the clinical indication.' }
    ]
  },
  {
    slug: 'msk-radiology',
    title: 'MSK Radiology',
    shortDesc: 'Specialized musculoskeletal imaging for joints, bones, muscles, and soft tissue evaluation.',
    icon: '🦴',
    image: '/services/msk.jpg',
    overview: 'Musculoskeletal (MSK) Radiology focuses on imaging of bones, joints, muscles, tendons, and ligaments. Dr. Aparna holds a specialized fellowship in MSK Radiology, bringing expert-level diagnostic accuracy to complex orthopedic and sports medicine cases.',
    benefits: [
      'Expert fellowship-trained interpretation',
      'Comprehensive joint and bone evaluation',
      'Sports injury assessment',
      'Arthritis and degenerative disease diagnosis',
      'Image-guided procedures',
      'Detailed soft tissue analysis'
    ],
    procedure: 'MSK imaging may include ultrasound, X-ray, CT, or MRI depending on the clinical question. Dr. Aparna utilizes the most appropriate modality to provide comprehensive evaluation. Detailed reports include specific measurements and comparison with prior studies when available.',
    whyChoose: 'Dr. Aparna\'s fellowship in MSK Radiology provides specialized expertise that goes beyond general radiology. Her advanced training ensures accurate diagnosis of complex musculoskeletal conditions, helping orthopedic surgeons and sports medicine specialists plan optimal treatment.',
    faqs: [
      { q: 'What conditions can MSK imaging detect?', a: 'MSK imaging can detect fractures, arthritis, tendon tears, ligament injuries, tumors, infections, and degenerative conditions.' },
      { q: 'Do I need a referral for MSK imaging?', a: 'A referral from your treating doctor is recommended for targeted evaluation and insurance coverage.' },
      { q: 'Which imaging modality is best for joint problems?', a: 'The best modality depends on the specific condition. Ultrasound and MRI are excellent for soft tissue evaluation, while X-ray and CT are better for bone assessment.' }
    ]
  },
  {
    slug: 'oncology-imaging',
    title: 'Oncology Imaging',
    shortDesc: 'Advanced cancer imaging and monitoring with specialized oncological diagnostic expertise.',
    icon: '🎯',
    image: '/services/oncology.jpg',
    overview: 'Oncology Imaging plays a critical role in cancer detection, staging, treatment monitoring, and surveillance. Dr. Aparna\'s fellowship in Oncology provides specialized expertise in identifying and characterizing tumors across all body systems.',
    benefits: [
      'Early cancer detection capabilities',
      'Accurate tumor staging and characterization',
      'Treatment response monitoring',
      'Post-treatment surveillance imaging',
      'Multi-modality imaging approach',
      'Specialized oncology fellowship expertise'
    ],
    procedure: 'Oncology imaging involves specialized protocols tailored to detect and characterize tumors. This may include contrast-enhanced CT, ultrasound, or advanced imaging techniques. Dr. Aparna provides detailed structured reports that help oncologists plan and monitor treatment effectively.',
    whyChoose: 'With a dedicated fellowship in Oncology, Dr. Aparna brings specialized knowledge in tumor imaging that is critical for accurate diagnosis and staging. Her expertise supports multidisciplinary tumor boards and helps guide treatment decisions.',
    faqs: [
      { q: 'How does imaging help in cancer diagnosis?', a: 'Imaging helps detect tumors, determine their size and location, assess spread to other organs, and monitor response to treatment.' },
      { q: 'How often should cancer patients get imaging?', a: 'Imaging frequency depends on the type and stage of cancer, treatment plan, and your oncologist\'s recommendations.' },
      { q: 'Can imaging detect cancer early?', a: 'Yes, modern imaging techniques can detect tumors at early stages when they are most treatable.' }
    ]
  },
  {
    slug: 'fetal-medicine-imaging',
    title: 'Fetal Medicine Imaging',
    shortDesc: 'Comprehensive prenatal imaging and fetal health assessment with specialized fellowship training.',
    icon: '👶',
    image: '/services/fetal.jpg',
    overview: 'Fetal Medicine Imaging provides detailed assessment of fetal growth, anatomy, and well-being during pregnancy. Dr. Aparna\'s Fetal Medicine Fellowship ensures expert-level evaluation of complex prenatal cases.',
    benefits: [
      'Detailed fetal anatomy assessment',
      'Growth monitoring and biometry',
      'Detection of congenital anomalies',
      'High-risk pregnancy evaluation',
      'Doppler assessment of blood flow',
      'Fellowship-trained specialist expertise'
    ],
    procedure: 'Fetal imaging is performed using specialized ultrasound techniques. This includes detailed anatomy scans, growth assessments, Doppler studies, and 3D/4D imaging when indicated. Each scan is performed systematically following international protocols to ensure comprehensive evaluation.',
    whyChoose: 'Dr. Aparna\'s Fetal Medicine Fellowship provides specialized training in prenatal diagnosis. She offers comprehensive fetal evaluations using advanced ultrasound technology, supporting obstetricians in managing complex pregnancies.',
    faqs: [
      { q: 'When should I get a fetal scan?', a: 'Key scans are typically done at 11-13 weeks (NT scan), 18-22 weeks (anomaly scan), and in the third trimester for growth assessment.' },
      { q: 'Is ultrasound safe during pregnancy?', a: 'Yes, diagnostic ultrasound has been used safely in pregnancy for decades. It uses sound waves and does not involve radiation.' },
      { q: 'What is a 3D/4D ultrasound?', a: '3D ultrasound creates three-dimensional images of the fetus, while 4D adds the dimension of time, showing real-time fetal movements.' }
    ]
  },
  {
    slug: 'diagnostic-consultation',
    title: 'Diagnostic Consultation',
    shortDesc: 'Expert radiology consultation for complex cases with comprehensive diagnostic evaluation.',
    icon: '📋',
    image: '/services/consultation.jpg',
    overview: 'Diagnostic Consultation involves expert review and interpretation of imaging studies. Dr. Aparna provides second opinions, correlates imaging findings with clinical information, and recommends further workup when needed.',
    benefits: [
      'Expert second opinion on imaging studies',
      'Correlation with clinical history',
      'Comprehensive diagnostic approach',
      'Guidance on further investigations',
      'Direct consultation with specialist',
      'Timely and detailed reporting'
    ],
    procedure: 'During a diagnostic consultation, Dr. Aparna reviews your imaging studies along with clinical history and previous reports. She provides a comprehensive assessment, discusses findings with you, and communicates with your referring physician for coordinated care.',
    whyChoose: 'With triple fellowship training and over 10 years of experience, Dr. Aparna offers unparalleled diagnostic expertise. Her consultation service is ideal for complex cases requiring specialized radiology interpretation.',
    faqs: [
      { q: 'Can I get a second opinion on my imaging?', a: 'Yes, Dr. Aparna offers second opinion services for imaging studies from other facilities.' },
      { q: 'What should I bring for consultation?', a: 'Please bring your previous imaging CDs/films, reports, and relevant clinical history or referral letters.' },
      { q: 'How long is a consultation session?', a: 'Consultation sessions typically last 15-30 minutes depending on the complexity of the case.' }
    ]
  },
  {
    slug: 'advanced-imaging',
    title: 'Advanced Imaging Procedures',
    shortDesc: 'Cutting-edge imaging procedures using the latest technology for superior diagnostic accuracy.',
    icon: '⚡',
    image: '/services/advanced.jpg',
    overview: 'Advanced Imaging Procedures encompass the latest diagnostic techniques including contrast-enhanced studies, Doppler imaging, elastography, and image-guided interventions. These procedures provide enhanced diagnostic capabilities for complex clinical scenarios.',
    benefits: [
      'Latest imaging technology',
      'Enhanced diagnostic accuracy',
      'Minimally invasive procedures',
      'Real-time image guidance',
      'Comprehensive vascular imaging',
      'Advanced tissue characterization'
    ],
    procedure: 'Advanced imaging procedures are tailored to specific clinical needs. They may include specialized contrast protocols, advanced ultrasound techniques, or image-guided biopsies. Each procedure is performed with strict adherence to safety protocols and international guidelines.',
    whyChoose: 'SNG Hospital\'s investment in cutting-edge imaging technology, combined with Dr. Aparna\'s expertise and fellowship training, ensures patients receive the most advanced diagnostic care available in the region.',
    faqs: [
      { q: 'What are advanced imaging procedures?', a: 'These include specialized techniques like contrast-enhanced studies, Doppler imaging, elastography, and image-guided procedures that go beyond routine imaging.' },
      { q: 'Are advanced procedures safe?', a: 'Yes, all procedures are performed following strict safety protocols. Risks, if any, are discussed with patients before the procedure.' },
      { q: 'Do I need special preparation?', a: 'Preparation varies by procedure. Our team will provide detailed instructions when you schedule your appointment.' }
    ]
  }
];
