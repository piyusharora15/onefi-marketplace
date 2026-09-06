import { Check } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";

function VariantSelector({ variants, selectedVariant, onVariantChange }) {
  return (
    <section className="rounded-3xl bg-white p-5">
      <div className="mb-4">
        <h2 className="text-base font-semibold">Choose variant</h2>

        <p className="mt-1 text-xs text-gray-500">
          Select the configuration you want
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {variants.map((variant) => {
          const selected = selectedVariant?.id === variant.id;

          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onVariantChange(variant)}
              className={`relative rounded-2xl border p-4 text-left transition ${
                selected
                  ? "border-[#6C3BFF] bg-[#F7F4FF]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {selected && (
                <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#6C3BFF] text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
              )}

              <p className="text-sm font-semibold">{variant.name}</p>

              <p className="mt-1 text-xs text-gray-500">{variant.color}</p>

              <p className="mt-3 text-sm font-bold">
                {formatCurrency(variant.price)}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default VariantSelector;
