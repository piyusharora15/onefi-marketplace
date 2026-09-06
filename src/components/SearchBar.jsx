import { Search, X } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="px-4 pt-5 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        <Search
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search products"
          className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-11 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/10"
        />

        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X size={17} />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
