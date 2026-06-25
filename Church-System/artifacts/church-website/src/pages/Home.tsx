import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronRight, Smartphone, PieChart, MessageSquare, Wallet,
  ShieldCheck, CheckCircle2, BellRing, Menu, X, TrendingUp,
  BookOpen, Users, ArrowRight, BarChart3, Globe, Zap,
  Star, Mail, Phone, MapPin, Facebook, Twitter, Youtube,
  CheckCheck, Receipt, CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import logoPath    from "@assets/VENTURES_edited.jpg_1782387721615.jpeg";
import heroDashboard from "@assets/image_1782391189060.png";
import mobileAnalyse from "@assets/WhatsApp_Image_2026-06-25_at_3.20.39_PM_(1)_1782391811803.jpeg";
import mobileSummary from "@assets/WhatsApp_Image_2026-06-25_at_3.20.39_PM_1782391811804.jpeg";

/* ── Palette ─────────────────────────────────────────────────── */
const C = {
  dark:  "#030e1b",
  mid:   "#04253d",
  deep:  "#02111f",
  c400:  "#22d3ee",
  c500:  "#06b6d4",
  c600:  "#0891b2",
  c700:  "#0e7490",
  c900:  "#164e63",
  ltbg:  "#ecfeff",
  ltbd:  "#a5f3fc",
  gold:  "#fbbf24",
} as const;

