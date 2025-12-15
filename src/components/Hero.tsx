import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="animate-spin-slow h-[600px] w-[600px] rounded-full border-[2px] border-dashed border-[#7F1D1D]" />
        <div className="animate-reverse-spin absolute h-[450px] w-[450px] rounded-full border-[2px] border-black" />
        <div className="absolute h-[800px] w-[800px] rounded-full border border-[#DC2626]" />
      </div>

      {/* CONTENT */}
      <div className="z-10 space-y-6 px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block skew-x-[-10deg] border-2 border-black bg-[#FFD700]/50 px-6 py-2 shadow-[4px_4px_0px_black] backdrop-blur-sm"
        >
          <span className="font-heading block skew-x-[10deg] text-xs font-black tracking-[0.2em] text-black uppercase">
            Lv. 99 Distro Hopper
          </span>
        </motion.div>

        {/* Name - Tighter Leading to prevent overflow */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="font-heading py-2 text-7xl leading-[0.9] font-black tracking-tight text-black drop-shadow-sm md:text-9xl"
        >
          WIORMIW
        </motion.h1>

        {/* Typewriter - Forced Z-Index to stay on front */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-20 mt-4 flex h-[30px] items-center justify-center gap-2 font-mono text-lg font-bold text-black md:text-xl"
        >
          <span className="font-black text-[#DC2626]">{'>'}</span>
          <Typewriter
            text="Combustive Backend Engineering..."
            delay={800}
            speed={30}
            className="text-black"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="font-mono text-[10px] font-bold tracking-widest text-black">
          SCROLL_TO_ENGAGE
        </span>
        <ArrowDown className="h-6 w-6 text-black" />
      </motion.div>
    </section>
  );
}
