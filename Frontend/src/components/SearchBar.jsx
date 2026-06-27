import { FiSearch } from "react-icons/fi";

function SearchBar({ value, onChange, placeholder = "Search usernames..." }) {
  return (
    <div className="relative">
      <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-white/25 focus:bg-black/45"
      />
    </div>
  );
}

export default SearchBar;
