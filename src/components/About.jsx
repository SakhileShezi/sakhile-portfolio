import { motion } from "framer-motion";
import { GraduationCap, Code2, Database } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4 text-slate-300 leading-relaxed"
          >
            <p>
              I'm a <span className="text-cyan-400">Computer Science graduate</span> from
              Tshwane University of Technology with a passion for building
              reliable, well-structured backend systems.
            </p>
            <p>
              During my internship at <span className="text-cyan-400">Investhood IT 2.0</span>,
              I developed Spring Boot APIs, managed PostgreSQL and MySQL
              databases, and worked alongside designers and developers to ship
              data-driven features.
            </p>
            <p>
              I care about clean code, thoughtful database design, and
              solutions that just work. I'm currently seeking a{" "}
              <span className="text-cyan-400">Graduate Java Developer</span> or{" "}
              <span className="text-cyan-400">Junior Software Developer</span>{" "}
              role where I can keep growing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {[
              { icon: <Code2 />, title: "Backend Focus", text: "Java, Spring Boot, REST APIs" },
              { icon: <Database />, title: "Data-Driven", text: "PostgreSQL, MySQL, SQL design" },
              { icon: <GraduationCap />, title: "TUT Graduate", text: "Diploma in Computer Science" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-slate-800 p-5 rounded-lg border border-slate-700"
              >
                <div className="text-cyan-400 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}