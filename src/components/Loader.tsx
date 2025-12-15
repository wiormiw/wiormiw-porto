import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Flame, Server, Radio, Zap } from 'lucide-react';

const loadingStates = [
  { text: 'IGNITING KERNEL...', icon: Flame },
  { text: 'COMPILING ASSETS...', icon: Server },
  { text: 'ESTABLISHING UPLINK...', icon: Radio },
  { text: 'SYSTEM READY.', icon: Zap },
];

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const textInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < loadingStates.length - 1) return prev + 1;
        return prev;
      });
    }, 600);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
      clearInterval(textInterval);

      // Dispatch event 500ms into the exit animation.
      // The exit animation is 0.8s (800ms).
      // Firing at 500ms means typing starts while the curtain is lifting (last 300ms).
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('loader-complete'));
      }, 500);
    }, 2400);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, []);

  const CurrentIcon = loadingStates[currentIndex].icon;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#FFD700]"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Spinner */}
          <div className="relative mb-8">
            <motion.div
              className="h-24 w-24 rounded-full border-4 border-black/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 h-24 w-24 rounded-full border-t-4 border-black"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <CurrentIcon className="h-8 w-8 animate-pulse text-black" />
            </div>
          </div>

          {/* Text */}
          <div className="flex h-8 items-center justify-center overflow-hidden">
            <motion.span
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="font-heading text-sm font-black tracking-[0.2em] text-black md:text-base"
            >
              {loadingStates[currentIndex].text}
            </motion.span>
          </div>

          {/* Bar */}
          <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-black/10">
            <motion.div
              className="h-full bg-black"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
