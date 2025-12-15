import { motion } from 'framer-motion';
import { Send, Sword } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 flex flex-col items-center justify-center overflow-hidden px-4 py-32"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        // Solid White Box with Thick Black Border
        className="z-30 max-w-2xl space-y-8 border-4 border-black bg-white p-12 text-center shadow-[12px_12px_0px_black]"
      >
        <h2 className="font-heading text-4xl font-black text-black md:text-5xl">
          A Challenger Approaches?
        </h2>

        <p className="text-lg leading-relaxed font-medium text-black">
          Whether it's a new backend architecture, a refactor, or a legendary alliance—my inbox is
          open for battle.
        </p>

        <motion.a
          href="mailto:wwijoyo@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group font-heading relative inline-flex items-center gap-3 overflow-hidden bg-black px-10 py-5 font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#FF5722]"
        >
          <Sword className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
          <span>Send Challenge</span>
          <Send className="h-4 w-4 opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
        </motion.a>

        <div className="mt-4 font-mono text-xs font-bold text-gray-600">ID: wwijoyo@gmail.com</div>
      </motion.div>
    </section>
  );
}
