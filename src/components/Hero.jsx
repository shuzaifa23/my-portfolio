import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/huzaifa-hero.mp4';
import heroPoster from '../assets/about/huzaifa-avatar.png';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = ({ onVideoLoaded }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Monitor video loading events for cross-fade and preloader exit
  const handleVideoLoad = () => {
    if (!isVideoReady) {
      setIsVideoReady(true);
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    }
  };

  // Safe callback in case video events fail or fire late
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
        handleVideoLoad();
      }
    }
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay or play was blocked:", err);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Poster - Displays immediately to prevent layout shifts */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url(${heroPoster})`,
          backgroundPosition: 'center 20%'
        }}
      />

      {/* Background Video - Smoothly fades in once loaded */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isVideoReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectPosition: 'center 20%' }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient mask to preserve original video brightness while ensuring text readability */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent z-10" />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-[1.15]"
          >
            {heroContent.greeting}
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/80 text-sm md:text-lg font-medium mb-8 max-w-lg drop-shadow-md leading-relaxed"
          >
            {heroContent.subtitle}
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-5 py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              {heroContent.ctaPrimary.text}
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs md:text-sm rounded-full bg-black/40 border border-white text-white font-bold hover:bg-black/60 transition-all duration-300 backdrop-blur-md"
            >
              Hire Me
            </a>

            {/* Resume Download Button */}
            <a 
              href={heroContent.ctaResume.href}
              download="Huzaifa_Resume.pdf"
              className="px-5 py-3 text-xs md:text-sm rounded-full bg-transparent border border-white/50 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto z-20"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#8E6FCE] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(142,111,206,0.6)]">
            {!isPlaying || isMuted ? (
              // Play Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {!isPlaying || isMuted ? "Play Reel" : "Pause"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
