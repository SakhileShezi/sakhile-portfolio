import { motion } from "framer-motion";
import { experience } from "../data/projects";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border-l-2 border-cyan-500 pl-6 mb-10"
          >
            <p className="text-cyan-400 font-mono text-sm mb-1">{job.period}</p>
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-slate-400 mb-3">{job.company}</p>
            <ul className="space-y-1.5 text-slate-300 text-sm">
              {job.points.map((p, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-cyan-400">▸</span> {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}