import React from 'react';
import { experienceList } from '../data/portfolioData';
import idCardImage from '../assets/about/huzaifa-id.jpeg';

const ExperienceCard = ({ exp }) => (
  <div 
    data-aos="fade-up"
    className="bg-black/25 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(142,111,206,0.15)] hover:border-purple-500/20 transition-all duration-500 max-w-4xl mx-auto"
  >
    <div className="flex flex-col md:flex-row gap-8 justify-between">
      {/* Left Column: Organization & Tech */}
      <div className="flex-1 md:border-r md:border-white/10 md:pr-8">
        <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase block mb-2">
          {exp.duration}
        </span>
        <h3 className="text-white text-3xl font-black mb-1 tracking-tight">
          {exp.role}
        </h3>
        <p className="text-purple-400 text-lg font-black tracking-wide mb-6 uppercase">
          {exp.organization}
        </p>
        <p className="text-white/60 text-sm font-medium mb-6">
          📍 {exp.location}
        </p>

        <div>
          <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">Technologies practiced:</h4>
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span 
                key={t}
                className="px-3 py-1.5 text-xs font-mono font-bold text-white bg-white/5 rounded-full border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Responsibilities */}
      <div className="flex-[1.5] flex flex-col justify-center">
        <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Training Responsibilities:</h4>
        <ul className="space-y-4">
          {exp.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-purple-400 mt-1 select-none">⚡</span>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
                {resp}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-[#8E6FCE] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-purple-950 text-base md:text-lg font-bold max-w-lg mx-auto">
            My professional internship training, backend system designs, and computer vision integrations.
          </p>
        </div>

        {/* Experience Card */}
        <div className="flex flex-col gap-12">
          {experienceList.map((exp) => (
            <ExperienceCard key={exp.organization} exp={exp} />
          ))}
          
          {/* Incubated Startup Affiliation Block */}
          <div 
            data-aos="fade-up" 
            className="bg-black/25 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(142,111,206,0.15)] hover:border-purple-500/20 transition-all duration-500 max-w-4xl mx-auto w-full"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <span className="bg-purple-500/20 text-purple-200 text-[10px] font-black tracking-widest uppercase py-1.5 px-3 rounded-full border border-purple-500/30 mb-4 inline-block">
                  REVA NEST Incubator
                </span>
                <h3 className="text-white text-3xl font-black mb-2 tracking-tight">
                  THE BACK BUILDER
                </h3>
                <p className="text-purple-300 text-lg font-bold uppercase tracking-wider mb-4">
                  Incubated Startup Member
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
                  Affiliated as a Backend Developer for the startup <strong>THE BACK BUILDER</strong>, incubated at <strong>REVA NEST</strong> (Rukmini Knowledge Park, Reva University). Responsible for designing database schemas, data flows, and server-side logic in a collaborative startup incubator workspace.
                </p>
                <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
                  <span>📍 Kattigenahalli, Bengaluru</span>
                  <span>•</span>
                  <span>🛡️ Verified Incubator Affiliation</span>
                </div>
              </div>
              
              {/* Polished ID Card Display */}
              <div className="w-full max-w-[200px] aspect-[9/16] shrink-0 relative group [perspective:1000px]">
                <div className="w-full h-full bg-zinc-950/60 border border-white/10 rounded-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative z-10 transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)_rotateX(5deg)] group-hover:shadow-[0_25px_50px_rgba(142,111,206,0.25)] group-hover:border-purple-500/30 overflow-hidden">
                  <img 
                    src={idCardImage} 
                    alt="THE BACK BUILDER - REVA NEST ID Card" 
                    className="w-full h-full object-cover rounded-xl filter brightness-[1.02] contrast-[1.02] saturate-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-white/10 pointer-events-none rounded-xl" />
                </div>
                {/* Soft glow shadow behind card */}
                <div className="absolute -inset-1 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Experience;
