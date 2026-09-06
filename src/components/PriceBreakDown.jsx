import { formatCurrency } from "../utils/formatCurrency";
import { calculateEmi } from "../utils/emiCalculator";

function PriceBreakdown({ price, tenure, interestRate }) {
  const monthlyEmi = calculateEmi(price, tenure, interestRate);

  const totalPayable = monthlyEmi * tenure;

  return (
    <div className="rounded-2xl bg-[#F7F4FF] p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Product price</span>

        <span className="text-sm font-medium text-[#17171c]">
          {formatCurrency(price)}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-gray-600">EMI tenure</span>

        <span className="text-sm font-medium text-[#17171c]">
          {tenure} months
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-gray-600">Interest</span>

        <span className="text-sm font-medium text-[#17171c]">
          {interestRate}%
        </span>
      </div>

      <div className="my-4 border-t border-[#E6DFFF]" />

      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-gray-500">Monthly EMI</p>

          <p className="mt-1 text-xl font-bold text-[#6C3BFF]">
            {formatCurrency(Math.round(monthlyEmi))}
          </p>
        </div>

        <p className="text-xs text-gray-400">
          Total {formatCurrency(Math.round(totalPayable))}
        </p>
      </div>
    </div>
  );
}

export default PriceBreakdown;