/* ── Motion variants ─────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};
const stagger: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

/* ══════════════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
      scrolled ? "py-2 bg-white/96 backdrop-blur-2xl shadow-xl shadow-black/[0.06]" : "py-4 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl"
            whileHover={{ scale: 1.08, rotate: 4 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <img src={logoPath} alt="Christ Glory" className="w-full h-full object-cover" />
            <motion.div className="absolute inset-0"
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              style={{ background: `radial-gradient(circle at 55% 35%, ${C.c400}90 0%, transparent 65%)` }}
            />
          </motion.div>
          <div className="leading-none">
            <span className="font-black text-[17px] tracking-tight block"
              style={{
                background: scrolled
                  ? `linear-gradient(135deg, ${C.dark} 0%, ${C.c600} 50%, ${C.c500} 100%)`
                  : `linear-gradient(135deg, #fff 0%, ${C.c400} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>CHRIST GLORY</span>
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase block mt-0.5"
              style={{ color: scrolled ? C.c600 : C.c400 + "cc" }}>Church System</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {["Features","Giving","Mobile","Reports"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm font-semibold transition-all duration-200 relative group"
              style={{ color: scrolled ? C.c900 : "rgba(255,255,255,0.70)" }}>
              {l}
              <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ background: C.c500 }}/>
            </a>
          ))}
          <Button className="ml-1 font-bold px-6 rounded-xl shadow-lg text-sm h-10 transition-all"
            style={{ background: `linear-gradient(135deg, ${C.c500} 0%, ${C.c700} 100%)`, color: "white",
              boxShadow: `0 0 20px ${C.c500}60` }}>
            Request a Demo
          </Button>
        </div>

        <button
          className="md:hidden p-2.5 rounded-xl transition-all"
          style={{ background: "rgba(34,211,238,0.12)", color: C.c400 }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t overflow-hidden"
            style={{ borderColor: C.ltbd }}>
            <div className="flex flex-col px-5 py-4 gap-3">
              {["Features","Giving","Mobile","Reports"].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="text-base font-semibold py-1 flex items-center gap-2" style={{ color: C.c900 }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.c500 }}/>
                  {l}
                </a>
              ))}
              <Button className="mt-2 w-full font-bold rounded-xl"
                style={{ background: `linear-gradient(135deg, ${C.c500} 0%, ${C.c700} 100%)`, color: "white" }}>
                Request a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
      style={{ background: `linear-gradient(160deg, ${C.deep} 0%, #04253d 55%, #053756 100%)` }}>

      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(34,211,238,0.10) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}/>

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[15%] right-[-5%] w-[700px] h-[700px] rounded-full"
          style={{ background: `radial-gradient(circle, ${C.c400}22 0%, transparent 65%)`, filter: "blur(80px)" }}/>
        <div className="absolute top-[30%] -left-[10%] w-[450px] h-[450px] rounded-full"
          style={{ background: `radial-gradient(circle, ${C.c700}30 0%, transparent 65%)`, filter: "blur(70px)" }}/>
        <div className="absolute bottom-0 right-[20%] w-[350px] h-[350px] rounded-full"
          style={{ background: `radial-gradient(circle, ${C.c500}18 0%, transparent 65%)`, filter: "blur(60px)" }}/>
      </div>

      <div className="max-w-7xl mx-auto px-5 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

          {/* Copy */}
          <motion.div className="flex-1 text-center lg:text-left" initial="hidden" animate="visible" variants={stagger}>

            {/* Badge */}
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-7 border"
              style={{ background: "rgba(34,211,238,0.10)", borderColor: "rgba(34,211,238,0.30)", color: C.c400 }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: C.c400 }}/>
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: C.c400 }}/>
              </span>
              Built for modern churches in East Africa
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-black leading-[1.04] text-white mb-6 tracking-tight">
              Church Management<br/>
              Made{" "}
              <span className="relative inline-block">
                <span style={{
                  background: `linear-gradient(90deg, ${C.c400} 0%, ${C.c500} 100%)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Simpler</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                  <path d="M0 3 Q50 0 100 3" stroke={C.c400} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              ,<br/>
              Clearer &amp; More<br/>Accountable.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-[17px] mb-8 leading-[1.75] max-w-xl mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.58)" }}>
              Receive and track contributions, manage funds, send SMS updates, and give
              your leaders real-time financial visibility — all in one place.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button size="lg" className="h-13 px-8 text-base font-extrabold rounded-xl shadow-2xl group"
                style={{ background: `linear-gradient(135deg, ${C.c400} 0%, ${C.c500} 100%)`, color: C.dark,
                  boxShadow: `0 12px 40px ${C.c500}55` }}>
                Request a Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"/>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold rounded-xl transition-all"
                style={{ borderColor: "rgba(255,255,255,0.18)", color: "white", background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)" }}>
                See How It Works
              </Button>
            </motion.div>

            {/* Mini trust row */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["#164e63","#0e7490","#0891b2","#06b6d4"].map((bg, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030e1b] flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: bg }}>
                    {["R","S","J","M"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <span className="font-bold text-white">25+ churches</span> already managing funds
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard */}
          <motion.div className="flex-1 w-full max-w-2xl mx-auto lg:max-w-none relative"
            initial={{ opacity: 0, x: 32, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22,1,0.36,1] }}>

            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 50%, ${C.c500}20, transparent 70%)`, filter: "blur(20px)" }}/>

            <div className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(34,211,238,0.22)",
                boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,211,238,0.10), inset 0 1px 0 rgba(255,255,255,0.05)` }}>

              {/* Sidebar overlay */}
              <div className="absolute top-0 left-0 bottom-0 z-20 flex flex-col overflow-hidden"
                style={{ width: "13.5%", background: "linear-gradient(180deg, #070e1a 0%, #091422 100%)" }}>
                <div className="flex items-center gap-1 px-2 pt-2 pb-1.5 border-b flex-shrink-0"
                  style={{ borderColor: "rgba(34,211,238,0.10)" }}>
                  <div className="w-5 h-5 rounded-md overflow-hidden flex-shrink-0">
                    <img src={logoPath} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-extrabold truncate" style={{ fontSize: "clamp(4px,0.75vw,7px)", color: C.c400 }}>
                    CHURCH CONSOLE
                  </p>
                </div>
                <div className="px-2 pt-1.5 pb-1.5 border-b flex-shrink-0"
                  style={{ borderColor: "rgba(34,211,238,0.08)" }}>
                  <p className="font-extrabold text-white" style={{ fontSize: "clamp(5px,1vw,10px)" }}>CHRIST GLORY</p>
                  <p className="font-bold mt-0.5" style={{ fontSize: "clamp(4px,0.75vw,8px)", color: C.c400 }}>CHURCH SYSTEM</p>
                </div>
                <div className="px-2 py-1 flex items-center gap-1 border-b flex-shrink-0"
                  style={{ borderColor: "rgba(34,211,238,0.08)" }}>
                  <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white"
                    style={{ background: C.c600, fontSize: "clamp(3px,0.5vw,5px)" }}>A</div>
                  <span className="text-white/50 truncate" style={{ fontSize: "clamp(3px,0.55vw,5px)" }}>Admin · priest</span>
                </div>
                <div className="flex flex-col gap-px px-1.5 pt-1 overflow-hidden">
                  {["Discipleship","Overview","Fund Accounts","Contributions","Messaging",
                    "Fund Displays","Verses & Announcements","Staff Users","Reports","Presentation"]
                    .map((item, i) => (
                    <div key={item} className="px-1.5 py-0.5 rounded truncate"
                      style={{ fontSize: "clamp(3px,0.55vw,5.5px)", background: i === 1 ? "rgba(34,211,238,0.15)" : "transparent", color: i === 1 ? C.c400 : "rgba(255,255,255,0.3)" }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stat card overlays */}
              <div className="absolute z-20 pointer-events-none"
                style={{ top: "9%", left: "14%", width: "86%", height: "22%" }}>
                <div className="w-full h-full grid grid-cols-4 gap-[1%] px-[1%]">
                  {[
                    { label: "CONFIRMED CONTRIBUTIONS", value: "5,842",        sub: "OPEN LEDGER" },
                    { label: "TOTAL COLLECTIONS",       value: "KES 5,924,630", sub: "Confirmed" },
                    { label: "BANK COLLECTIONS",        value: "KES 4,716,430", sub: "OPEN LEDGER" },
                    { label: "CASH COLLECTIONS",        value: "KES 1,208,200", sub: "OPEN LEDGER" },
                  ].map((card) => (
                    <div key={card.label} className="rounded-lg flex flex-col justify-center px-[6%] overflow-hidden"
                      style={{ background: "rgba(7,15,26,0.97)", border: "1px solid rgba(34,211,238,0.10)" }}>
                      <p style={{ fontSize: "clamp(3px,0.55vw,6px)", color: "rgba(255,255,255,0.42)", letterSpacing: "0.08em" }}
                        className="font-semibold uppercase truncate">{card.label}</p>
                      <p style={{ fontSize: "clamp(6px,1.35vw,16px)", lineHeight: 1.1 }}
                        className="font-extrabold text-white mt-1 truncate">{card.value}</p>
                      <p style={{ fontSize: "clamp(3px,0.45vw,5px)", color: C.c400 }}
                        className="mt-1 font-semibold truncate">{card.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <img src={heroDashboard} alt="Christ Glory Church Dashboard" className="w-full h-auto block" />

              {/* Top glow line */}
              <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${C.c400}70, transparent)` }}/>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -left-6 top-[30%] hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl"
              style={{ background: "rgba(4,25,45,0.95)", borderColor: "rgba(34,211,238,0.20)",
                backdropFilter: "blur(20px)", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.7 }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${C.c500}22` }}>
                <CheckCheck className="w-5 h-5" style={{ color: C.c400 }}/>
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-white">SMS Sent</p>
                <p className="text-[11px]" style={{ color: C.c400 }}>12,000+ monthly</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-5 bottom-[20%] hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl"
              style={{ background: "rgba(4,25,45,0.95)", borderColor: "rgba(34,211,238,0.20)",
                backdropFilter: "blur(20px)", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.7 }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${C.c500}22` }}>
                <TrendingUp className="w-5 h-5" style={{ color: C.c400 }}/>
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-white">This Month</p>
                <p className="text-[11px]" style={{ color: C.c400 }}>KES 5.9M tracked</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   STATS BAR
