import { Heart } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p>
          © {new Date().getFullYear()} Sakhile Lusiba. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <span>Built with</span>
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>using React & Tailwind</span>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com/SakhileShezi" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-cyan-400 transition"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}