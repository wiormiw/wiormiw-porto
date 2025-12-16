import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Server, Database, Radio } from 'lucide-react';

const experiences = [
  {
    id: 3,
    role: '.Net Developer',
    company: 'PT Fan Integrasi Teknologi (Fanintek)',
    period: 'July 2025 - Present',
    type: 'CURRENT MISSION',
    desc: 'Optimizing critical API response times by 80%, managing offline RHEL infrastructure, and engineering high-performance search solutions using PostgreSQL GIN indexing.',
    tech: ['.NET', 'C#', 'Typescript', 'RHEL/CentOS', 'PostgreSQL', 'Docker'],
    icon: Server,
    badges: ['Speedster Badge', 'SysAdmin Badge'],
  },
  {
    id: 2,
    role: 'Back End Developer (Intern)',
    company: 'PT Len Industri (Persero)',
    period: 'Feb 2023 - July 2023',
    type: 'SIDE QUEST',
    desc: 'Led a squad of 6 interns building Command Control Map Systems. Implemented WebSocket for real-time sensor data and optimized backend protocols for 20% faster transfer.',
    tech: ['Python', 'WebSocket', 'Geospatial', 'Microservices'],
    icon: Database,
    badges: ['Leadership Badge', 'Realtime Badge'],
  },
  {
    id: 1,
    role: 'IoT Developer (Intern)',
    company: 'PT Adhim Aju Sejahtera',
    period: 'July 2019 - Oct 2019',
    type: 'TUTORIAL ZONE',
    desc: 'Modernized legacy LabVIEW interfaces and implemented role-based access control for IoT panels. Integrated SQLite to standardize data storage.',
    tech: ['LabVIEW', 'IoT', 'SQLite', 'UI/UX'],
    icon: Radio,
    badges: ['Hardware Badge'],
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="relative overflow-hidden px-4 py-24">
      {/* SECTION TITLE */}
      <div className="relative z-10 mx-auto mb-16 max-w-5xl text-center">
        <h2 className="font-heading text-blaziken-jet mb-4 flex items-center justify-center gap-4 text-3xl font-black md:text-5xl">
          <span className="bg-blaziken-jet h-[4px] w-8 md:w-16"></span>
          ADVENTURE LOG
          <span className="bg-blaziken-jet h-[4px] w-8 md:w-16"></span>
        </h2>
        <p className="font-mono text-lg font-bold tracking-widest text-gray-700">
          REGION: PROFESSIONAL CAREER
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Mobile: Left aligned at 24px (center of w-12 icon wrapper) */}
        {/* Desktop: Center aligned */}
        <div className="absolute top-0 left-6 h-full w-[4px] -translate-x-1/2 bg-black/10 md:left-1/2" />

        {/* The Animated/Gradient Line */}
        <div className="absolute top-0 left-6 h-full w-[4px] -translate-x-1/2 bg-gradient-to-b from-[#FFD700] via-[#DC2626] to-transparent opacity-50 md:left-1/2" />

        <div className="flex flex-col gap-8 md:gap-24">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Mobile: Flex row (Icon left, Card right)
                // Desktop: Flex row (Spacer, Icon, Card) OR Reverse
                className={`relative flex items-start gap-6 md:items-center md:gap-0 ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* THE "GYM" NODE (Icon) */}
                {/* Mobile: Relative positioning in the flex flow */}
                {/* Desktop: Centered absolutely or via flex alignment */}
                <div className="relative z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-black bg-[#FFD700] shadow-[0_0_20px_#FFD700] md:h-16 md:w-16">
                  <exp.icon className="h-5 w-5 text-black md:h-8 md:w-8" strokeWidth={2.5} />
                </div>

                {/* THE CARD (Content) */}
                {/* Mobile: Take remaining width */}
                {/* Desktop: Take 50% width minus half icon */}
                <div className="w-full md:w-[calc(50%-32px)] md:px-8">
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
                    className="relative border-2 border-black bg-white p-4 shadow-[6px_6px_0px_#7F1D1D] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_#DC2626] md:p-6"
                  >
                    {/* Header - Stacks on mobile, splits on desktop */}
                    <div className="mb-4 flex flex-col gap-2 border-b-2 border-dashed border-gray-300 pb-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span
                          className={`mb-2 inline-block px-2 py-0.5 text-[10px] font-black tracking-widest text-white uppercase ${
                            exp.id === 3 ? 'animate-pulse bg-[#DC2626]' : 'bg-gray-800'
                          }`}
                        >
                          {exp.type}
                        </span>
                        <h3 className="font-heading text-lg leading-tight font-black text-black md:text-xl">
                          {exp.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-xs font-bold text-gray-600 md:text-sm">
                          <Briefcase size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Date & Loc - Aligned left on mobile, right on desktop */}
                      <div className="mt-2 flex shrink-0 flex-col items-start gap-1 sm:mt-0 sm:items-end">
                        <div className="flex items-center gap-1 font-mono text-xs font-bold text-[#DC2626]">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 font-mono text-xs font-bold text-gray-400">
                          <MapPin size={12} />
                          <span>West Java, ID</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body mb-6 text-sm leading-relaxed font-medium text-gray-800 md:text-base">
                      {exp.desc}
                    </p>

                    {/* Tech & Badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-black bg-gray-100 px-2 py-1 font-mono text-[10px] font-bold text-black md:text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-black md:h-4 md:w-4" />
                    <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-black md:h-4 md:w-4" />
                  </motion.div>
                </div>

                {/* Empty spacer for the other side (Desktop only) */}
                <div className="hidden md:block md:w-[calc(50%-32px)]" />
              </motion.div>
            );
          })}
        </div>

        {/* START POINT */}
        <div className="absolute bottom-0 left-6 h-4 w-4 -translate-x-1/2 border-2 border-black bg-white md:left-1/2" />
      </div>
    </section>
  );
}
