import { Flame, Server, GitBranch, Instagram, Youtube, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-30 mt-24 w-full border-t-4 border-black bg-black">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-8">
        {/* System Data & Copyright */}
        <div className="grid grid-cols-1 gap-6 border-b border-white/10 pb-8 font-mono text-xs text-white md:grid-cols-3 md:items-center md:text-sm">
          {/* System Status */}
          <div className="flex items-center justify-center gap-6 md:justify-self-start">
            <div className="flex items-center gap-2 font-bold">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#00E676] shadow-[0_0_10px_#00E676]" />
              <span className="text-white">CORE_ONLINE</span>
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <Server size={14} />
              <span>REGION: ASIA-SE1</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="font-heading text-center font-bold tracking-widest text-white/90 md:justify-self-center">
            WIORMIW PROTOCOL © 2025
          </div>

          {/* Metrics */}
          <div className="flex items-center justify-center gap-6 opacity-70 md:justify-self-end">
            <div className="flex items-center gap-2">
              <GitBranch size={14} />
              <span>MAIN_BRANCH</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Flame size={14} className="text-[#FFD700]" />
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-8 pt-8 text-white/70">
          <a
            href="https://www.instagram.com/wiormiw"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-200 hover:scale-110 hover:text-[#E1306C]"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/@wijoyoraharjo721"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-200 hover:scale-110 hover:text-[#FF0000]"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/wiormiw"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-200 hover:scale-110 hover:text-[#0077B5]"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/wiormiw"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-200 hover:scale-110 hover:text-white"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
