import { FiArrowRight, FiLoader } from "react-icons/fi";

function AnalyzeButton({
  disabled,
  loading,
  onClick,
  label = "Analyze Followers",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_70px_rgba(225,48,108,0.3)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:w-auto sm:min-w-[220px]"
    >
      {loading ? <FiLoader className="animate-spin" /> : <FiArrowRight />}
      {loading ? "Analyzing..." : label}
    </button>
  );
}

export default AnalyzeButton;
