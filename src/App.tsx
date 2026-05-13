import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { PartnerShowcase } from "./components/PartnerShowcase";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { InfoPage } from "./components/InfoPage";
import { motion, useScroll, useSpring } from "motion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Hero />
      
      {/* Trusted By Strip */}
      <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">
            Reliably scaling digital infrastructure for
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-60 transition-opacity">
            {["Stripe", "Airbnb", "Linear", "Vercel", "Meetopia"].map((name) => (
              <span key={name} className="text-xl font-display font-medium text-white">{name}</span>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <PartnerShowcase />
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <div className="relative selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen flex flex-col">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs" element={<InfoPage title="Documentation" content="Our documentation provides a comprehensive guide to Global Taskwave's infrastructure and developer tools.\n\nLearn how to deploy your first SaaS platform using our autonomous scaling pipelines. Explore our API references, SDK documentation, and best practices for high-performance React architectures." />} />
            <Route path="/privacy" element={<InfoPage title="Privacy Policy" content="At Global Taskwave, we prioritize your data security. Our privacy policy outlines how we collect, use, and protect your information.\n\nWe utilize bank-grade encryption and strictly adhere to SOC2 compliance standards to ensure your digital ecosystem remains private and secure at all times." />} />
            <Route path="/terms" element={<InfoPage title="Terms of Service" content="By using Global Taskwave services, you agree to our terms of service. Our agreement outlines the responsibilities, liabilities, and service level guarantees we provide to our global partners.\n\nWe are committed to delivering 99.99% uptime and world-class engineering support as part of our core partnership agreement." />} />
            <Route path="/open-source" element={<InfoPage title="Open Source" content="Global Taskwave is committed to the open-source community. We believe in building the future of the web together.\n\nExplore our open-source repositories on GitHub, including our custom UI components, performance monitoring tools, and deployment scripts used by thousands of developers worldwide." />} />
            <Route path="/case-study/meetopia" element={<InfoPage title="Global Taskwave x Meetopia" content="Our collaboration with Meetopia focused on scaling their collaborative virtual environments for a global user base.\n\nBy implementing a customized autonomous scaling architecture and optimizing real-time data synchronization pipelines, we were able to support over 120,000 active users with zero downtime and sub-100ms latency across all global regions." />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
