import React from 'react';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay }) => (
  <a 
    href={cert.pdf || '#'}
    target={cert.pdf ? "_blank" : undefined}
    rel={cert.pdf ? "noopener noreferrer" : undefined}
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/40 hover:scale-105 hover:bg-black/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 block group relative overflow-hidden"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <span className="text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
          {cert.icon}
        </span>
        <div>
          <h3 className="text-white font-black text-base md:text-lg leading-tight mb-1 group-hover:text-red-200 transition-colors">
            {cert.name}
          </h3>
          <p className="text-white/70 text-xs font-bold uppercase tracking-wider">
            {cert.issuer}
          </p>
        </div>
      </div>
      {cert.pdf && (
        <span className="text-white/50 group-hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/20 shrink-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      )}
    </div>
  </a>
);

const Certificates = () => {
  return (
    <section id="certifications" className="bg-[#ff2a2a] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Smooth Downward Curve Top Divider (Matches Design Reference) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-28 fill-[#0a0a0a]">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20 pt-8">
        
        {/* Header (Matching Reference Screenshot) */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tight uppercase mb-4 leading-none">
            CERTIFICATIONS
          </h2>
          <p className="text-white text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Industry-recognized certifications and courses validating my technical expertise.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {certificates.featured.map((cert, index) => (
            <CertificateCard 
              key={cert.name} 
              cert={cert} 
              aosDelay={String((index % 3 + 1) * 100)} 
            />
          ))}
        </div>

        {/* View All Certificates / CV Download Button */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center">
          <a
            href={certificates.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-black text-lg hover:bg-black hover:text-white hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-[#ff2a2a] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full CV & Certificates (PDF)
            <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative subtle stars */}
      <div className="absolute top-24 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
