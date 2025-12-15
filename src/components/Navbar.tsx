import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Home, Zap, Sword, Mail } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('hero');

  // Links configuration
  const navItems = [
    { id: 'hero', icon: Home, label: 'Base' },
    { id: 'stack', icon: Zap, label: 'Power' },
    { id: 'projects', icon: Sword, label: 'Quests' },
    { id: 'contact', icon: Mail, label: 'Comms' },
  ];

  // Scroll Spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Offset by 1/3 of screen height for better trigger feel
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveTab(item.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 z-[100] flex -translate-y-1/2 flex-col items-center gap-2">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="bg-blaziken-jet border-blaziken-flame flex flex-col items-center gap-4 rounded-full border-2 py-4 px-3 shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={activeTab === item.id}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}

function NavItem({
  item,
  isActive,
  onClick,
}: {
  item: any;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div className="group relative flex items-center">
      {/* UPDATED: Tooltip appears on the RIGHT side */}
      <span className="text-blaziken-jet pointer-events-none absolute left-14 rounded border border-black bg-white px-2 py-1 font-mono text-[10px] font-bold whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100 shadow-lg z-50">
        {item.label}
      </span>

      <motion.button
        ref={ref}
        onClick={onClick}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.9 }}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 ${
          isActive
            ? 'bg-blaziken-core text-blaziken-jet shadow-[0_0_15px_#FFD700]'
            : 'text-white hover:bg-white/10'
        }`}
      >
        <item.icon size={20} strokeWidth={2.5} />

        {isActive && (
          <motion.div
            layoutId="active-nav"
            className="bg-blaziken-flame absolute -right-1 h-1 w-1 rounded-full"
          />
        )}
      </motion.button>
    </div>
  );
}