import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-cyan-400 mb-8"
        >
          <Star className="w-4 h-4 fill-cyan-400" />
          <span>New: Global Partnership with Meetopia</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-display font-bold leading-[1.1] mb-8"
        >
          Scaling the <span className="text-gradient">Next Wave</span> <br />
          of Digital Excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Global Taskwave builds, manages, and scales innovative technology products
          for modern startups. We turn complex ideas into high-performance SaaS solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Our Portfolio
          </a>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-20 relative px-4"
        >
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
              alt="Dashboard Preview"
              className="w-full h-auto object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-4 md:right-0 p-4 glass rounded-xl border-white/10 hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-white">System: Optimized</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-4 md:left-0 p-4 glass rounded-xl border-white/10 hidden sm:block"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-400">Total Revenue</span>
              <span className="text-lg font-bold text-white">$2.4M</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
