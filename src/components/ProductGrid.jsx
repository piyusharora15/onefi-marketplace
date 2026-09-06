import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center">
        <p className="text-sm font-medium text-gray-600">No products found</p>

        <p className="mt-1 text-xs text-gray-400">
          Try searching for something else.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
