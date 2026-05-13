import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "../constants";

export function Products() {
  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Digital <span className="text-violet-400 text-gradient">Masterpieces.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg"
          >
            Explore our curated selection of high-performance applications designed 
            to solve complex business challenges with elegant simplicity.
          </motion.p>
        </div>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group text-white font-medium"
        >
          View all applications
          <div className="p-2 glass rounded-full group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col h-full"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 glass rounded-full text-xs font-bold text-cyan-400 uppercase tracking-widest border-white/10">
                  {product.category}
                </span>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-slate-800" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-black bg-white/10 flex items-center justify-center text-[10px] text-white">
                  +12
                </div>
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                Latest v4.2
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
