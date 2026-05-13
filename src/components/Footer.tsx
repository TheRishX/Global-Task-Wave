import { Rocket, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../constants";

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded flex items-center justify-center glow">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <Link to="/" className="text-xl font-display font-bold tracking-tight text-white">
                Global Taskwave
              </Link>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Building the future of digital infrastructure. Based in San Francisco, scaling worldwide.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 text-slate-400 hover:text-violet-400 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">SaaS Development</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Digital Transformation</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cloud Optimization</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Security Audits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/docs" className="hover:text-violet-400 transition-colors">Documentation</Link></li>
              <li><Link to="/open-source" className="hover:text-violet-400 transition-colors">Open Source</Link></li>
              <li><Link to="/privacy" className="hover:text-violet-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-violet-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Join our list</h4>
            <p className="text-slate-500 text-sm mb-6">Receive insights on scaling digital infrastructure.</p>
            <form 
              className="flex gap-2 p-1 glass rounded-xl border-white/10"
              onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}
            >
              <input 
                type="email" 
                required
                placeholder="email@example.com"
                className="bg-transparent border-none outline-none px-3 text-sm text-white w-full"
              />
              <button type="submit" className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-cyan-50">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-xs">
            © 2026 Global Taskwave. All rights reserved. Built with precision for Meetopia partnership.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <a href={SOCIAL_LINKS.mail} className="flex items-center gap-1 hover:text-white transition-colors"><Mail className="w-3 h-3" /> hello@taskwave.global</a>
            <span className="flex items-center gap-1 text-cyan-500/50">#SCALING_THE_FUTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
