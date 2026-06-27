import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiCheckCircle, FiInfo } from "react-icons/fi";

const toastIcons = {
  error: FiAlertCircle,
  success: FiCheckCircle,
  info: FiInfo,
};

function ToastStack({ toasts, onDismiss }) {
  return (
    <div className="fixed right-4 top-24 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:w-full">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = toastIcons[toast.type] ?? FiInfo;

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 30, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 30, y: -10 }}
              className="rounded-2xl border border-white/10 bg-[#111]/95 p-4 text-white shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-lg text-[#E1306C]">
                  <Icon />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{toast.message}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onDismiss(toast.id)}
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  ×
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default ToastStack;
