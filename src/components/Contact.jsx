import { Mail, Phone, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-10">
          Open to graduate Java Developer and Junior Software Developer roles.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <a href="mailto:sakhileshezz@gmail.com" className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition">
            <Mail className="text-cyan-400" size={20} />
            <span className="text-sm text-slate-300">sakhileshezz@gmail.com</span>
          </a>
          <a href="tel:+27673636890" className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition">
            <Phone className="text-cyan-400" size={20} />
            <span className="text-sm text-slate-300">067 363 6890</span>
          </a>
          <a href="https://github.com/SakhileShezi" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition">
            <Github className="text-cyan-400" size={20} />
            <span className="text-sm text-slate-300">github.com/SakhileShezi</span>
          </a>
          <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
            <MapPin className="text-cyan-400" size={20} />
            <span className="text-sm text-slate-300">Mbombela, Mpumalanga</span>
          </div>
        </div>
      </div>
    </section>
  );
}