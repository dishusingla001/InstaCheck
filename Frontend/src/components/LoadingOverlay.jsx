import { motion, AnimatePresence } from "framer-motion";
import { FiLoader } from "react-icons/fi";

function LoadingOverlay({ open, message = "Analyzing your followers..." }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 10 }}
            className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-[#111]/90 p-8 text-center shadow-[0_35px_120px_rgba(0,0,0,0.55)]"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-[#E1306C]">
              <FiLoader className="animate-spin" />
            </div>
            <p className="mt-5 text-xl font-semibold text-white">
              Analyzing your followers...
            </p>
            <p className="mt-2 text-sm leading-6 text-white/60">{message}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default LoadingOverlay;
