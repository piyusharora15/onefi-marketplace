import { X } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";
import { calculateEmi } from "../utils/emiCalculator";

function ConfirmationModal({ product, variant, plan, onClose, onContinue }) {
  const monthlyEmi = calculateEmi(
    variant.price,
    plan.tenure,
    plan.interestRate,
  );

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center bg-black/40 p-3 sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-5 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Mobile drag indicator */}
        <div className="mb-5 flex items-center justify-between sm:hidden">
          <div className="h-1.5 w-10 rounded-full bg-gray-200" />

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="hidden justify-end sm:flex">
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <h2 className="text-lg font-bold text-[#17171c]">
          Review your selection
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Confirm your product and EMI plan.
        </p>

        <div className="mt-5 rounded-2xl bg-[#F8F8FA] p-4">
          <div className="flex items-center gap-3">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-16 w-16 rounded-xl object-cover"
            />

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{product.name}</p>

              <p className="mt-1 text-xs text-gray-500">
                {variant.name} · {variant.color}
              </p>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Product price</span>

              <span className="font-medium">
                {formatCurrency(variant.price)}
              </span>
            </div>

            <div className="mt-2 flex justify-between text-sm">
              <span className="text-gray-500">EMI plan</span>

              <span className="font-medium">{plan.tenure} months</span>
            </div>

            <div className="mt-2 flex justify-between text-sm">
              <span className="text-gray-500">Monthly EMI</span>

              <span className="font-semibold text-[#6C3BFF]">
                {formatCurrency(Math.round(monthlyEmi))}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={onClose}
            className="h-12 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Go back
          </button>

          <button
            onClick={onContinue}
            className="h-12 rounded-2xl bg-[#6C3BFF] text-sm font-semibold text-white transition hover:bg-[#5B2FE0] active:scale-[0.98]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
