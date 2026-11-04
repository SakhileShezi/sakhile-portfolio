import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 pt-20">
            {/* Grid container: 1 column on mobile, 2 on desktop */}
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <p className="text-cyan-400 font-mono mb-3">Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Sakhile Lusiba
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
                        Java Backend Developer
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto md:mx-0">
                        Computer Science graduate building reliable backend systems with{" "}
                        <span className="text-cyan-400">Java</span>,{" "}
                        <span className="text-cyan-400">Spring Boot</span>, and{" "}
                        <span className="text-cyan-400">PostgreSQL</span>.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition"
                        >
                            View My Work
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-lg font-medium transition"
                        >
                            <FileDown size={18} /> Download CV
                        </a>
                    </div>

                    <div className="flex gap-5 justify-center md:justify-start mt-10 text-slate-400">
                        <a
                            href="https://github.com/SakhileShezi"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-400 transition"
                        >
                            <GithubIcon size={24} />
                        </a>
                        <a
                            href="mailto:sakhileshezz@gmail.com"
                            className="hover:text-cyan-400 transition"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-72 h-96 md:w-80 md:h-[450px]">
                        {/* Cyan glow effect behind the image - adjusted to match rectangle */}
                        <div className="absolute inset-0 bg-cyan-500 rounded-3xl blur-2xl opacity-20"></div>

                        {/* The Image - Updated classes */}
                        <img
                            src="/profile.jpg"
                            alt="Sakhile Lusiba"
                            className="relative w-full h-full object-cover object-top rounded-3xl border-4 border-slate-800 shadow-2xl"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}