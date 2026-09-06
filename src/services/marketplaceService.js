import { products } from "../data/products";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts() {
  await delay(500); // Simulate network delay
  return products;
}

export async function getProductById(productId) {
  await delay(500); 
  return products.find((product) => product.id === productId) || null;
}

export async function searchProducts(query) {
  await delay(300);

  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return products;
  }

  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery)
    );
  });
}
