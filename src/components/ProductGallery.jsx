function ProductGallery({ product }) {
  return (
    <div className="mt-5 overflow-hidden rounded-3xl bg-white">
      <div className="aspect-square max-h-125 overflow-hidden bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProductGallery;
