import { fetchProductByCategoryId } from "@/app/(universal)/action/products/dbOperation";
import { fetchCategoryById } from "@/app/(universal)/action/category/fetchCategoryById";
import { getMasterCategories } from "@/app/(universal)/action/master-category/getMasterCategories";
import { adminDb } from "@/lib/firebaseAdmin";
import ProductGrid from "./ProductGrid";
import { addOnType } from "@/lib/types/addOnType";
import { ProductType } from "@/lib/types/productType";

export default async function Page({
  params,
}: {
  params: Promise<{
    categoryId: string;
  }>;
}) {
  const { categoryId } = await params;

  // Products
  const products =
    await fetchProductByCategoryId(categoryId);

  // Category
  const category =
    await fetchCategoryById(categoryId);

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

  // Related Categories
  let relatedCategories: any[] = [];

  if (category.masterCategoryId) {
    const categoriesSnap = await adminDb
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

  // All Master Categories
  const allMasterCategories =
    await getMasterCategories();

  // ----------------------------------
  // FETCH ALL PRODUCTS FOR VARIANTS
  // ----------------------------------

  const allProductsSnap = await adminDb
    .collection("products")
    .get();

const allProducts: ProductType[] =
  allProductsSnap.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as ProductType)
  );

const variants: ProductType[] =
  allProducts.filter(
    (p) => p.type === "variant"
  );

  // ----------------------------------
  // ADDONS
  // ----------------------------------

  const addOnsSnap = await adminDb
    .collection("addOns")
    .get();

  const allAddOns: addOnType[] =
  addOnsSnap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<addOnType, "id">),
  }));

  // ----------------------------------
  // MODIFIER GROUPS
  // ----------------------------------

  const modifierGroupsSnap =
    await adminDb
      .collection("modifierGroups")
      .get();

  const modifierGroups =
    modifierGroupsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

  // ----------------------------------
  // PRODUCT MODIFIERS
  // ----------------------------------

  const productModifiersSnap =
    await adminDb
      .collection("productModifiers")
      .get();

  const productModifiers =
    productModifiersSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

  return (
    <ProductGrid
      products={products}
      category={category}
      masterCategory={masterCategory}
      categories={relatedCategories}
      allMasterCategories={
        allMasterCategories
      }

      variants={variants}
      allAddOns={allAddOns}
      modifierGroups={modifierGroups}
      productModifiers={productModifiers}
    />
  );
}