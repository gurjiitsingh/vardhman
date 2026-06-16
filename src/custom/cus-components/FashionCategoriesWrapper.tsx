// components/FashionCategoriesWrapper.tsx

import FashionCategories from "@/custom/cus-components/FashionCategories";
import { getMasterCategories } from "@/app/(universal)/action/master-category/getMasterCategories";

export default async function FashionCategoriesWrapper() {
  const masterCategories =
    await getMasterCategories();

  return (
    <FashionCategories
      masterCategories={masterCategories}
    />
  );
}