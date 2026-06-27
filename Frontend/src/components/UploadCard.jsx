import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiFileText, FiUploadCloud, FiCheckCircle } from "react-icons/fi";

function UploadCard({
  title,
  description,
  fileName,
  onFileSelect,
  onInvalidFile,
}) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const acceptFile = (file) => {
    if (!file) {
      return;
    }

    const lowerName = file.name.toLowerCase();
    const looksJson =
      lowerName.endsWith(".json") || file.type === "application/json";

    if (!looksJson) {
      onInvalidFile?.("Only JSON files are accepted.");
      return;
    }

    onFileSelect(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    acceptFile(event.dataTransfer.files?.[0]);
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      onDragOver={(event) => {
        event.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          inputRef.current?.click();
        }
      }}
      className={`group relative cursor-pointer overflow-hidden rounded-[1.8rem] border p-6 text-left outline-none transition ${
        dragActive
          ? "border-[#E1306C]/70 bg-white/8"
          : "border-white/10 bg-white/5"
      } backdrop-blur-xl`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(225,48,108,0.12),transparent_30%,rgba(67,97,238,0.1),transparent_75%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <input
        ref={inputRef}
        type="file"
        accept=".json,application/json"
        className="hidden"
        onChange={(event) => acceptFile(event.target.files?.[0])}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-2xl text-[#E1306C] shadow-[0_0_30px_rgba(225,48,108,0.15)]">
            <FiUploadCloud />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60">
          <FiFileText />
        </div>
      </div>

      <div className="relative mt-6 rounded-2xl border border-dashed border-white/10 bg-black/25 p-4">
        {fileName ? (
          <div className="flex items-center gap-3 text-sm text-white">
            <FiCheckCircle className="text-[#E1306C]" />
            <span className="truncate">{fileName}</span>
          </div>
        ) : (
          <p className="text-sm text-white/50">
            Drag and drop your file here or click to browse.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default UploadCard;
