import { ArrowRight } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";
import { calculateEmi } from "../utils/emiCalculator";

function CheckoutBar({ price, plan, onProceed }) {
  const monthlyEmi = calculateEmi(price, plan.tenure, plan.interestRate);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 bg-white/95 p-3 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-gray-400">{plan.tenure}-month EMI</p>

          <p className="truncate text-base font-bold text-[#17171c]">
            {formatCurrency(Math.round(monthlyEmi))}
            <span className="text-xs font-normal text-gray-400"> / month</span>
          </p>
        </div>

        <button
          onClick={onProceed}
          className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#6C3BFF] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5B2FE0] active:scale-[0.98] sm:min-w-55"
        >
          Proceed with 1Fi
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}

export default CheckoutBar;
