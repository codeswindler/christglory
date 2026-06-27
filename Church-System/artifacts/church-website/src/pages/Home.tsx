import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  BellRing,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  PieChart,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import logoPath from "@assets/VENTURES_edited.jpg_1782387721615.jpeg";
import laptopDashboard from "@assets/christ-glory-laptop-dashboard.png";
import tabletDashboard from "@assets/christ-glory-tablet-dashboard.png";
import mobileLifestyle from "@assets/christ-glory-mobile-lifestyle.png";
import mobileSummary from "@assets/christ-glory-mobile-summary.png";

const C = {
  dark: "#030e1b",
  mid: "#04253d",
  deep: "#02111f",
  c400: "#22d3ee",
  c500: "#06b6d4",
  c600: "#0891b2",
  c700: "#0e7490",
  c900: "#164e63",
  ltbg: "#ecfeff",
  ltbd: "#a5f3fc",
  gold: "#fbbf24",
} as const;

const PHONE_LINK = "tel:+254724075174";
const EMAIL_LINK = "mailto:hello@christglory.co.ke?subject=Christ%20Glory%20Church%20System%20Demo";
const PLATFORM_URL = "https://church.christglory.co.ke";
const WHATSAPP_URL =
  "https://wa.me/254724075174?text=Hello%20Christ%20Glory%2C%20I%20would%20like%20a%20demo%20of%20the%20church%20system.";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const navItems = [
  ["Explore", "#explore"],
  ["Accounting", "#giving"],
  ["Communication", "#communication"],
  ["Discipleship", "#discipleship"],
  ["Mobile App", "#mobile"],
  ["Reports", "#reports"],
] as const;

