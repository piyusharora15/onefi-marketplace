import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import MarketplaceHero from "../components/MarketplaceHero";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import ProductGrid from "../components/ProductGrid";
import HowItWorks from "../components/HowItWorks";

import { useProducts } from "../hooks/useProducts";

function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { products = [], loading, error } = useProducts();

  // -----------------------------------------
  // Filter Products
  // -----------------------------------------

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const productName = product.name?.toLowerCase() || "";
      const brand = product.brand?.toLowerCase() || "";
      const category = product.category?.toLowerCase() || "";

      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        !query ||
        productName.includes(query) ||
        brand.includes(query) ||
        category.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, searchQuery, activeCategory]);

  // -----------------------------------------
  // Render
  // -----------------------------------------

  return (
    <div className="min-h-screen bg-[#F8F8FA] pb-24">
      {/* =====================================
          Top Navigation
      ====================================== */}
      <Navbar />

      <main>
        {/* ===================================
            Marketplace Hero
        ==================================== */}
        <MarketplaceHero />

        {/* ===================================
            Search
        ==================================== */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* ===================================
            Categories
        ==================================== */}
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* ===================================
            How It Works
        ==================================== */}
        <HowItWorks />

        {/* ===================================
            Product Section
        ==================================== */}
        <section className="px-4 pb-8 pt-7 sm:px-6">
          <div className="mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-[#17171C]">
                  Popular Products
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Explore products available through 1Fi
                </p>
              </div>

              {!loading && !error && (
                <span className="shrink-0 text-xs font-medium text-gray-400">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </span>
              )}
            </div>

            {/* =================================
                Loading State
            ================================== */}
            {loading && (
              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                  lg:grid-cols-4
                "
                aria-label="Loading products"
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl bg-white"
                  >
                    {/* Image Skeleton */}
                    <div className="aspect-square animate-pulse bg-gray-200" />

                    {/* Content Skeleton */}
                    <div className="space-y-3 p-4">
                      <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />

                      <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

                      <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />

                      <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* =================================
                Error State
            ================================== */}
            {!loading && error && (
              <div
                className="
                  rounded-2xl
                  border
                  border-red-100
                  bg-red-50
                  p-8
                  text-center
                "
                role="alert"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-500 shadow-sm">
                  !
                </div>

                <p className="mt-4 text-sm font-semibold text-red-600">
                  Unable to load products
                </p>

                <p className="mt-1 text-sm text-red-500">{error}</p>
              </div>
            )}

            {/* =================================
                Products
            ================================== */}
            {!loading && !error && (
              <>
                {filteredProducts.length > 0 ? (
                  <ProductGrid products={filteredProducts} />
                ) : (
                  <div className="rounded-3xl bg-white px-6 py-12 text-center shadow-sm">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F0ECFF]">
                      <span className="text-xl">⌕</span>
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-[#17171C]">
                      No products found
                    </h3>

                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                      We couldn't find any products matching your search. Try
                      another keyword or category.
                    </p>

                    {(searchQuery || activeCategory !== "All") && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("All");
                        }}
                        className="
                          mt-5
                          rounded-xl
                          bg-[#6C3BFF]
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          text-white
                          transition
                          hover:bg-[#5B2FE0]
                          active:scale-95
                        "
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      {/* =====================================
          Bottom Navigation
      ====================================== */}
      <BottomNav />
    </div>
  );
}

export default Marketplace;
