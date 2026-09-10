 
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import { fetchProductById } from "@/app/(universal)/action/products/dbOperation";
 

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <ProductDetailClient product={product} />
  );
}