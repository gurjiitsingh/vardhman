import { adminDb } from "@/lib/firebaseAdmin";
import { notFound } from "next/navigation";
import MasterCategoryView from "./MasterCategoryView";


export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const masterDoc = await adminDb
    .collection("masterCategories")
    .doc(id)
    .get();

  if (!masterDoc.exists) {
    notFound();
  }

  const masterCategory = {
    id: masterDoc.id,
    ...masterDoc.data(),
  };

  const categorySnap = await adminDb
    .collection("category")
    .where(
      "masterCategoryId",
      "==",
      id
    )
    .get();

  const categories =
    categorySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const allMasterCategoriesSnap =
  await adminDb
    .collection("masterCategories")
    .orderBy("sortOrder")
    .get();

const allMasterCategories =
  allMasterCategoriesSnap.docs.map(
    (doc) => ({
      id: doc.id,
      ...doc.data(),
    })
  );

 return (
  <MasterCategoryView
    masterCategory={masterCategory}
    categories={categories}
    allMasterCategories={
      allMasterCategories
    }
  />
);
}