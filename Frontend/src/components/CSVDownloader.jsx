import { FiDownload } from "react-icons/fi";

function toCsvValue(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function CSVDownloader({
  usernames = [],
  category = "Users",
  fileName = "instafollow-analyzer.csv",
}) {
  const handleDownload = () => {
    if (!usernames.length) {
      return;
    }

    const rows = [
      "Username,Category",
      ...usernames.map(
        (username) => `${toCsvValue(username)},${toCsvValue(category)}`,
      ),
    ];
    const blob = new Blob([rows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={!usernames.length}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[#405DE6]/18 via-[#833AB4]/18 to-[#E1306C]/20 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:from-[#405DE6]/28 hover:via-[#833AB4]/28 hover:to-[#E1306C]/30 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <FiDownload />
      Download CSV
    </button>
  );
}

export default CSVDownloader;