function WhatsAppMark({
  size,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.49-8.41ZM12.06 21.8h-.01a9.89 9.89 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.89 7c0 5.45-4.44 9.89-9.88 9.89Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function WhatsAppButton({
  children,
  className = "",
  variant,
  size,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  style?: React.CSSProperties;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className} style={style}>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  );
}

function WhatsAppIconLink({
  className = "",
  ariaLabel = "Chat on WhatsApp",
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  ariaLabel?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_34px_rgba(37,211,102,0.42)] transition-shadow hover:shadow-[0_14px_42px_rgba(37,211,102,0.58)] ${className}`}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppMark className="h-[52%] w-[52%]" />
    </motion.a>
  );
}

function FloatingWhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="hidden rounded-xl border bg-white px-4 py-2 text-sm font-bold shadow-xl sm:block"
            style={{ borderColor: C.ltbd, color: C.c900 }}
          >
            Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full bg-[#25D366]"
            initial={{ opacity: 0.45, scale: 1 }}
            animate={{ opacity: 0, scale: 2.2 }}
            transition={{ duration: 1.4, delay: 0.45 + i * 0.45, ease: "easeOut", repeat: 0 }}
          />
        ))}
        <WhatsAppIconLink
          ariaLabel="Chat on WhatsApp"
          className="relative h-14 w-14"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>
    </div>
  );
}

function SectionBadge({
  icon: Icon,
  children,
  dark = false,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold"
      style={{
        background: dark ? "rgba(34,211,238,0.10)" : `${C.c500}10`,
        borderColor: dark ? "rgba(34,211,238,0.28)" : C.ltbd,
        color: dark ? C.c400 : C.c600,
      }}
    >
      <Icon size={12} />
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/96 py-2 shadow-xl shadow-black/[0.06] backdrop-blur-2xl" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl"
            whileHover={{ scale: 1.06, rotate: 3 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <img src={logoPath} alt="Christ Glory" className="h-full w-full object-cover" />
          </motion.div>
          <div className="leading-none">
            <span className="block text-[17px] font-black tracking-tight" style={{ color: scrolled ? C.c900 : "#ffffff" }}>
              CHRIST GLORY
            </span>
            <span
              className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.25em]"
              style={{ color: scrolled ? C.c600 : C.c400 }}
            >
              Church System
            </span>
          </div>
        </Link>

        <div className="site-desktop-nav hidden items-center gap-5 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group relative text-sm font-semibold transition-all duration-200"
              style={{ color: scrolled ? C.c900 : "rgba(255,255,255,0.72)" }}
            >
              {label}
              <span
                className="absolute -bottom-0.5 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-full transition-transform group-hover:scale-x-100"
                style={{ background: C.c500 }}
              />
            </a>
          ))}
        </div>

        <button
          className="site-mobile-menu-button rounded-xl p-2.5 transition-all lg:hidden"
          style={{ background: "rgba(34,211,238,0.12)", color: C.c400 }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="site-mobile-panel overflow-hidden border-t bg-white lg:hidden"
            style={{ borderColor: C.ltbd }}
          >
            <div className="flex flex-col gap-3 px-5 py-4">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-1 text-base font-semibold"
                  style={{ color: C.c900 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.c500 }} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function DashboardFrame({ compact = false }: { compact?: boolean }) {
  const image = compact ? tabletDashboard : laptopDashboard;
  const alt = compact ? "Christ Glory dashboard on a tablet" : "Christ Glory finance dashboard on a laptop";

  return (
    <div
      className="relative overflow-hidden rounded-2xl border"
      style={{
        borderColor: "rgba(34,211,238,0.22)",
        boxShadow: compact
          ? `0 20px 70px rgba(8,145,178,0.16), 0 0 0 1px rgba(34,211,238,0.10)`
            : `0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(34,211,238,0.10), inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}
    >
      <img src={image} alt={alt} className="block h-auto w-full" />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="tablet-landscape-hero-section relative flex min-h-screen items-center overflow-hidden pb-12 pt-24"
      style={{ background: `linear-gradient(160deg, ${C.deep} 0%, #04253d 58%, #053756 100%)` }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(34,211,238,0.10) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5">
        <div className="tablet-landscape-hero-grid flex flex-col items-center gap-12 lg:flex-row lg:gap-10">
          <motion.div className="tablet-landscape-hero-copy flex-1 text-center lg:text-left" initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="tablet-landscape-hero-badge mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold"
              style={{ background: "rgba(34,211,238,0.10)", borderColor: "rgba(34,211,238,0.30)", color: C.c400 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: C.c400 }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: C.c400 }} />
              </span>
              Built for churches that value clarity and growth
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="tablet-landscape-hero-title mb-6 text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.55rem] xl:text-[4.05rem]"
            >
              A Church System
              <br />
              Made{" "}
              <span className="relative inline-block">
                <span
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${C.c400} 0%, ${C.c500} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Simpler
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                  <path d="M0 3 Q50 0 100 3" stroke={C.c400} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              ,
              <br />
              Clearer & More
              <br />
              Connected.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="tablet-landscape-hero-text mx-auto mb-8 max-w-xl text-base leading-[1.75] lg:mx-0 md:text-[17px]"
              style={{ color: "rgba(255,255,255,0.76)" }}
            >
              Help your church communicate better, account for every contribution, follow up disciples, prepare
              reports faster, and give leaders mobile visibility wherever they are.
            </motion.p>

            <motion.div variants={fadeUp} className="tablet-landscape-hero-cta mb-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-xl px-8 text-base font-semibold"
                style={{ borderColor: "rgba(255,255,255,0.18)", color: "white", background: "rgba(255,255,255,0.05)" }}
              >
                <a href="#explore">
                  Explore the System
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="tablet-landscape-hero-stats grid grid-cols-3 gap-3 text-left sm:max-w-xl">
              {[
                ["25+", "churches ready"],
                ["SMS", "instant updates"],
                ["Mobile", "leader access"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border px-4 py-3" style={{ borderColor: "rgba(34,211,238,0.18)", background: "rgba(255,255,255,0.04)" }}>
                  <p className="text-lg font-black text-white">{value}</p>
                  <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.72)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="tablet-landscape-hero-media relative mx-auto w-full max-w-2xl flex-1 lg:max-w-none"
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: MessageSquare,
    title: "Communication That Builds Trust",
    desc: "Keep members informed with clear SMS updates, giving confirmations, reminders, and announcements from one place.",
  },
  {
    icon: Wallet,
    title: "Cleaner Church Accounting",
    desc: "Get Tithe, Offering, Harambee, projects, and other funds organized so you can see where money came from and where it belongs.",
  },
  {
    icon: BookOpen,
    title: "Fellowship Impact & Progress",
    desc: "See fellowship participation, discipleship progress, pastoral care needs, and where people are growing.",
  },
  {
    icon: FileText,
    title: "Priest-Ready Reports",
    desc: "Get contribution summaries, fund balances, and financial statements ready for service planning and ministry review.",
  },
  {
    icon: BellRing,
    title: "Giving Confidence in Real Time",
    desc: "Members receive confirmation when they give while you see church support, fund movement, and contribution activity clearly.",
  },
  {
    icon: Smartphone,
    title: "Mobile Visibility Anywhere",
    desc: "Get fund summaries, reports, and contribution activity from your phone when service decisions need clarity.",
  },
] as const;

function Features() {
  return (
    <section id="explore" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionBadge icon={Zap}>Explore</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-black leading-tight md:text-[2.7rem]"
            style={{ color: C.c900 }}
          >
            More order, better communication, stronger accountability.
          </motion.h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#111827" }}>
            Christ Glory helps church teams spend less time chasing records and more time serving people.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-13 rounded-xl px-8 text-base font-extrabold shadow-xl"
            style={{ background: `linear-gradient(135deg, ${C.c500}, ${C.c700})`, color: "white", boxShadow: `0 14px 42px ${C.c500}30` } as React.CSSProperties}
          >
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer">
              Enter the Church Console
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border p-7"
              style={{ borderColor: C.ltbd, background: i % 2 === 0 ? C.ltbg : "white" }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border" style={{ background: "white", borderColor: C.ltbd }}>
                <f.icon className="h-7 w-7" style={{ color: C.c600 }} />
              </div>
              <h3 className="mb-3 text-xl font-black" style={{ color: C.c900 }}>
                {f.title}
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#111827" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const communicationItems = [
  {
    title: "Instant SMS receipts",
    desc: "Every giver can receive a confirmation message, which builds trust and reduces follow-up calls.",
  },
  {
    title: "Member announcements",
    desc: "Share service updates, member reminders, campaign progress, and urgent notices from one church system.",
  },
  {
    title: "Pastoral follow-up",
    desc: "Spot people who need attention, reconnect with absent members, and support discipleship with better records.",
  },
  {
    title: "Leadership visibility",
    desc: "Keep your pastoral, finance, and ministry teams aligned with the same current information.",
  },
] as const;

function CommunicationSection() {
  return (
    <section id="communication" className="py-20" style={{ background: `linear-gradient(180deg, ${C.ltbg} 0%, white 100%)` }}>
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionBadge icon={MessageSquare}>Communication</SectionBadge>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl" style={{ color: C.c900 }}>
              Keep members informed and leaders aligned.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "#111827" }}>
              Communication is part of stewardship. Christ Glory helps your church send confirmations, updates,
              reminders, and follow-up messages with a clear record of what happened.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                className="rounded-xl px-7 font-bold"
                style={{ background: `linear-gradient(135deg, ${C.c500}, ${C.c700})`, color: "white" } as React.CSSProperties}
              >
                <WhatsAppMark className="h-4 w-4 text-[#25D366]" />
                Ask about communication
              </WhatsAppButton>
              <Button asChild variant="outline" className="rounded-xl px-7 font-bold" style={{ color: C.c900 }}>
                <a href={PHONE_LINK}>
                  <Phone className="h-4 w-4" />
                  Contact us
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {communicationItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border bg-white p-6"
                style={{ borderColor: C.ltbd, boxShadow: `0 18px 55px ${C.c600}10` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${C.c400}18` }}>
                  <MessageSquare className="h-5 w-5" style={{ color: C.c600 }} />
                </div>
                <h3 className="text-lg font-black" style={{ color: C.c900 }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#111827" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GivingSection() {
  const points = [
    "Every contribution goes into the right fund account",
    "Tithe, Offering, Harambee, projects, and special funds stay separated",
    "Finance teams can review totals without manual spreadsheet stress",
    "Members receive confirmations that strengthen trust",
  ];

  return (
    <section id="giving" className="py-20" style={{ background: C.ltbg }}>
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <DashboardFrame compact />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionBadge icon={Wallet}>Accounting</SectionBadge>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl" style={{ color: C.c900 }}>
              Every contribution clear, traceable, and accountable.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "#111827" }}>
              Give your finance team a cleaner way to record giving, separate fund accounts, review balances,
              and explain church finances with confidence.
            </p>
            <div className="mt-7 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full" style={{ background: `${C.c400}18` }}>
                    <CheckCircle2 className="h-4 w-4" style={{ color: C.c600 }} />
                  </div>
                  <p className="text-[15px] font-semibold" style={{ color: "#111827" }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const discipleshipItems = [
  {
    icon: Users,
    title: "See fellowship participation",
    desc: "See who is connected to fellowships, who is missing, and which groups need more pastoral care.",
  },
  {
    icon: BookOpen,
    title: "Track discipleship progress",
    desc: "Get classes, pastoral notes, group movement, service involvement, and growth milestones in one view.",
  },
  {
    icon: BellRing,
    title: "Measure fellowship impact",
    desc: "See which fellowships are active, where people are growing, and where follow-up will matter most.",
  },
] as const;

function DiscipleshipSection() {
  return (
    <section id="discipleship" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionBadge icon={BookOpen}>Discipleship</SectionBadge>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl" style={{ color: C.c900 }}>
              See fellowship impact and spiritual progress clearly.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "#111827" }}>
              Christ Glory helps you understand how fellowships are shaping people, who is progressing,
              who needs attention, and where ministry care should be focused next.
            </p>
          </motion.div>

          <div className="space-y-4">
            {discipleshipItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 rounded-2xl border p-6"
                style={{ borderColor: C.ltbd, background: i === 1 ? C.ltbg : "white" }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: `${C.c400}18` }}>
                  <item.icon className="h-5 w-5" style={{ color: C.c600 }} />
                </div>
                <div>
                  <h3 className="font-black" style={{ color: C.c900 }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#111827" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAppSection() {
  const mobileCards = [
    { icon: BellRing, title: "Live alerts", desc: "Leaders can notice giving activity and important updates quickly." },
    { icon: PieChart, title: "Fund summaries", desc: "View balances and fund movement without waiting for a desktop report." },
    { icon: FileText, title: "Ledger access", desc: "Search transactions, filter records, and review contribution history from the phone." },
    { icon: ShieldCheck, title: "Leader oversight", desc: "Stay informed from mobile while finance teams keep control of records." },
  ] as const;

  return (
    <section
      id="mobile"
      className="relative overflow-hidden py-20"
      style={{ background: `linear-gradient(160deg, ${C.deep} 0%, ${C.mid} 65%, #063a58 100%)` }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(34,211,238,0.08) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
            <SectionBadge icon={Smartphone} dark>
              Mobile App
            </SectionBadge>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Leadership visibility,{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${C.c400} 0%, ${C.c500} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                wherever ministry happens.
              </span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              Get a clean mobile view of fund summaries, giving trends,
              ledger activity, and important updates without waiting for office reports.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {mobileCards.map((item) => (
                <div key={item.title} className="rounded-2xl border p-5" style={{ borderColor: "rgba(34,211,238,0.16)", background: "rgba(255,255,255,0.04)" }}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(34,211,238,0.10)" }}>
                    <item.icon className="h-5 w-5" style={{ color: C.c400 }} />
                  </div>
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-1 lg:order-2">
            <div className="grid items-end gap-4 sm:grid-cols-[1fr_0.45fr]">
              {[
                { src: mobileLifestyle, alt: "Christ Glory mobile app showing fund analysis on a phone", className: "" },
                { src: mobileSummary, alt: "Christ Glory mobile app giving summary screen", className: "mx-auto w-[58%] max-w-[210px] sm:w-full sm:max-w-none" },
              ].map((item, i) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, y: i ? 36 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={item.className}
                  style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.7))" }}
                >
                  <div className={`relative overflow-hidden ${i ? "rounded-[2.2rem]" : "rounded-2xl"}`} style={{ border: `2.5px solid rgba(34,211,238,0.28)` }}>
                    <img src={item.src} alt={item.alt} className="block h-auto w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const workflow = [
  { icon: Wallet, title: "Receive and record", desc: "Get giving recorded clearly under the right fund so the numbers are ready when you need them." },
  { icon: MessageSquare, title: "Confirm and update", desc: "Keep members informed with clear communication, receipts, reminders, and announcements." },
  { icon: BookOpen, title: "See fellowship progress", desc: "Understand fellowship impact, discipleship movement, and where pastoral care is needed." },
  { icon: FileText, title: "Get priest-ready reports", desc: "Review summaries, statements, and fund movement before service planning or stewardship reviews." },
  { icon: Smartphone, title: "Lead from mobile", desc: "Check the church position from your phone when decisions come up." },
] as const;

function WorkflowSection() {
  return (
    <section id="workflow" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionBadge icon={TrendingUp}>How you benefit</SectionBadge>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl" style={{ color: C.c900 }}>
            Less confusion during the week. More confidence before service.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-5">
          {workflow.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl border p-6"
              style={{ borderColor: C.ltbd, background: i % 2 ? "white" : C.ltbg }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white" style={{ border: `1px solid ${C.ltbd}` }}>
                  <step.icon className="h-5 w-5" style={{ color: C.c600 }} />
                </div>
                <span className="text-xs font-black" style={{ color: C.c500 }}>
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-black" style={{ color: C.c900 }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#111827" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reportItems = [
  { icon: MessageSquare, title: "Automated SMS", desc: "Get immediate branded confirmations sent to contributors after giving." },
  { icon: PieChart, title: "Priest-ready statements", desc: "Review income, expenditure, balances, and fund movement before service planning or stewardship reviews." },
  { icon: Globe, title: "Public Fund Pages", desc: "Share progress links for building funds, projects, and campaigns when the church needs visibility." },
] as const;

function ReportsSection() {
  return (
    <section id="reports" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <SectionBadge icon={ShieldCheck}>Accountability</SectionBadge>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-[2.6rem]" style={{ color: C.c900 }}>
            Transparency at every level.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reportItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border p-9 text-center"
              style={{ borderColor: C.ltbd, background: "white" }}
            >
              <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${C.c400}, ${C.c700})` }} />
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: `${C.c400}18`, border: `1.5px solid ${C.ltbd}` }}>
                <item.icon className="h-8 w-8" style={{ color: C.c600 }} />
              </div>
              <h3 className="mb-3 text-lg font-bold" style={{ color: C.c900 }}>
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#111827" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const gains = [
    "See every contribution under the right fund with a clear trail.",
    "Keep members updated through confirmations, reminders, and service communication.",
    "Understand fellowship participation, discipleship progress, and where pastoral care is needed.",
    "Open reports and mobile summaries when you need decisions to be clear.",
  ] as const;

  return (
    <section id="benefits" className="py-20" style={{ background: C.ltbg }}>
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionBadge icon={BookOpen}>Why Christ Glory</SectionBadge>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl" style={{ color: C.c900 }}>
            One system for clearer church leadership.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#111827" }}>
            Christ Glory brings accounting, communication, discipleship progress, reports, and mobile visibility
            into one place so you can lead with facts, respond faster, and keep the church moving with confidence.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl gap-8 rounded-2xl border bg-white p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10"
          style={{ borderColor: C.ltbd, boxShadow: `0 26px 70px ${C.c600}18` }}
        >
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em]" style={{ color: C.c600 }}>
              From contribution to care
            </p>
            <h3 className="text-2xl font-black leading-tight md:text-4xl" style={{ color: C.c900 }}>
              Know what is happening, where support is growing, and what needs attention next.
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#111827" }}>
              Instead of chasing figures across books, phone messages, and spreadsheets, you get one clear view
              of giving, communication, fellowships, discipleship movement, and priest-ready reports.
            </p>
            <Button
              asChild
              className="mt-8 h-13 w-fit rounded-xl px-7 font-extrabold"
              style={{ background: `linear-gradient(135deg, ${C.c400}, ${C.c600})`, color: C.dark }}
            >
              <a href={PLATFORM_URL} target="_blank" rel="noreferrer">
                Enter the Church Console
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-3">
            {gains.map((gain) => (
              <div key={gain} className="flex gap-3 rounded-xl border p-4" style={{ borderColor: C.ltbd, background: C.ltbg }}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: C.c600 }} />
                <p className="text-sm font-semibold leading-relaxed" style={{ color: "#111827" }}>
                  {gain}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    ["Will it help you communicate better?", "Yes. You can use SMS confirmations, announcements, reminders, and follow-up communication to keep members informed."],
    ["Can you separate different church funds?", "Yes. Tithe, Offering, Harambee, projects, campaigns, and custom funds can stay organized with their own records."],
    ["Can you get reports quickly?", "Yes. You can review summaries, contribution records, and fund reports without waiting for manual compilation."],
    ["Can you use it on mobile?", "Yes. The mobile app gives you a clean view of summaries, ledgers, trends, and important activity."],
  ] as const;

  return (
    <section id="questions" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <SectionBadge icon={MessageSquare}>Frequent enquiries</SectionBadge>
          <h2 className="mt-4 text-3xl font-black md:text-5xl" style={{ color: C.c900 }}>
            What your church gains.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-2xl border p-6" style={{ borderColor: C.ltbd, background: C.ltbg }}>
              <h3 className="font-black" style={{ color: C.c900 }}>
                {q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#111827" }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: `linear-gradient(155deg, ${C.deep} 0%, ${C.mid} 60%, #054d75 100%)` }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(34,211,238,0.08) 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
          Ready to strengthen communication, accounting, and reports?
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.74)" }}>
          Send a WhatsApp message and we will show how Christ Glory can help your church account better,
          communicate faster, follow up disciples, and keep leaders informed from mobile.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton
            size="lg"
            className="h-14 rounded-xl px-10 text-base font-extrabold shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${C.c400} 0%, ${C.c500} 100%)`, color: C.dark, boxShadow: `0 16px 50px ${C.c500}55` } as React.CSSProperties}
          >
            <WhatsAppMark className="h-5 w-5 text-[#25D366]" />
            Chat on WhatsApp
            <ArrowRight className="h-5 w-5" />
          </WhatsAppButton>
          <Button asChild variant="outline" className="h-14 rounded-xl px-7 font-bold" style={{ borderColor: "rgba(255,255,255,0.18)", color: "white", background: "rgba(255,255,255,0.04)" }}>
            <a href={PHONE_LINK}>
              <Phone className="h-4 w-4" />
              Contact us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: "Product",
      links: [
        ["Explore", "#explore"],
        ["Communication", "#communication"],
        ["Discipleship", "#discipleship"],
        ["Giving & Funds", "#giving"],
        ["Mobile App", "#mobile"],
        ["Reports", "#reports"],
      ],
    },
    {
      title: "Contact",
      links: [
        ["Benefits", "#benefits"],
        ["Frequent Enquiries", "#questions"],
        ["WhatsApp", WHATSAPP_URL],
        ["Contact Us", PHONE_LINK],
        ["Email Our Team", EMAIL_LINK],
      ],
    },
  ] as const;

  return (
    <footer style={{ background: C.deep }}>
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 border-b py-14 md:grid-cols-[1.2fr_1fr_1fr]" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-2xl" style={{ border: `1.5px solid ${C.c400}30` }}>
                <img src={logoPath} alt="Christ Glory" className="h-full w-full object-cover mix-blend-luminosity" />
              </div>
              <div>
                <p className="text-sm font-black tracking-wide text-white">CHRIST GLORY</p>
                <p className="text-[9px] uppercase tracking-widest" style={{ color: C.c400 }}>
                  Church System
                </p>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
              A church system for cleaner accounting, stronger communication, discipleship follow-up, reports,
              and mobile leadership visibility.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold" style={{ background: `${C.c400}18`, color: C.c400 }}>
                <WhatsAppMark className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </a>
              <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.72)" }}>
                <Phone className="h-4 w-4" />
                Contact us
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-sm font-bold tracking-wide" style={{ color: "rgba(255,255,255,0.76)" }}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("https://wa.me") ? "_blank" : undefined}
                      rel={href.startsWith("https://wa.me") ? "noreferrer" : undefined}
                      className="text-sm transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.66)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-b py-6 md:flex-row" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex flex-wrap justify-center gap-6 md:justify-start">
            {[
              { icon: Mail, text: "Email our team", href: EMAIL_LINK },
              { icon: Phone, text: "Contact us", href: PHONE_LINK },
              { icon: MapPin, text: "Christ Glory", href: "#top" },
            ].map(({ icon: Icon, text, href }) => (
              <a key={text} href={href} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.66)" }}>
                <Icon size={13} style={{ color: C.c600 }} />
                {text}
              </a>
            ))}
          </div>
          <div className="text-xs font-semibold tracking-wide" style={{ color: C.c400 }}>
            Built for churches. Trusted for growth.
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-5 text-xs md:flex-row" style={{ color: "rgba(255,255,255,0.58)" }}>
          <p>&copy; {new Date().getFullYear()} Christ Glory Church System. All rights reserved.</p>
          <p>Made in East Africa</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CommunicationSection />
        <GivingSection />
        <DiscipleshipSection />
        <MobileAppSection />
        <WorkflowSection />
        <ReportsSection />
        <BenefitsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
