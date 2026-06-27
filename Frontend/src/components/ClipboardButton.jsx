import { useState } from "react";
import { FiCopy } from "react-icons/fi";

function ClipboardButton({ usernames = [], label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(usernames.join("\n"));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!usernames.length}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[#E1306C]/20 via-[#C13584]/18 to-[#833AB4]/20 px-4 py-2.5 text-sm font-medium text-black transition hover:border-black/25 hover:from-[#E1306C]/30 hover:via-[#C13584]/28 hover:to-[#833AB4]/30 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <FiCopy />
      {copied ? "Copied Successfully" : label}
    </button>
  );
}

export default ClipboardButton;
