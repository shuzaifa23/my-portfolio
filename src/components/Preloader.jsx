import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the bottom name after 1.8s
    const timer = setTimeout(() => setMinTimeElapsed(true), 1800);
    // Dismiss the entire preloader after 4.2s
    const dismissTimer = setTimeout(() => setIsLoading(false), 4200);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(dismissTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen z-[100000] flex flex-col overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #9b7fe8 0%, #8E6FCE 50%, #7a58c7 100%)' }}
        >
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.13) 0%, transparent 70%)'
          }} />

          {/* ── MIDDLE: Welcome to my Portfolio ── */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center mt-[-40px]">
            {/* Decorative line + WELCOME TO label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-10 bg-white/40" />
              <span className="text-white/60 text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase">
                Welcome to
              </span>
              <div className="h-px w-10 bg-white/40" />
            </motion.div>

            {/* Big main text */}
            <div className="relative">
              {/* Ghost */}
              <div className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-purple-950/20 font-sans select-none leading-tight">
                My Portfolio
              </div>
              {/* Animated fill */}
              <motion.div
                className="absolute top-0 left-0 w-full text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white font-sans leading-tight overflow-hidden"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.4 }}
              >
                My Portfolio
              </motion.div>
            </div>

            {/* Decorative dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="flex gap-2 mt-2"
            >
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/40"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </motion.div>

            {/* Replace Swipe Button with Name Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={
                minTimeElapsed 
                ? { opacity: 1, y: 0, filter: 'blur(0px)' } 
                : { opacity: 0, y: 30, filter: 'blur(10px)' }
              }
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full flex justify-center mt-14"
            >
              <h2 className="text-lg md:text-2xl font-black tracking-[0.5em] text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                MD HUZAIFA S
              </h2>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
