import FashionCategoriesWrapper from '@/custom/cus-components/FashionCategoriesWrapper'
import FashionCategoryHeader from '@/custom/cus-components/FashionCategoryHeader'
import React from 'react'

export default function page() {
  return (
    <div>
        <FashionCategoryHeader />
         <FashionCategoriesWrapper />
    </div>
  )
}
