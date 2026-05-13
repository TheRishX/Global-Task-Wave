import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { PARTNERS, EXTERNAL_LINKS } from "../constants";

export function PartnerShowcase() {
  const featuredPartner = PARTNERS.find(p => p.featured);
  const otherPartners = PARTNERS.filter(p => !p.featured);

  const getPartnerLink = (name: string) => {
    const key = name.toLowerCase() as keyof typeof EXTERNAL_LINKS;
    return EXTERNAL_LINKS[key] || "#";
  };

  return (
    <section id="partners" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Powering Global <span className="text-gradient">Partnerships</span>
          </motion.h2>
          <p className="text-slate-400 text-lg">Trusted by the industry leaders and innovators worldwide.</p>
        </div>

        {/* Featured Collaboration: Meetopia */}
        {featuredPartner && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-20 glass p-8 md:p-12 rounded-[2rem] border-cyan-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6">
              <Star className="text-cyan-400 w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full border border-cyan-500/20">
                    Featured Collaboration
                  </span>
                </motion.div>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Global Taskwave <br /> 
                  <span className="text-cyan-400">x Meetopia</span>
                </h3>
                <p className="text-xl text-slate-300 italic mb-8 border-l-2 border-cyan-500 pl-6 py-2 leading-relaxed">
                  "{featuredPartner.description}"
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/case-study/meetopia" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-colors">
                    Read Case Study
                  </Link>
                  <a 
                    href={EXTERNAL_LINKS.meetopia} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 transition-colors text-white"
                  >
                    Meetopia Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden glass border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="Meetopia Collaboration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative floating badge */}
                <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl border-white/10 hidden md:block">
                  <div className="flex flex-col gap-1">
                    <span className="text-cyan-400 font-bold">120K+</span>
                    <span className="text-xs text-slate-400 uppercase tracking-tighter">Active Users Synchronized</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {otherPartners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={getPartnerLink(partner.name)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 cursor-pointer"
            >
              <span className="text-2xl font-bold text-white/50">{partner.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
