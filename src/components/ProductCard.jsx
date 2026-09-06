import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import { calculateEmi } from "../utils/emiCalculator";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const startingPrice = Math.min(
    ...product.variants.map((variant) => variant.price),
  );

  const shortestPlan = product.emiPlans[0];

  const monthlyEmi = calculateEmi(
    startingPrice,
    shortestPlan.tenure,
    shortestPlan.interestRate,
  );

  function handleClick() {
    navigate(`/marketplace/${product.id}`);
  }

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-gray-400">{product.brand}</p>

        <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-[#17171c]">
          {product.name}
        </h3>

        <div className="mt-3">
          <p className="text-base font-bold text-[#17171c]">
            {formatCurrency(startingPrice)}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            From {formatCurrency(monthlyEmi)}/month
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-full bg-[#F0EBFF] px-2.5 py-1 text-[10px] font-semibold text-[#6C3BFF]">
            {shortestPlan.tenure}M EMI
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6C3BFF] text-white">
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
