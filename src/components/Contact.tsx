import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Let's build something <br />
            <span className="text-gradient underline decoration-cyan-500/30 underline-offset-8">Extraordinary.</span>
          </motion.h2>
          <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
            Ready to take your digital vision to the global stage? 
            Join hundreds of forward-thinking companies scaling with Global Taskwave.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Elite Execution</h4>
                <p className="text-slate-500 text-sm">We deliver Silicon Valley speed with global scale.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-violet-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">End-to-End Solutions</h4>
                <p className="text-slate-500 text-sm">From concept to cloud infra, we handle everything.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-3xl border-white/10 relative z-10"
        >
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-8">Our partners will reach out within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 glass rounded-full text-sm font-bold"
              >
                Send another
              </button>
            </div>
          ) : (
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition-colors text-white"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Project Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition-colors text-white appearance-none">
                  <option className="bg-slate-900">SaaS Development</option>
                  <option className="bg-slate-900">Enterprise Software</option>
                  <option className="bg-slate-900">Cloud Infrastructure</option>
                  <option className="bg-slate-900">AI Integration</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Message</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 transition-colors text-white resize-none"
                  placeholder="How can we help you scale?"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 group"
              >
                Launch Project
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
