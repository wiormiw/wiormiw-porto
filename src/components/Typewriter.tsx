import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text,
  delay = 0,
  speed = 50,
  className = '',
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Standard delay logic (fallback)
    const beginTyping = () => {
      setTimeout(() => {
        setStarted(true);
      }, delay);
    };

    // Listen for the custom event from Loader (The "Cheat" Signal)
    const handleLoaderComplete = () => {
      setStarted(true);
    };

    window.addEventListener('loader-complete', handleLoaderComplete);

    // Safety fallback
    const safetyTimer = setTimeout(() => {
      if (!started) beginTyping();
    }, 4000);

    return () => {
      window.removeEventListener('loader-complete', handleLoaderComplete);
      clearTimeout(safetyTimer);
    };
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return (
    <span className={`font-mono font-bold ${className}`}>
      {displayedText}

      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{
          duration: 1,
          times: [0, 0.5, 0.51, 1], // Stays ON for 50%, snaps OFF for 50%
          repeat: Infinity,
          ease: 'linear',
        }}
        className="ml-1 inline-block h-[1em] w-[0.2em] bg-current align-text-bottom"
      />
    </span>
  );
}