══════════════════════════════════════════════════════════════ */
const statsData = [
  { icon: CreditCard,  value: 5924630, prefix: "KES ", suffix: "+",  label: "Monthly Tracked",  format: (n:number) => n >= 1000000 ? `KES ${(n/1000000).toFixed(1)}M` : `KES ${n.toLocaleString()}` },
  { icon: BarChart3,   value: 12,      prefix: "",     suffix: "+",   label: "Fund Account Types", format: (n:number) => `${n}+` },
  { icon: MessageSquare,value:12000,   prefix: "",     suffix: "+",   label: "SMS Sent Monthly",  format: (n:number) => `${(n/1000).toFixed(0)}K+` },
  { icon: Users,        value: 25,     prefix: "",     suffix: "+",   label: "Churches Served",   format: (n:number) => `${n}+` },
];

function StatsBar() {
  return (
    <section className="py-0 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8">
          {statsData.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative rounded-2xl p-5 border overflow-hidden group"
              style={{ background: "rgba(255,255,255,0.97)", borderColor: C.ltbd,
                boxShadow: "0 10px 40px rgba(8,145,178,0.10), 0 1px 3px rgba(0,0,0,0.06)" }}>
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${C.c500}, ${C.c400})` }}/>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${C.c400}18` }}>
                <s.icon className="w-4.5 h-4.5" style={{ color: C.c600 }}/>
              </div>
              <p className="text-2xl md:text-3xl font-black" style={{ color: C.c900 }}>
                {s.format(s.value)}
              </p>
              <p className="text-[11px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "rgba(0,0,0,0.45)" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FEATURES — bento-style grid
