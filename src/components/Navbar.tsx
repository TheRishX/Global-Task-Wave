import { motion } from "motion/react";
import { Menu, X, ArrowRight, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-black/60 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-lg flex items-center justify-center glow">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              Global <span className="text-cyan-400">Taskwave</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2 group"
          >
            Start Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white rounded-lg p-2 hover:bg-white/5 active:scale-95 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-slate-400 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2"
          >
            Start Building
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </nav>
  );
}
