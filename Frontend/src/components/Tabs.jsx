function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 rounded-[1.6rem] border border-white/10 bg-black/30 p-2 backdrop-blur-xl">
      {tabs.map((tab) => {
        const active = tab.key === activeTab;

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              active
                ? "border border-white/10 bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] text-white shadow-[0_15px_50px_rgba(225,48,108,0.28)]"
                : "border border-white/10 bg-white/5 text-white/65 hover:bg-white/10 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
