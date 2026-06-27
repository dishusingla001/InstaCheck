import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiPlayCircle } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Guide", href: "/#guide" },
  { label: "Privacy", href: "/#privacy" },
];

function Navbar({
  onAnalyze,
  analyzeLabel = "Analyze Followers",
  actionDisabled = false,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(225,48,108,0.15)] backdrop-blur-xl">
            <img
              src="Frontend/public/logoNew.avif"
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
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <FiGithub />
            Github
          </a>
        </nav>

        {onAnalyze ? (
          <button
            type="button"
            onClick={onAnalyze}
            disabled={actionDisabled}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(225,48,108,0.35)] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            <FiPlayCircle className="text-base" />
            {analyzeLabel}
          </button>
        ) : (
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(225,48,108,0.35)] transition-transform hover:scale-[1.03]"
          >
            <FiPlayCircle className="text-base" />
            {analyzeLabel}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
