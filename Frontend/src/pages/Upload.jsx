import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiShield, FiStar } from "react-icons/fi";
import Navbar from "../components/Navbar.jsx";
import UploadCard from "../components/UploadCard.jsx";
import AnalyzeButton from "../components/AnalyzeButton.jsx";
import LoadingOverlay from "../components/LoadingOverlay.jsx";
import ToastStack from "../components/ToastStack.jsx";
import useAnalyzer from "../hooks/useAnalyzer.js";

function Upload() {
  const navigate = useNavigate();
  const analyzer = useAnalyzer(navigate);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-gradient absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(225,48,108,0.26),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(67,97,238,0.20),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(131,58,180,0.18),_transparent_35%)]" />
        <div className="floating-orb left-[8%] top-[18%]" />
        <div className="floating-orb right-[10%] top-[32%] delay-1000" />
      </div>

      <Navbar
        onAnalyze={analyzer.analyzeFollowers}
        actionDisabled={!analyzer.canAnalyze || analyzer.loading}
      />
      <ToastStack toasts={analyzer.toasts} onDismiss={analyzer.removeToast} />
      <LoadingOverlay
        open={analyzer.loading}
        message="Parsing your JSON export and computing follower insights."
      />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-xl">
            <FiShield className="text-[#E1306C]" />
            Browser-only analysis
          </div>
          <h1 className="mt-6 text-4xl font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Upload your Instagram JSON files
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
            Upload both followers_1.json and following.json files exported from
            Instagram.
          </p>
        </motion.section>

        <section className="mt-12 grid gap-5 lg:grid-cols-2">
          <UploadCard
            title="Followers File"
            description="Accept only JSON"
            fileName={analyzer.followersFileName}
            onFileSelect={(file) =>
              analyzer.handleFileSelect("followers", file)
            }
            onInvalidFile={analyzer.handleInvalidFile}
          />
          <UploadCard
            title="Following File"
            description="Accept only JSON"
            fileName={analyzer.followingFileName}
            onFileSelect={(file) =>
              analyzer.handleFileSelect("following", file)
            }
            onInvalidFile={analyzer.handleInvalidFile}
          />
        </section>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/60">
              <FiStar className="text-[#E1306C]" />
              Secure local processing
            </div>
            <p className="mt-2 text-base text-white/70">Analyze Followers</p>
          </div>
          <AnalyzeButton
            onClick={analyzer.analyzeFollowers}
            disabled={!analyzer.canAnalyze}
            loading={analyzer.loading}
          />
        </div>
      </main>
    </div>
  );
}

export default Upload;
