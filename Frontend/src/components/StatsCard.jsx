import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useAnimatedCounter(target, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * easeOut));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return value;
}

function StatsCard({ label, value, icon: Icon, delay = 0 }) {
  const animatedValue = useAnimatedCounter(Number(value) || 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-white/55">{label}</p>
          <p className="mt-3 text-3xl font-black text-white">
            {animatedValue.toLocaleString()}
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-xl text-[#E1306C] shadow-[0_0_30px_rgba(225,48,108,0.12)]">
          <Icon />
        </div>
      </div>
    </motion.div>
  );
}

export default StatsCard;
