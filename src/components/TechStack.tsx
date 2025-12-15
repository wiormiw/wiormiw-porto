import { motion } from 'framer-motion';

const skills = [
  { name: 'Node.js (Express)', type: 'Core' },
  { name: 'Bun (ElysiaJS)', type: 'Core' },
  { name: 'Go (Fiber)', type: 'Core' },
  { name: 'Spring Boot (Java)', type: 'Core' },
  { name: 'ASP.NET Core (C#)', type: 'Core' },
  { name: 'FastAPI (Python)', type: 'Core' },
  { name: 'PostgreSQL', type: 'Data' },
  { name: 'MySQL', type: 'Data' },
  { name: 'MSSQL', type: 'Data' },
  { name: 'Redis', type: 'Data' },
  { name: 'Kafka', type: 'Messaging' },
  { name: 'RabbitMQ', type: 'Messaging' },
  { name: 'BullMQ', type: 'Messaging' },
  { name: 'Socket.io', type: 'Websocket' },
  { name: 'Elasticsearch', type: 'Search' },
  { name: 'TypeScript', type: 'Lang' },
  { name: 'Go', type: 'Lang' },
  { name: 'Java', type: 'Lang' },
  { name: 'Python', type: 'Lang' },
  { name: 'C#', type: 'Lang' },
  { name: 'Docker', type: 'Tools' },
  { name: 'Git', type: 'Tools' },
  { name: 'Linux', type: 'OS' },
  { name: 'Godot', type: 'Game Engine' },
];

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-4 py-24">
      <h2 className="font-heading text-blaziken-jet mb-12 flex items-center justify-center gap-4 text-center text-3xl font-black">
        <span className="bg-blaziken-jet h-[4px] w-12"></span>
        Moveset Proficiency
        <span className="bg-blaziken-jet h-[4px] w-12"></span>
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="border-blaziken-jet cursor-default rounded-none border-2 bg-white p-6 text-center shadow-[4px_4px_0px_black] transition-all duration-200 hover:shadow-[8px_8px_0px_black]"
          >
            <span className="text-blaziken-flame mb-2 block text-xs font-bold tracking-widest uppercase">
              {skill.type}
            </span>
            <span className="text-blaziken-jet font-heading text-lg font-bold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
