import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="animate-spin-slow h-[600px] w-[600px] rounded-full border-[2px] border-dashed border-[#7F1D1D]" />
        <div className="animate-reverse-spin absolute h-[450px] w-[450px] rounded-full border-[2px] border-black" />
        <div className="absolute h-[800px] w-[800px] rounded-full border border-[#DC2626]" />
      </div>

      {/* CONTENT */}
      <div className="z-10 flex flex-col items-center space-y-6 px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block skew-x-[-10deg] border-2 border-black bg-[#FFD700]/50 px-6 py-2 shadow-[4px_4px_0px_black] backdrop-blur-sm"
        >
          <span className="font-heading block skew-x-[10deg] text-xs font-black tracking-[0.2em] text-black uppercase">
            Lv. 22 Backend Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="font-heading py-2 text-7xl leading-[0.9] font-black tracking-tight text-black drop-shadow-sm md:text-9xl"
        >
          WIORMIW
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-20 mt-4 flex h-[30px] items-center justify-center gap-2 font-mono text-lg font-bold text-black md:text-xl"
        >
          <span className="font-black text-[#DC2626]">{'>'}</span>
          <Typewriter
            text="Wijoyo Raharjo Murti Indra Wahyono..."
            delay={800}
            speed={30}
            className="text-black"
          />
        </motion.div>

        {/* POKEMON STYLE CV BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative z-30 mt-8"
        >
          <a
            href="https://drive.google.com/file/d/1bT6vEkTMJE8LQRPaFSDrT8rAKjcXMlyj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-2 border-black bg-white px-6 py-3 font-mono text-sm font-bold tracking-widest text-black shadow-[4px_4px_0px_#DC2626] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#DC2626] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            <Download className="h-5 w-5 animate-bounce" />
            <span>ACQUIRE TRAINER CARD</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="font-mono text-[14px] font-bold tracking-widest text-black">
          SCROLL TO ENGAGE
        </span>
        <ArrowDown className="h-8 w-8 text-black" />
      </motion.div>
    </section>
  );
}