══════════════════════════════════════════════════════════════ */
const features = [
  { icon: Wallet,        title: "Receive & Track Contributions", desc: "Automated tracking of all church contributions. Every shilling recorded the moment it arrives.", wide: true },
  { icon: PieChart,      title: "Manage Multiple Funds",         desc: "Separate Tithe, Offering, Harambee, and custom funds — each with its own precise ledger.", wide: false },
  { icon: MessageSquare, title: "SMS Confirmations",             desc: "Instant, branded SMS sent to every contributor the moment their gift is received.", wide: false },
  { icon: BarChart3,     title: "Clear Dashboards",              desc: "Beautiful financial dashboards built for leaders — clear at a glance, no accounting degree needed.", wide: false },
  { icon: Globe,         title: "Public Giving Pages",           desc: "Share fund progress publicly so the congregation can track campaigns and goals together.", wide: false },
  { icon: Smartphone,    title: "Mobile Access",                 desc: "Priests and leaders get full financial visibility from their phone, wherever they are.", wide: true },
];

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 border"
            style={{ background: `${C.c500}10`, borderColor: C.ltbd, color: C.c600 }}>
            <Zap size={11} style={{ color: C.c500 }}/> What We Do
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-[2.6rem] font-black leading-tight" style={{ color: C.c900 }}>
            Everything Your Church Needs<br/>
            <span className="text-2xl md:text-3xl font-semibold" style={{ color: "rgba(0,0,0,0.40)" }}>
              in one unified platform
            </span>
          </motion.h2>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`group relative p-7 rounded-2xl border bg-white overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-2xl ${f.wide ? "md:col-span-2" : ""}`}
              style={{ borderColor: C.ltbd }}>
              {/* Hover gradient fill */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `linear-gradient(145deg, ${C.c400}06 0%, ${C.c500}03 100%)` }}/>
              {/* Top gradient line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${C.c500}, transparent)` }}/>

              <div className="relative z-10">
                <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${C.c400}20 0%, ${C.c500}12 100%)`, border: `1.5px solid ${C.ltbd}` }}>
                  <f.icon className="w-6 h-6 transition-colors" style={{ color: C.c600 }}/>
                </div>
                <h3 className="text-[17px] font-bold mb-2 transition-colors" style={{ color: C.c900 }}>
                  {f.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(0,0,0,0.52)" }}>
                  {f.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-bold" style={{ color: C.c600 }}>Learn more</span>
                  <ChevronRight size={13} style={{ color: C.c600 }}/>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   GIVING SECTION
══════════════════════════════════════════════════════════════ */
function GivingSection() {
  const bullets = [
    "Instant categorization of Tithe, Offering, and Harambee",
    "Automated ledger updates with zero manual data entry",
    "Exportable financial statements ready for board meetings",
    "Identify and acknowledge top contributors gracefully",
  ];

  return (
    <section id="giving" className="py-20 overflow-hidden" style={{ background: C.ltbg }}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Dashboard image */}
          <motion.div className="flex-1 relative w-full min-w-0"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>
            <div className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 50%, ${C.c500}14, transparent 70%)`, filter: "blur(20px)" }}/>
            <div className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: C.ltbd, boxShadow: `0 28px 70px ${C.c600}22, 0 0 0 1px ${C.c400}10` }}>
              {/* Sidebar overlay */}
              <div className="absolute top-0 left-0 bottom-0 z-10 flex flex-col overflow-hidden"
                style={{ width: "13.5%", background: "linear-gradient(180deg, #070e1a 0%, #091422 100%)" }}>
                <div className="px-2 pt-2 pb-1 border-b flex items-center gap-1" style={{ borderColor: "rgba(34,211,238,0.10)" }}>
                  <div className="w-4 h-4 rounded-md overflow-hidden flex-shrink-0">
                    <img src={logoPath} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-extrabold truncate" style={{ fontSize: "clamp(3px,0.65vw,7px)", color: C.c400 }}>CHURCH CONSOLE</p>
                </div>
                <div className="px-2 pt-1.5 pb-1.5 border-b" style={{ borderColor: "rgba(34,211,238,0.08)" }}>
                  <p className="font-extrabold text-white" style={{ fontSize: "clamp(4px,0.9vw,10px)" }}>CHRIST GLORY</p>
                  <p className="font-bold mt-0.5" style={{ fontSize: "clamp(3px,0.7vw,8px)", color: C.c400 }}>CHURCH SYSTEM</p>
                </div>
                <div className="flex flex-col gap-px px-1.5 pt-1 overflow-hidden">
                  {["Discipleship","Overview","Fund Accounts","Contributions","Messaging",
                    "Fund Displays","Verses & Announcements","Staff Users","Reports","Presentation"]
                    .map((item, i) => (
                    <div key={item} className="px-1.5 py-0.5 rounded truncate"
                      style={{ fontSize: "clamp(3px,0.55vw,5.5px)", background: i === 1 ? "rgba(34,211,238,0.15)" : "transparent", color: i === 1 ? C.c400 : "rgba(255,255,255,0.3)" }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Stat card overlays */}
              <div className="absolute z-20 pointer-events-none"
                style={{ top: "9%", left: "14%", width: "86%", height: "22%" }}>
                <div className="w-full h-full grid grid-cols-4 gap-[1%] px-[1%]">
                  {[
                    { label: "CONFIRMED CONTRIBUTIONS", value: "5,842",         sub: "OPEN LEDGER" },
                    { label: "TOTAL COLLECTIONS",       value: "KES 5,924,630", sub: "Confirmed" },
                    { label: "BANK COLLECTIONS",        value: "KES 4,716,430", sub: "OPEN LEDGER" },
                    { label: "CASH COLLECTIONS",        value: "KES 1,208,200", sub: "OPEN LEDGER" },
                  ].map((card) => (
                    <div key={card.label} className="rounded-lg flex flex-col justify-center px-[6%] overflow-hidden"
                      style={{ background: "rgba(7,15,26,0.97)", border: "1px solid rgba(34,211,238,0.10)" }}>
                      <p style={{ fontSize: "clamp(3px,0.5vw,6px)", color: "rgba(255,255,255,0.42)", letterSpacing: "0.08em" }} className="font-semibold uppercase truncate">{card.label}</p>
                      <p style={{ fontSize: "clamp(5px,1.2vw,15px)", lineHeight: 1.1 }} className="font-extrabold text-white mt-1 truncate">{card.value}</p>
                      <p style={{ fontSize: "clamp(3px,0.4vw,5px)", color: C.c400 }} className="mt-1 font-semibold truncate">{card.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img src={heroDashboard} alt="Fund Accounting Dashboard" className="w-full h-auto block" />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div className="flex-1 min-w-0"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 border"
              style={{ background: `${C.c600}12`, borderColor: C.ltbd, color: C.c600 }}>
              <Receipt size={12}/> Fund Accounting
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight" style={{ color: C.c900 }}>
              Complete Giving &amp;<br/>Fund Accounting
            </h2>
            <p className="text-[15px] mb-7 leading-relaxed" style={{ color: "rgba(0,0,0,0.58)" }}>
              Every contribution recorded, categorized, and reported with precision.
              Christ Glory System gives you a clean general ledger for every fund —
              so you always know where every shilling goes.
            </p>
            <ul className="space-y-3.5 mb-8">
              {bullets.map((item, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `linear-gradient(135deg, ${C.c500}25 0%, ${C.c400}15 100%)`,
                      border: `1px solid ${C.ltbd}` }}>
                    <CheckCircle2 size={11} style={{ color: C.c600 }}/>
                  </div>
                  <span className="text-sm font-medium leading-snug" style={{ color: "rgba(0,0,0,0.68)" }}>{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button className="rounded-xl font-bold px-7 h-11 group shadow-lg"
              style={{ background: `linear-gradient(135deg, ${C.c600} 0%, ${C.c700} 100%)`, color: "white",
                boxShadow: `0 8px 24px ${C.c600}40` }}>
              Explore Giving Features
              <ChevronRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   MOBILE APP
══════════════════════════════════════════════════════════════ */
function MobileAppSection() {
  const cards = [
    { icon: BellRing,    title: "Real-time alerts",    desc: "Instant notifications for large gifts or target milestones." },
    { icon: ShieldCheck, title: "Fund approvals",      desc: "Securely approve expenditures and public campaign goals." },
    { icon: BookOpen,    title: "Live ledger",         desc: "View the full accounting ledger from your phone at any time." },
    { icon: Users,       title: "Contributor records", desc: "See member giving history and contribution summaries." },
  ];

  return (
    <section id="mobile" className="py-20 relative overflow-hidden"
      style={{ background: `linear-gradient(155deg, ${C.deep} 0%, #04253d 60%, #063d5e 100%)` }}>

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, rgba(34,211,238,0.07) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}/>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.c700}20 0%, transparent 65%)`, filter: "blur(80px)" }}/>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">

          {/* Copy */}
          <motion.div className="flex-1 order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 border"
              style={{ background: "rgba(34,211,238,0.10)", borderColor: "rgba(34,211,238,0.28)", color: C.c400 }}>
              <Smartphone size={11}/> Mobile App
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
              Financial Visibility,<br/>
              <span style={{
                background: `linear-gradient(90deg, ${C.c400} 0%, ${C.c500} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>Wherever You Are.</span>
            </h2>
            <p className="text-[15px] mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.52)" }}>
              Priests and leaders can view fund summaries, track contributions, receive notifications,
              and approve public fund displays directly from their phone.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {cards.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl border transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(34,211,238,0.14)",
                    backdropFilter: "blur(8px)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${C.c400}15` }}>
                    <c.icon className="w-5 h-5" style={{ color: C.c400 }}/>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{c.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone screenshots */}
          <motion.div className="flex-1 order-1 lg:order-2 w-full max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex gap-4 items-start justify-center">

              {/* Analyse phone */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="w-[47%] relative"
                style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.7))" }}>
                {/* Phone frame */}
                <div className="rounded-[2.4rem] overflow-hidden relative"
                  style={{ border: `2.5px solid rgba(34,211,238,0.28)`,
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.06)` }}>
                  <img src={mobileAnalyse} alt="Fund Analysis" className="w-full h-auto block" />
                  {/* Brand overlay */}
                  <div className="absolute left-0 right-0 flex items-center"
                    style={{ top: "7%", height: "8%", background: "#060d16" }}>
                    <span className="pl-[5%] font-extrabold leading-none"
                      style={{ fontSize: "clamp(5px,2.8vw,11px)", color: C.c400 }}>CHRIST GLORY</span>
                    <div className="absolute right-0 top-0 bottom-0 w-[32%]" style={{ background: "#060d16" }}/>
                  </div>
                </div>
              </motion.div>

              {/* Summary phone — offset lower */}
              <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.22 }}
                className="w-[47%] relative mt-12"
                style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.7))" }}>
                <div className="rounded-[2.4rem] overflow-hidden relative"
                  style={{ border: `2.5px solid rgba(34,211,238,0.28)`,
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.06)` }}>
                  <img src={mobileSummary} alt="Giving Summary" className="w-full h-auto block" />
                  <div className="absolute left-0 right-0 flex items-center"
                    style={{ top: "7%", height: "8%", background: "#060d16" }}>
                    <span className="pl-[5%] font-extrabold leading-none"
                      style={{ fontSize: "clamp(5px,2.8vw,11px)", color: C.c400 }}>CHRIST GLORY</span>
                    <div className="absolute right-0 top-0 bottom-0 w-[32%]" style={{ background: "#060d16" }}/>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   REPORTS
