import { formatCurrency } from "../utils/formatCurrency";

function ProductInfo({ product }) {
  const startingPrice = Math.min(
    ...product.variants.map((variant) => variant.price),
  );

  return (
    <section className="mt-5 rounded-3xl bg-white p-5">
      <p className="text-xs font-medium text-gray-400">{product.brand}</p>

      <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#17171c]">
        {product.name}
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {product.description}
      </p>

      <div className="mt-5">
        <p className="text-xs text-gray-400">Starting from</p>

        <p className="mt-1 text-2xl font-bold text-[#17171c]">
          {formatCurrency(startingPrice)}
        </p>
      </div>
    </section>
  );
}

export default ProductInfo;
