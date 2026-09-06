const categories = ["All", "Mobiles", "Laptops", "Electronics", "Travel"];

function CategoryTabs({ activeCategory, onCategoryChange }) {
  return (
    <div className="px-4 pt-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((category) => {
            const active = category === activeCategory;

            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[#6C3BFF] text-white"
                    : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryTabs;
