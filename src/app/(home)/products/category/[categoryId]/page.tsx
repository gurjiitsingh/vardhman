import { fetchProductByCategoryId } from "@/app/(universal)/action/products/dbOperation";
import { adminDb } from "@/lib/firebaseAdmin";
import { notFound } from "next/navigation";
import ProductGrid from "./ProductGrid";
import { fetchCategoryById } from "@/app/(universal)/action/category/fetchCategoryById";
import { getMasterCategories } from "@/app/(universal)/action/master-category/getMasterCategories";

export default async function Page({
  params,
}: {
  params: Promise<{
    categoryId: string;
  }>;
}) {
  const { categoryId } = await params;

  // Products
  const products = await fetchProductByCategoryId(categoryId);
  // Category by id
  const category = await fetchCategoryById(categoryId)

  // Master Category
  let masterCategory = null;

  if (category.masterCategoryId) {
    const masterDoc = await adminDb
      .collection("masterCategories")
      .doc(category.masterCategoryId)
      .get();

    if (masterDoc.exists) {
      masterCategory = {
        id: masterDoc.id,
        ...masterDoc.data(),
      };
    }
  }

  // Categories belonging to same master category
  let relatedCategories: any[] = [];

  if (category.masterCategoryId) {
    const categoriesSnap =
      await adminDb
        .collection("category")
        .where(
          "masterCategoryId",
          "==",
          category.masterCategoryId
        )
        .get();

    relatedCategories =
      categoriesSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    relatedCategories.sort(
      (a, b) =>
        Number(a.sortOrder || 0) -
        Number(b.sortOrder || 0)
    );
  }



if (category.masterCategoryId) {
  const categoriesSnap =
    await adminDb
      .collection("category")
      .where(
        "masterCategoryId",
        "==",
        category.masterCategoryId
      )
      .get();

  relatedCategories =
    categoriesSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

  relatedCategories.sort(
    (a, b) =>
      Number(a.sortOrder || 0) -
      Number(b.sortOrder || 0)
  );
}

// Fetch all master categories
const masterCategoriesSnap =
  await adminDb
    .collection("masterCategories")
    .get();

// const allMasterCategories =
//   masterCategoriesSnap.docs
//     .map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }))
//     .sort(
//       (a: any, b: any) =>
//         Number(a.sortOrder || 0) -
//         Number(b.sortOrder || 0)
//     );
const allMasterCategories =  await getMasterCategories();

  
  //   // Master Category
  // const masterCategory = getMasterCategoryById(categoryId);
  // // Categories belonging to same master category
  // const relatedCategories = fetchCategoriesByMasterCategory(categoryId);

return (
  <ProductGrid
    products={products}
    category={category}
    masterCategory={masterCategory}
    categories={relatedCategories}
    allMasterCategories={
      allMasterCategories
    }
  />
);
}