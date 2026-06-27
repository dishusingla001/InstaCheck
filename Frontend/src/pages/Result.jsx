import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FiArrowLeft,
  FiShield,
  FiUserCheck,
  FiUserX,
  FiUsers,
} from "react-icons/fi";
import Navbar from "../components/Navbar.jsx";
import ResultCard from "../components/ResultCard.jsx";
import StatsCard from "../components/StatsCard.jsx";
import Tabs from "../components/Tabs.jsx";
import UserList from "../components/UserList.jsx";

function Result() {
  const location = useLocation();
  const results = location.state?.results;
  const [activeTab, setActiveTab] = useState("mutual");
  const [searchState, setSearchState] = useState({
    mutual: "",
    notFollowingBack: "",
    youDontFollowBack: "",
  });
  const [sortState, setSortState] = useState({
    mutual: "newest",
    notFollowingBack: "newest",
    youDontFollowBack: "newest",
  });

  const hasResults = Boolean(results);

  const tabItems = useMemo(
    () => [
      {
        key: "mutual",
        label: "Mutual Followers",
        title: "Mutual Followers",
        description: "People who follow you and you follow back.",
        usernames: results?.mutual ?? [],
        category: "Mutual Followers",
      },
      {
        key: "notFollowingBack",
        label: "People Who Don't Follow You Back",
        title: "People Who Don't Follow You Back",
        description: "People you follow who do not follow you back.",
        usernames: results?.notFollowingBack ?? [],
        category: "People Who Don't Follow You Back",
      },
      {
        key: "youDontFollowBack",
        label: "People You Don't Follow Back",
        title: "People You Don't Follow Back",
        description: "Accounts that follow you but are not followed back.",
        usernames: results?.youDontFollowBack ?? [],
        category: "People You Don't Follow Back",
      },
    ],
    [results],
  );

  const currentTab =
    tabItems.find((tab) => tab.key === activeTab) ?? tabItems[0];

  const cards = [
    { label: "Followers", value: results?.followersCount ?? 0, icon: FiUsers },
    { label: "Following", value: results?.followingCount ?? 0, icon: FiUsers },
    { label: "Mutual", value: results?.mutual?.length ?? 0, icon: FiUserCheck },
    {
      label: "Not Following Back",
      value: results?.notFollowingBack?.length ?? 0,
      icon: FiUserX,
    },
  ];

  const updateSearch = (key, value) => {
    setSearchState((current) => ({ ...current, [key]: value }));
  };

  const updateSort = (key, value) => {
    setSortState((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-gradient absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(225,48,108,0.26),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(67,97,238,0.20),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(131,58,180,0.18),_transparent_35%)]" />
      </div>

      <Navbar analyzeLabel="Analyze Another" />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-xl">
              <FiShield className="text-[#E1306C]" />
              Analysis complete
            </div>

            <Link
              to="/upload"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[#E1306C]/16 via-[#C13584]/14 to-[#833AB4]/16 px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:from-[#E1306C]/28 hover:via-[#C13584]/24 hover:to-[#833AB4]/28"
            >
              <FiArrowLeft />
              Back
            </Link>
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Your Instagram audience snapshot
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
            Review who follows you back, who does not, and which accounts you
            are not following back.
          </p>
        </motion.section>

        {hasResults ? (
          <>
            <section className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {cards.map((card, index) => (
                <StatsCard
                  key={card.label}
                  label={card.label}
                  value={card.value}
                  icon={card.icon}
                  delay={index * 0.05}
                />
              ))}
            </section>

            <section className="mt-12 space-y-5">
              <Tabs
                tabs={tabItems}
                activeTab={activeTab}
                onChange={setActiveTab}
              />

              <motion.div
                key={currentTab.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <UserList
                  title={currentTab.title}
                  description={currentTab.description}
                  usernames={currentTab.usernames}
                  category={currentTab.category}
                  search={searchState[currentTab.key]}
                  onSearchChange={(value) =>
                    updateSearch(currentTab.key, value)
                  }
                  sortMode={sortState[currentTab.key]}
                  onSortChange={(value) => updateSort(currentTab.key, value)}
                />
              </motion.div>
            </section>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/upload"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_60px_rgba(225,48,108,0.35)] transition hover:scale-[1.02]"
              >
                <FiArrowLeft />
                Analyze Another Export
              </Link>
            </div>
          </>
        ) : (
          <ResultCard className="mt-12 p-8">
            <h2 className="text-2xl font-semibold text-white">
              No analysis found
            </h2>
            <p className="mt-3 max-w-2xl text-white/60">
              Upload your Instagram JSON files first so the app can compute your
              results.
            </p>
            <div className="mt-6">
              <Link
                to="/upload"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_60px_rgba(225,48,108,0.35)] transition hover:scale-[1.02]"
              >
                <FiArrowLeft />
                Go to Upload
              </Link>
            </div>
          </ResultCard>
        )}
      </main>
    </div>
  );
}

export default Result;
