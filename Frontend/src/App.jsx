import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./App.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Guide", href: "#guide" },
  { label: "Privacy", href: "#privacy" },
  { label: "Github", href: "https://github.com", external: true },
];

const howItWorks = [
  {
    title: "Download Instagram Data",
    description: "Request your account archive from Instagram settings.",
    icon: "⬇",
  },
  {
    title: "Upload JSON Files",
    description: "Drop followers_1.json and following.json into the analyzer.",
    icon: "⤴",
  },
  {
    title: "View Your Analysis",
    description:
      "See who follows back, who does not, and your mutual audience.",
    icon: "◌",
  },
];

const timelineSteps = [
  "Open Instagram.",
  "Go to Profile.",
  "Tap ☰",
  "Accounts Center.",
  "Your Information and Permissions.",
  "Download Your Information.",
  "Download or Transfer Information.",
  "Choose Some of Your Information.",
  "Followers and Following.",
  "Download to Device.",
  "Choose JSON instead of HTML.",
  "Submit Request.",
  "Instagram will send a download link within a few minutes or hours.",
  "Extract the ZIP file.",
  "Locate followers_1.json and following.json",
  "Return to this website and click Analyze.",
];

const privacyFeatures = [
  "No Login",
  "No Password",
  "No Server Upload",
  "100% Browser Processing",
];

const stats = [
  { label: "Followers", value: "18.4K" },
  { label: "Following", value: "1.2K" },
  { label: "Mutual", value: "874" },
  { label: "Not Following Back", value: "326" },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-gradient absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(225,48,108,0.26),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(67,97,238,0.20),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(131,58,180,0.18),_transparent_35%)]" />
        <div className="floating-orb left-[8%] top-[18%]" />
        <div className="floating-orb right-[10%] top-[32%] delay-1000" />
        <div className="floating-orb bottom-[15%] left-[42%] delay-2000" />
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/35 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(225,48,108,0.15)] backdrop-blur-xl">
              <img
                src="/src/assets/logoNew.avif"
                alt="InstaFollow Analyzer logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-white/70">
                INSTAFOLLOW
              </p>
              <p className="text-base font-medium text-white">Analyzer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Link
            to="/upload"
            className="rounded-full border border-white/10 bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(225,48,108,0.35)] transition-transform hover:scale-[1.03]"
          >
            Analyze
          </Link>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16"
        >
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#E1306C] shadow-[0_0_16px_rgba(225,48,108,0.8)]" />
                Secure browser-only analysis
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Find Out Who Doesn't Follow You Back
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                Analyze your Instagram Followers & Following JSON files securely
                in your browser.
                <br />
                No Login Required. No Password Needed. 100% Private.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/upload"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_60px_rgba(225,48,108,0.35)] transition hover:scale-[1.02]"
                >
                  Get Started
                </Link>
                <a
                  href="#privacy"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  "Private processing",
                  "No account access",
                  "Instant insights",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="relative mx-auto w-full max-w-2xl"
            >
              <div className="hero-glow absolute -inset-10 -z-10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:p-7">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(225,48,108,0.18),transparent_28%,rgba(67,97,238,0.12),transparent_70%)]" />
                <div className="relative rounded-[1.6rem] border border-white/10 bg-[#101010]/85 p-5 lg:p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-white/50">
                        Instagram Analytics
                      </p>
                      <p className="text-xl font-semibold text-white">
                        @insta_follow
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#E1306C]" />
                      <span className="h-3 w-3 rounded-full bg-[#833AB4]" />
                      <span className="h-3 w-3 rounded-full bg-[#405DE6]" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                    <div className="rounded-[1.4rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#405DE6] text-2xl font-black shadow-[0_15px_40px_rgba(225,48,108,0.35)]">
                          IG
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-white/50">
                            Profile Overview
                          </p>
                          <p className="text-2xl font-semibold text-white">
                            Premium Audit
                          </p>
                          <p className="mt-1 text-sm text-white/60">
                            Live-style preview of your account data.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.08 }}
                            className="rounded-2xl border border-white/10 bg-black/35 p-5"
                          >
                            <p className="text-[10px] uppercase tracking-wider leading-tight text-white/45 text-center">
                              {stat.label}
                            </p>
                            <p className="mt-1 text-1xl font-semibold text-white">
                              {stat.value}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 self-stretch">
                      {[
                        "Followers",
                        "Following",
                        "Mutual",
                        "Not Following Back",
                      ].map((label, index) => (
                        <motion.div
                          key={label}
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 4.5 + index * 0.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-24 rounded-2xl border border-white/10 bg-white/6 p-3 text-center backdrop-blur-xl"
                        >
                          <p className="text-sm text-white/55">{label}</p>
                          <p className="mt-2 text-2xl font-semibold text-white">
                            {stats.find((item) => item.label === label)?.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="guide"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E1306C]">
                How It Works
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Simple, premium, and built for speed.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {howItWorks.map((item, index) => (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(225,48,108,0.14),transparent_35%,rgba(131,58,180,0.12),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-2xl text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                      {item.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,48,108,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(67,97,238,0.12),transparent_30%)]" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E1306C]">
                Main Guide
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                How to Download Instagram Followers & Following Files
              </h2>
              <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
                Follow these steps to export your Instagram data as JSON. This
                is the fastest path to a precise, browser-only analysis.
              </p>
            </div>

            <div className="relative mt-10 pl-2 sm:pl-4">
              <div className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-[#E1306C] via-[#833AB4] to-[#405DE6] sm:left-[18px]" />
              <div className="space-y-4">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    className="relative flex gap-4 rounded-[1.5rem] border border-white/10 bg-black/30 p-4 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-5"
                  >
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#E1306C] to-[#405DE6] text-sm font-bold text-white shadow-[0_0_24px_rgba(225,48,108,0.25)] sm:h-10 sm:w-10">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-base leading-7 text-white sm:text-lg">
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="privacy"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]"
          >
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 -z-10 rounded-full bg-[#405DE6]/20 blur-3xl" />
              <div className="mx-auto flex h-[420px] max-w-md items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
                <div className="relative h-52 w-52 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] shadow-[0_0_80px_rgba(64,93,230,0.18)]">
                  <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-black/35" />
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#E1306C]" />
                  <div className="absolute left-1/2 top-[46%] h-14 w-14 -translate-x-1/2 rounded-full bg-[#E1306C] shadow-[0_0_30px_rgba(225,48,108,0.35)]" />
                  <div className="absolute left-1/2 top-[58%] h-10 w-24 -translate-x-1/2 rounded-t-[2rem] rounded-b-[0.8rem] bg-[#E1306C] opacity-80" />
                  <div className="absolute right-8 top-8 h-10 w-10 rounded-full border border-white/15 bg-white/8" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E1306C]">
                Privacy
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Your Data Never Leaves Your Device
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                Everything happens in the browser. There is no login flow, no
                password request, and no server-side upload step.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {privacyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E1306C] to-[#833AB4] text-lg text-white shadow-[0_0_22px_rgba(225,48,108,0.28)]">
                        {index + 1}
                      </div>
                      <p className="text-lg font-semibold text-white">
                        {feature}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src="/src/assets/logoNew.avif"
                alt="InstaFollow Analyzer logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">InstaFollow Analyzer</p>
              <p className="text-sm text-white/50">
                Premium Instagram follower analysis
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            <span>Copyright © 2026 InstaFollow Analyzer</span>
            <a
              href="https://github.com"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <a href="#privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a
              href="mailto:hello@instafollowanalyzer.com"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
