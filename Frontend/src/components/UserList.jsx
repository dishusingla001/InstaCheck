import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import SearchBar from "./SearchBar.jsx";
import ClipboardButton from "./ClipboardButton.jsx";
import CSVDownloader from "./CSVDownloader.jsx";
import ResultCard from "./ResultCard.jsx";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Alphabetical", value: "alphabetical" },
  { label: "Reverse", value: "reverse" },
];

function getSortedUsers(users, sortMode) {
  const clonedUsers = [...users];

  if (sortMode === "alphabetical") {
    return clonedUsers.sort((left, right) => left.localeCompare(right));
  }

  if (sortMode === "reverse") {
    return clonedUsers.sort((left, right) => right.localeCompare(left));
  }

  return clonedUsers;
}

function UserList({
  title,
  description,
  usernames,
  category,
  search,
  onSearchChange,
  sortMode,
  onSortChange,
}) {
  const filteredUsers = getSortedUsers(
    usernames.filter((username) =>
      username.toLowerCase().includes(search.toLowerCase()),
    ),
    sortMode,
  );

  return (
    <ResultCard className="p-5 sm:p-6">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            {title}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            {description}
          </h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ClipboardButton usernames={filteredUsers} label="Copy All" />
          <CSVDownloader
            usernames={filteredUsers}
            category={category}
            fileName={`instafollow-${category.toLowerCase().replaceAll(" ", "-")}.csv`}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
        <SearchBar value={search} onChange={onSearchChange} />
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {sortOptions.map((option) => {
            const active = option.value === sortMode;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onSortChange(option.value)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                  active
                    ? "bg-white text-black"
                    : "border border-white/10 bg-black/25 text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 max-h-[58vh] overflow-y-auto pr-1">
        {filteredUsers.length ? (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filteredUsers.map((username, index) => (
              <motion.div
                key={`${username}-${index}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-[#E1306C]">
                  <FiUser />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    {username}
                  </p>
                  <p className="text-xs text-white/45">Instagram username</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid min-h-[260px] place-items-center rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 text-center">
            <div>
              <p className="text-xl font-semibold text-white">
                No users found.
              </p>
              <p className="mt-2 text-sm text-white/55">
                Try a different search term or sort option.
              </p>
            </div>
          </div>
        )}
      </div>
    </ResultCard>
  );
}

export default UserList;
