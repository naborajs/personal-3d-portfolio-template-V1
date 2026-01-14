import React, { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Database,
  Cpu,
  Eye,
  Zap,
  Globe,
  Smartphone,
  Activity,
  ExternalLink,
  Mail
} from "lucide-react";

/* =====================
   CONFIG
===================== */
const CONFIG = {
  name: "Naboraj Sarkar",
  tagline: "Student • Creator • Tech Learner",
  location: "West Bengal, India",
  logo: "/logo.png",
  repo: "https://github.com/naborajs/personal-3d-portfolio-template",
  socials: [
    { name: "GitHub", icon: <Github />, url: "https://github.com/naborajs" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://linkedin.com/in/naboraj-sarkar" },
    { name: "Instagram", icon: <Instagram />, url: "https://instagram.com/naborajs" },
    { name: "X", icon: <Twitter />, url: "https://x.com/NSGAMMING699" }
  ]
};

/* =====================
   DATA
===================== */
const CATEGORIES = ["All", "Systems", "Automation", "Interface"];

const REGISTRY = [
  { id: "SYS", category: "Systems", title: "Core Architecture", icon: <Database />, desc: "Scalable, high-availability backend systems.", tags: ["Node", "Postgres", "Docker"] },
  { id: "AUT", category: "Automation", title: "Neuro Bots", icon: <Cpu />, desc: "Smart Telegram & WhatsApp automation.", tags: ["AI", "Python"] },
  { id: "UIX", category: "Interface", title: "Cinematic UI", icon: <Eye />, desc: "High-end motion driven interfaces.", tags: ["React", "Motion"] },
  { id: "FLOW", category: "Automation", title: "Workflow Sync", icon: <Zap />, desc: "CRM, email & API automation pipelines.", tags: ["APIs", "Zapier"] },
  { id: "EDGE", category: "Systems", title: "Cloud Forge", icon: <Globe />, desc: "Edge-ready deployments on Vercel.", tags: ["Serverless"] },
  { id: "APP", category: "Interface", title: "App Genesis", icon: <Smartphone />, desc: "Cross-platform mobile foundations.", tags: ["React Native"] }
];

/* =====================
   CARD (GPU SAFE)
===================== */
const ProtocolCard = memo(({ item }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className="glass p-8 rounded-3xl border border-white/10 hover:border-[#00BFA6]/40 transition-all will-change-transform"
  >
    <div className="flex items-center gap-4 mb-4 text-[#00BFA6]">
      {item.icon}
      <h3 className="text-xl font-bold">{item.title}</h3>
    </div>
    <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
    <div className="flex flex-wrap gap-2">
      {item.tags.map((t: string) => (
        <span key={t} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-500">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
));

/* =====================
   APP
===================== */
export default function App() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return REGISTRY;
    return REGISTRY.filter(i => i.category === filter);
  }, [filter]);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#00BFA6]/30">

      {/* BACKGROUND (LIGHT, NO LAG) */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA6]/10 via-transparent to-[#7C3AED]/10" />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"
        />
      </div>

      {/* HERO */}
      <section className="pt-40 pb-32 text-center max-w-6xl mx-auto px-6">
        <motion.img
          src={CONFIG.logo}
          alt="Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-20 mx-auto mb-8"
        />

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tight"
        >
          {CONFIG.name.split(" ")[0]}{" "}
          <span className="text-[#00BFA6]">{CONFIG.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl text-gray-400"
        >
          {CONFIG.tagline}
        </motion.p>

        <div className="mt-12 flex justify-center gap-4">
          {CONFIG.socials.map(s => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              whileHover={{ scale: 1.15 }}
              className="p-4 glass rounded-xl hover:bg-white hover:text-black transition"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* REGISTRY */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-black">Protocols</h2>
          <div className="flex gap-2">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                  filter === c
                    ? "bg-white text-black"
                    : "bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map(item => (
              <ProtocolCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 px-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-white font-bold">© {new Date().getFullYear()} {CONFIG.name}</p>
            <p className="mt-2 flex items-center gap-2">
              <Activity size={14} className="text-[#00BFA6]" /> System Stable
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href={CONFIG.repo} target="_blank" className="hover:text-white flex items-center gap-2">
              Source Code <ExternalLink size={12} />
            </a>
            <a href="mailto:contact@nsgamming.xyz" className="hover:text-white flex items-center gap-2">
              Contact <Mail size={12} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
