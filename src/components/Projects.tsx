import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'TIP OF ICEBERG',
    desc: 'Adventure game to learn about programming.',
    tech: ['GDScript', 'Godot', 'Aseprite'],
    link: 'https://github.com/wiormiw/TIP_OF_ICEBERG',
  },
  {
    title: 'SUGGEST ME 2.0',
    desc: 'Application to recommend food based on mood (With Gemini AI).',
    tech: ['Typescript', 'React', 'Vite', 'Tailwind', 'ElysiaJS', 'Tanstack Query', 'PostgreSQL'],
    link: 'https://github.com/wiormiw',
  },
  {
    title: 'GrowBaksAPI',
    desc: 'Simple E-Commerce API for small businesses (UMKM).',
    tech: ['Go', 'Fiber', 'PostgreSQL'],
    link: 'https://github.com/wiormiw/GrowBaksAPI',
  },
  {
    title: 'PokemonoInHomeAPI',
    desc: 'API to replicate classic pokemon game',
    tech: ['C#', 'ASP.NET Core', 'PostgreSQL'],
    link: 'https://github.com/wiormiw/PokemonInHomeAPI',
  },
  {
    title: 'e-library',
    desc: 'Very simple library apps',
    tech: ['Typescript', 'Java', 'Vue', 'Spring Boot'],
    link: 'https://github.com/wiormiw/e-library',
  },
  {
    title: 'digilott',
    desc: 'Arisan online apps (search for this term, only in indonesia)',
    tech: ['Python', 'HTML/CSS/JS', 'Django', 'MySQL'],
    link: 'https://github.com/wiormiw/digilott',
  },
  {
    title: 'SUGGEST ME 1.0',
    desc: 'Application to recommend food based on mood (you can also manage income and expenditure).',
    tech: ['Java', 'Swing', 'Jasper Report'],
    link: 'https://github.com/wiormiw/SuggestMe',
  },
  {
    title: 'Aloe',
    desc: 'Discord Bot for private channel',
    tech: ['Javascript', 'NodeJS', 'discord.js'],
    link: 'https://github.com/wiormiw/Aloe',
  },
];

export default function Projects() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-blaziken-jet border-blaziken-jet mb-12 border-l-8 pl-6 text-3xl font-black">
          Battle Log
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col border-2 border-black bg-white p-8 shadow-[6px_6px_0px_black] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#FF5722]"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-20 rounded-full p-2 transition-colors hover:bg-gray-100"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-6 w-6 text-black transition-colors hover:text-[#FF5722]" />
              </a>

              <h3 className="font-heading mb-3 pr-10 text-xl font-black tracking-tight text-black uppercase">
                {project.title}
              </h3>

              <p className="mb-6 flex-grow text-sm leading-relaxed font-medium text-gray-800">
                {project.desc}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 border-t-2 border-black/5 pt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="cursor-default border border-black bg-black px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#FFD700] hover:text-black"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
