import { fetchLatestProducts  } from "@/app/(universal)/action/products/dbOperation";
import Products from "@/components/level-1/Products";

export default async function ProductsWrapper() {
  const products = await fetchLatestProducts();

  return <Products initialProducts={products} />;
}