══════════════════════════════════════════════════════════════ */
const reportItems = [
  { icon: MessageSquare, title: "Automated SMS",        desc: "Contributors receive an immediate, branded SMS the moment their gift is received. Builds trust instantly." },
  { icon: PieChart,      title: "Financial Statements", desc: "Generate comprehensive income and expenditure reports for board meetings with one click." },
  { icon: TrendingUp,    title: "Fund Progress Pages",  desc: "Share a live public link showing progress toward building funds or special campaigns." },
];

function ReportsSection() {
  return (
    <section id="reports" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 border"
            style={{ background: `${C.c500}10`, borderColor: C.ltbd, color: C.c600 }}>
            <ShieldCheck size={11} style={{ color: C.c500 }}/> Accountability
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-[2.6rem] font-black leading-tight" style={{ color: C.c900 }}>
            Transparency at Every Level
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reportItems.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative text-center p-9 rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{ borderColor: C.ltbd, background: "white" }}>
              {/* Gradient bg on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `linear-gradient(145deg, ${C.ltbg} 0%, white 100%)` }}/>
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${["#22d3ee","#06b6d4","#0891b2"][i]}, ${["#06b6d4","#0891b2","#0e7490"][i]})` }}/>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${C.c400}18 0%, ${C.c500}10 100%)`,
                    border: `1.5px solid ${C.ltbd}` }}>
                  <item.icon className="w-8 h-8" style={{ color: C.c600 }}/>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: C.c900 }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(0,0,0,0.54)" }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   TESTIMONIAL
══════════════════════════════════════════════════════════════ */
function TestimonialSection() {
  return (
    <section className="py-20 relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${C.ltbg} 0%, white 100%)` }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, ${C.c400}08 1.5px, transparent 1.5px)`, backgroundSize: "36px 36px" }}/>

      <div className="max-w-4xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-10 md:p-14 border text-center overflow-hidden"
          style={{ background: "white", borderColor: C.ltbd,
            boxShadow: `0 30px 80px ${C.c600}12, 0 0 0 1px ${C.c400}10` }}>
          {/* Decorative quote */}
          <div className="absolute top-6 left-8 text-[120px] leading-none font-black select-none pointer-events-none"
            style={{ color: `${C.c400}12`, fontFamily: "Georgia, serif" }}>"</div>
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: C.gold }}/>
            ))}
          </div>
          <blockquote className="text-xl md:text-[1.55rem] font-semibold mb-8 leading-relaxed relative z-10"
            style={{ color: C.c900 }}>
            "Since moving to Christ Glory System, our financial reporting takes minutes instead of days.
            The congregation loves the SMS confirmations, and our leadership team finally has
            complete visibility."
          </blockquote>
          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-lg"
              style={{ background: `linear-gradient(135deg, ${C.c600} 0%, ${C.c900} 100%)` }}>S</div>
            <div className="text-left">
              <p className="font-bold text-base" style={{ color: C.c900 }}>Rev. Samuel M.</p>
              <p className="text-sm" style={{ color: "rgba(0,0,0,0.48)" }}>Senior Pastor, Grace Cathedral</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   CTA
