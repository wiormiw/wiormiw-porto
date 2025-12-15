import { useState, useEffect } from 'react';

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
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
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
    <span className={`font-mono ${className}`}>
      {displayedText}
      <span className="border-blaziken-jet ml-1 animate-pulse border-r-4">&nbsp;</span>
    </span>
  );
}
