import { Check } from "lucide-react";
import { calculateEmi } from "../utils/emiCalculator";
import { formatCurrency } from "../utils/formatCurrency";

function EmiSelector({ plans, selectedPlan, onPlanChange, principal }) {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-base font-semibold text-[#17171c]">
          Choose your EMI plan
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Select a tenure that works for you
        </p>
      </div>

      <div className="space-y-2">
        {plans.map((plan) => {
          const selected = selectedPlan.id === plan.id;

          const monthlyEmi = calculateEmi(
            principal,
            plan.tenure,
            plan.interestRate,
          );

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => onPlanChange(plan)}
              className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${
                selected
                  ? "border-[#6C3BFF] bg-[#F7F4FF]"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    selected
                      ? "border-[#6C3BFF] bg-[#6C3BFF] text-white"
                      : "border-gray-300"
                  }`}
                >
                  {selected && <Check size={13} strokeWidth={3} />}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#17171c]">
                    {plan.tenure} months
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    {plan.interestRate === 0
                      ? "0% interest"
                      : `${plan.interestRate}% interest`}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold text-[#17171c]">
                  {formatCurrency(Math.round(monthlyEmi))}
                </p>

                <p className="text-[10px] text-gray-400">/ month</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default EmiSelector;
