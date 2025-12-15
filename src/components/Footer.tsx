import { Flame, Server, GitBranch } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-30 mt-24 w-full border-t-4 border-black bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 font-mono text-xs text-white md:flex-row md:text-sm">
        {/* Left: System Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-bold">
            {/* Blinking Dot */}
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#00E676] shadow-[0_0_10px_#00E676]" />
            {/* White Text as requested */}
            <span className="text-white">CORE_ONLINE</span>
          </div>
          <div className="flex items-center gap-2 opacity-70">
            <Server size={14} />
            <span>REGION: ASIA-SE1</span>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="font-heading font-bold tracking-widest text-white/90">
          WIORMIW PROTOCOL © 2025
        </div>

        {/* Right: Metrics */}
        <div className="flex items-center gap-6 opacity-70">
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
    </footer>
  );
}
