import React from 'react';
import stackImage from '../assets/about/devaraju-avatar.jpg';
import { aboutContent } from '../data/portfolioData';

// Tech stack & language SVG icons
const FigmaIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 38 57">
      <path fill="#ea4c1d" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
      <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
      <path fill="#1abcfe" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"/>
      <path fill="#a259ff" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"/>
      <path fill="#f24e1e" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z"/>
    </svg>
    <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">Figma</span>
  </div>
);

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="4.5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">React.js</span>
  </div>
);

const TailwindIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 128 128">
      <path fill="#38bdf8" d="M32 32c10.667 0 21.333 5.333 32 16 10.667-16 21.333-21.333 32-21.333 16 0 24 10.667 24 26.667 0 21.333-21.333 37.333-56 58.667C29.333 90.667 8 74.667 8 53.333 8 37.333 16 32 32 32z"/>
    </svg>
    <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">Tailwind</span>
  </div>
);

const JsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-md" viewBox="0 0 128 128">
      <rect width="128" height="128" fill="#f7df1e" rx="18"/>
      <path fill="#000000" d="M67.31 104.56c3.48 5.74 8.12 9.56 16.53 9.56 6.96 0 11.37-3.48 11.37-8.35 0-5.8-4.64-7.89-12.41-11.25l-4.29-1.86c-12.41-5.34-20.65-12.06-20.65-25.99 0-14.5 11.37-25.29 28.54-25.29 12.53 0 20.77 4.52 26.34 14.15l-10.44 6.73c-3.13-5.22-6.5-7.42-15.9-7.42-5.68 0-9.86 2.55-9.86 6.61 0 4.64 3.71 6.61 11.02 9.74l4.29 1.86c14.62 6.27 22.28 12.65 22.28 26.69 0 16.48-12.88 26.69-31.56 26.69-15.08 0-24.95-6.03-30.86-16.94l10.89-6.73zm-39.79.47c3.13 5.45 7.19 9.33 14.39 9.33 6.96 0 11.37-2.78 11.37-13.69V42.66h15.08v57.89c0 18.91-10.9 26.8-26.69 26.8-12.88 0-21.81-6.15-26.11-15.9l11.96-6.42z"/>
    </svg>
    <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">JavaScript</span>
  </div>
);

const NodeIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 128 128">
      <path fill="#539E43" d="M64 12.8L12.8 42.3v58.9L64 130.7l51.2-29.5V42.3L64 12.8zm36.3 80.3L64 113.8L27.7 93.1V52.2L64 31.5l36.3 20.7v40.9z"/>
      <path fill="#539E43" d="M64 45.4L39.8 59.2v27.6L64 100.6l24.2-13.8V59.2L64 45.4zm12.1 34.6L64 86.9l-12.1-6.9V65.1L64 58.2l12.1 6.9v14.9z"/>
    </svg>
    <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">Node.js</span>
  </div>
);

const MongoIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 128 128">
      <path fill="#47A248" d="M63.8 6.4c-1.3 0-2.4 1.1-2.4 2.4v10.9C43 23.3 28.5 39.4 28.5 59.2c0 23.8 19.3 46.2 32.9 59.9 1.4 1.4 3.7 1.4 5.1 0 13.6-13.7 32.9-36.1 32.9-59.9 0-19.8-14.5-35.9-32.9-39.5V8.8c.1-1.3-1-2.4-2.7-2.4zM64 34.7c13.7 0 24.8 11.1 24.8 24.8 0 16.5-13.2 33.5-24.8 45.5-11.6-12-24.8-29-24.8-45.5 0-13.7 11.1-24.8 24.8-24.8z"/>
      <path fill="#47A248" d="M64 42.9c-9 0-16.3 7.3-16.3 16.3 0 10.9 8.7 22.1 16.3 30 7.6-7.9 16.3-19.1 16.3-30 0-9-7.3-16.3-16.3-16.3z"/>
    </svg>
    <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">MongoDB</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Rangappa Gari Devaraju — UI/UX Designer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-10 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills & Languages Row */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-9 mt-6">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <FigmaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TailwindIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JsIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="700" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <NodeIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="800" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MongoIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
