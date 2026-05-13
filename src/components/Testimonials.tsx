import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Voice of our <span className="text-gradient">Advocates.</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From early-stage startups to Fortune 500 companies, our partners speak 
            for our commitment to engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-cyan-400 w-10 h-10 mb-6 opacity-40" />
                <p className="text-lg text-slate-300 leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full ring-2 ring-violet-500/20"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-tighter">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
