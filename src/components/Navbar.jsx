import React, { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const HIRE_ME_MESSAGE = "Hello Mohamed Huzaifa S, I came across your portfolio and would like to connect with you regarding a professional opportunity.";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleHireMe = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(HIRE_ME_MESSAGE);
      showToast('✅ Message copied! Opening LinkedIn…');
      setTimeout(() => {
        window.open(socialLinks.linkedin, '_blank', 'noopener,noreferrer');
      }, 700);
    } catch {
      // Clipboard API failed → show manual copy modal fallback
      setFallbackVisible(true);
    }
  };

  return (
    <>
      {/* Clipboard Toast */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[99999] px-6 py-3 rounded-full bg-[#8E6FCE] text-white text-sm font-bold shadow-[0_8px_30px_rgba(142,111,206,0.4)] transition-all duration-500 pointer-events-none whitespace-nowrap ${toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
      >
        {toastMessage}
      </div>

      {/* Manual Copy Fallback Modal */}
      {fallbackVisible && (
        <div
          className="fixed inset-0 z-[99998] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setFallbackVisible(false)}
        >
          <div
            className="bg-zinc-900 border border-white/15 rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-xl font-black mb-3">Copy this message to LinkedIn</h3>
            <p className="text-white/60 text-sm mb-5 font-medium">
              Your browser blocked auto-copy. Please copy the message below and paste it on LinkedIn.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 font-mono text-sm text-white/80 leading-relaxed select-all">
              {HIRE_ME_MESSAGE}
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setFallbackVisible(false)}
                className="flex-1 text-center px-5 py-3 rounded-full bg-[#8E6FCE] text-white font-bold hover:bg-purple-600 transition-all"
              >
                Open LinkedIn
              </a>
              <button
                onClick={() => setFallbackVisible(false)}
                className="px-5 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 border border-white/10 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isOpen
            ? 'bg-[#8E6FCE] py-4'
            : isScrolled
              ? 'bg-transparent py-4'
              : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Left Side: Logo/Name */}
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-black tracking-tight whitespace-nowrap">
              {personalInfo.brandName}<span className="text-[#8E6FCE]">.</span>
            </a>
          </div>

          {/* Center: Desktop Menu Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8E6FCE] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side: Hire Me Button */}
          <div className="hidden md:block">
            <button
              onClick={handleHireMe}
              className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-4 opacity-100 bg-[#8E6FCE] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
            }`}
        >
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <button
                onClick={(e) => { setIsOpen(false); handleHireMe(e); }}
                className="inline-block px-6 py-3 rounded-full bg-white text-[#8E6FCE] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
