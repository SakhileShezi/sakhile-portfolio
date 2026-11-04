import { motion } from "framer-motion";
import { skills } from "../data/projects";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="text-cyan-400 font-mono text-sm mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="bg-slate-800 text-slate-200 text-sm px-3 py-1.5 rounded-md border border-slate-700"
                  >
                    {s}
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