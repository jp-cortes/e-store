import React from 'react'
import { getProductsById } from '../../../../services'
import FormProduct from '../../../../components/FormProduct'



export default async function EditProduct({ params: { id } } : { params: { id: string }}) {
const product = await getProductsById(id)

  return (
    <div>
        <FormProduct product={product}/>
    </div>
  )
}

