import { fetchProducts } from "@/app/(universal)/action/products/dbOperation";
 

export default async function ProductsWrapper() {
  const products = await fetchProducts();

  return (<></>);
}