══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: `linear-gradient(155deg, ${C.deep} 0%, ${C.mid} 60%, #054d75 100%)` }}>
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, rgba(34,211,238,0.08) 1px, transparent 1px)`, backgroundSize: "30px 30px" }}/>
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.c400}16 0%, transparent 65%)`, filter: "blur(70px)" }}/>

      <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-7 border"
          style={{ background: "rgba(34,211,238,0.10)", borderColor: "rgba(34,211,238,0.28)", color: C.c400 }}>
          <Zap size={11}/> Get started today — it's free
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
          Ready to Bring Clarity to<br/>Your Church Finances?
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }} className="text-[16px] mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.52)" }}>
          Join 25+ churches managing their funds with confidence and full accountability.
          No setup fee. No commitment.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.18 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="h-14 px-10 text-base font-extrabold rounded-xl shadow-2xl group"
            style={{ background: `linear-gradient(135deg, ${C.c400} 0%, ${C.c500} 100%)`, color: C.dark,
              boxShadow: `0 16px 50px ${C.c500}55` }}>
            Request a Free Demo
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"/>
          </Button>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
            Avg. setup time: under 30 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FOOTER — multi-column
══════════════════════════════════════════════════════════════ */
function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Features", "Giving & Funds", "Mobile App", "Reports", "Pricing"],
    },
    {
      title: "Company",
      links: ["About Us", "Blog", "Careers", "Press", "Contact"],
    },
    {
      title: "Support",
      links: ["Documentation", "Help Centre", "Privacy Policy", "Terms of Service", "Status"],
    },
  ];

  return (
    <footer style={{ background: C.deep }}>
      <div className="max-w-7xl mx-auto px-5">
        {/* Main footer row */}
        <div className="py-14 grid md:grid-cols-4 gap-10 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl overflow-hidden" style={{ border: `1.5px solid ${C.c400}30` }}>
                <img src={logoPath} alt="Christ Glory" className="w-full h-full object-cover mix-blend-luminosity"/>
              </div>
              <div>
                <p className="font-black text-sm tracking-wide text-white">CHRIST GLORY</p>
                <p className="text-[9px] tracking-widest uppercase" style={{ color: C.c400 }}>Church System</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.40)" }}>
              Built for modern churches in East Africa. Bringing transparency, accountability, and simplicity to church finances.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {([["Facebook", Facebook], ["Twitter", Twitter], ["YouTube", Youtube]] as const).map(([label, Icon], i) => (
                <button key={i} className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)" }}
                  aria-label={`Follow us on ${label}`}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${C.c400}20`; (e.currentTarget as HTMLElement).style.color = C.c400; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}>
                  <Icon size={16}/>
                </button>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="font-bold text-sm mb-5 tracking-wide" style={{ color: "rgba(255,255,255,0.75)" }}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.c400)}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {[
              { icon: Mail,    text: "hello@christglory.co.ke" },
              { icon: Phone,   text: "+254 700 000 000" },
              { icon: MapPin,  text: "Nairobi, Kenya" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
                <Icon size={13} style={{ color: C.c600 }}/> {text}
              </div>
            ))}
          </div>
          <div className="text-xs font-semibold tracking-wide" style={{ color: C.c400 }}>
            Built for churches. Trusted for growth.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.28)" }}>
          <p>&copy; {new Date().getFullYear()} Christ Glory Church System. All rights reserved.</p>
          <p>Made with ❤️ in East Africa</p>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <GivingSection />
        <MobileAppSection />
        <ReportsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
