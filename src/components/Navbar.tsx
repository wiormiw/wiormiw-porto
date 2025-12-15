import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Home, Zap, Sword, Mail } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'hero', icon: Home, label: 'Base' },
    { id: 'stack', icon: Zap, label: 'Power' },
    { id: 'projects', icon: Sword, label: 'Quests' },
    { id: 'contact', icon: Mail, label: 'Comms' },
  ];

  useEffect(() => {
    const handleScroll = () => {
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
      const offset = isMobile ? 80 : 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 z-[100] flex w-full justify-center md:fixed md:top-1/2 md:left-6 md:h-auto md:w-auto md:-translate-y-1/2 md:flex-col">
      <motion.div
        initial={{ x: isMobile ? 0 : -100, y: isMobile ? -100 : 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="
          bg-blaziken-jet border-blaziken-flame 
          flex w-full flex-row items-center justify-around border-b-4 py-3 px-2 shadow-lg
          md:flex-col md:gap-4 md:rounded-full md:border-4 md:px-3 md:py-5 md:shadow-[10px_0_30px_rgba(0,0,0,0.5)] md:w-auto
        "
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
    <div className="group relative flex items-center justify-center">
      <span className="text-blaziken-jet pointer-events-none absolute left-16 z-50 hidden rounded border-2 border-black bg-white px-2 py-1 font-mono text-xs font-bold whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        {item.label}
      </span>

      <motion.button
        ref={ref}
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full transition-colors duration-300 ${
          isActive
            ? 'bg-blaziken-core text-blaziken-jet shadow-[0_0_15px_#FFD700]'
            : 'text-white hover:bg-white/10'
        }`}
      >
        <item.icon className="h-5 w-5 md:h-[22px] md:w-[22px]" strokeWidth={2.5} />

        {isActive && (
          <motion.div
            layoutId="active-nav"
            className="bg-blaziken-flame absolute -bottom-1 h-1.5 w-1.5 rounded-full md:bottom-auto md:-right-1 md:h-2 md:w-2"
          />
        )}
      </motion.button>
    </div>
  );
}