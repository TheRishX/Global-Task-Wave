import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface InfoPageProps {
  title: string;
  content: string;
}

export function InfoPage({ title, content }: InfoPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-12"
        >
          {title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none space-y-6 text-slate-400 leading-relaxed text-lg"
        >
          {content.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          
          <div className="pt-20">
            <div className="p-8 rounded-2xl glass border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Need more information?</h3>
              <p className="text-slate-400 mb-6">Our dedicated support team is available 24/7 to help with any inquiries regarding our {title.toLowerCase()}.</p>
              <Link to="/" onClick={() => setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="px-6 py-3 bg-white text-black font-bold rounded-full">
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
