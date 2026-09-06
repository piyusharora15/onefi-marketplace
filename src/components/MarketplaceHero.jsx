import { ArrowRight, Sparkles } from "lucide-react";

function MarketplaceHero() {
  return (
    <section className="px-4 pt-5 sm:px-6 sm:pt-7">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#6C3BFF] px-5 py-6 text-white shadow-sm sm:px-8 sm:py-8">
          <div className="relative z-10">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <Sparkles size={14} />
              </div>

              <span className="text-xs font-medium text-white/80">
                1Fi Marketplace
              </span>
            </div>

            <h2 className="max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
              Shop smarter.
              <br />
              Pay later with 1Fi.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">
              Discover products and choose an EMI plan that fits your monthly
              budget.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#6C3BFF]">
              Explore products
              <ArrowRight size={14} />
            </div>
          </div>

          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-white/5" />
        </div>
      </div>
    </section>
  );
}

export default MarketplaceHero;
