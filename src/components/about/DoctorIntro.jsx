'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiCheckCircle, FiHeart, FiStar } from 'react-icons/fi';

export default function DoctorIntro() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-lavender-bg">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-lavender-200/30 rounded-full blur-[80px] -z-10" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center w-full max-w-sm mx-auto lg:max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[5/6] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-white shadow-lavender-500/10"
            >
              <Image
                src="/doctor-profile.jpg"
                alt="Dr. Aparna Bhatwal Goyal"
                fill
                priority
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/40 via-transparent to-transparent" />
              
              {/* Overlay info */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass p-3 sm:p-5 rounded-xl sm:rounded-2xl">
                <div className="text-white font-bold text-base sm:text-lg leading-tight">Dr. Aparna Bhatwal Goyal</div>
                <div className="text-lavender-200 text-xs sm:text-sm font-medium mt-1">Senior Radiologist • SNG Hospital</div>
              </div>
            </motion.div>
          </div>

          {/* Text/Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm font-bold tracking-wider text-lavender-600 uppercase block mb-3">
                MEET THE DOCTOR
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Dr. Aparna Bhatwal Goyal
                <span className="text-lavender-600 block text-xl md:text-2xl font-bold mt-2">
                  MBBS, MD (Radio-Diagnosis)
                </span>
              </h1>
              
              <div className="h-1 w-20 bg-lavender-500 rounded mb-6" />

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Dr. Aparna Bhatwal Goyal is a highly accomplished and specially trained radiologist 
                practicing as a Senior Consultant at <strong>SNG Hospital, Indore</strong>. 
                With over a decade of rich clinical experience, she is dedicated to high-precision diagnostic 
                reporting and compassionate patient care.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Dr. Aparna completed her undergraduate medical education (MBBS) at one of India's most prestigious government medical institutions, the historic <strong>Seth GS Medical College & KEM Hospital, Mumbai</strong>. She went on to complete her postgraduate Doctor of Medicine (MD) in Radio-Diagnosis at <strong>Dr. D.Y. Patil Medical College, Pune</strong>. She further honed her oncology diagnostic expertise through a clinical residency at the world-renowned <strong>Tata Memorial Hospital, Mumbai</strong> and has worked extensively at <strong>Bombay Hospital, Indore</strong>.
              </p>

              {/* Specializations Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'MBBS from Seth GS Medical College & KEM Hospital, Mumbai',
                  'MD (Radio-Diagnosis) from DPU, Pune',
                  'Oncology Diagnostic Training at Tata Memorial, Mumbai',
                  'Fetal Medicine Training from ScholarMD Edvent',
                  'Clinical Associate Track at Bombay Hospital, Indore',
                  'Registered with Madhya Pradesh Medical Council',
                ].map((spec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-lavender-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Quick Philosophy Card */}
              <div className="glass-card p-6 flex gap-4 items-start border-l-4 border-l-lavender-500">
                <FiHeart className="w-8 h-8 text-lavender-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Philosophy of Care</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "Diagnostics is not just about identifying a condition on a screen, but about 
                    understanding the person behind the scan. Every report is written with the utmost 
                    care, knowing a patient's life and treatment depend on its accuracy."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
