function ResultCard({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(225,48,108,0.12),transparent_35%,rgba(67,97,238,0.08),transparent_72%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default ResultCard;
