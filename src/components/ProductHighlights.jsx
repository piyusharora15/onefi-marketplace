import { Check } from "lucide-react";

function ProductHighlights({ features }) {
  return (
    <section className="rounded-3xl bg-white p-5">
      <h2 className="text-base font-semibold">Product highlights</h2>

      <div className="mt-4 space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0EBFF] text-[#6C3BFF]">
              <Check size={14} strokeWidth={2.5} />
            </div>

            <p className="text-sm text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductHighlights;
