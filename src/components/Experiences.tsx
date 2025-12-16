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
    tech: ['.NET', 'RHEL/CentOS', 'PostgreSQL', 'Docker'],
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
      <div className="relative z-10 mx-auto mb-20 max-w-5xl text-center">
        <h2 className="font-heading text-blaziken-jet mb-4 flex items-center justify-center gap-4 text-3xl font-black md:text-5xl">
          <span className="bg-blaziken-jet h-[4px] w-8 md:w-16"></span>
          ADVENTURE LOG
          <span className="bg-blaziken-jet h-[4px] w-8 md:w-16"></span>
        </h2>
        <p className="font-mono text-lg font-bold tracking-widest text-gray-700">
          REGION: PROFESSIONAL CAREER
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* THE "ROUTE" LINE (Background) */}
        <div className="absolute top-0 left-[28px] h-full w-[4px] bg-black/10 md:left-1/2 md:-translate-x-1/2" />

        {/* THE "ROUTE" LINE (Progress - purely visual for now, static gradient) */}
        <div className="absolute top-0 left-[28px] h-full w-[4px] bg-gradient-to-b from-[#FFD700] via-[#DC2626] to-transparent opacity-50 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12 md:gap-24">
          {experiences.map((exp, index) => {
            // Check if item is even or odd for zig-zag layout
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col items-center gap-8 md:flex-row ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* THE "GYM" NODE (Center Marker) */}
                <div className="absolute top-0 left-[10px] z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-black bg-[#FFD700] shadow-[0_0_20px_#FFD700] md:static md:h-16 md:w-16">
                  <exp.icon className="h-5 w-5 text-black md:h-8 md:w-8" strokeWidth={2.5} />
                </div>

                {/* THE CARD (Content) */}
                <div className="ml-12 w-full md:ml-0 md:w-[calc(50%-32px)]">
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
                    className="relative border-2 border-black bg-white p-6 shadow-[8px_8px_0px_#7F1D1D] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_#DC2626]"
                  >
                    {/* Header */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-2 border-b-2 border-dashed border-gray-300 pb-4">
                      <div>
                        <span
                          className={`mb-1 inline-block px-2 py-0.5 text-[10px] font-black tracking-widest text-white uppercase ${
                            exp.id === 3 ? 'animate-pulse bg-[#DC2626]' : 'bg-gray-800'
                          }`}
                        >
                          {exp.type}
                        </span>
                        <h3 className="font-heading text-xl leading-tight font-black text-black">
                          {exp.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm font-bold text-gray-600">
                          <Briefcase size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1 font-mono text-xs font-bold text-[#DC2626]">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="mt-1 flex items-center justify-end gap-1 font-mono text-xs font-bold text-gray-400">
                          <MapPin size={12} />
                          <span>West Java, ID</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body mb-6 text-lg leading-relaxed font-medium text-gray-800">
                      {exp.desc}
                    </p>

                    {/* Tech & Badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-black bg-gray-100 px-2 py-1 font-mono text-xs font-bold text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute -top-1 -right-1 h-4 w-4 bg-black" />
                    <div className="absolute -bottom-1 -left-1 h-4 w-4 bg-black" />
                  </motion.div>
                </div>

                {/* Empty spacer for the other side (Desktop only) */}
                <div className="hidden w-[calc(50%-32px)] md:block" />
              </motion.div>
            );
          })}
        </div>

        {/* START POINT */}
        <div className="absolute bottom-0 left-[22px] h-4 w-4 border-2 border-black bg-white md:left-1/2 md:-translate-x-1/2" />
      </div>
    </section>
  );
}
