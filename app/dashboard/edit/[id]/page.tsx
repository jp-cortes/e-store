
import { getProductsById } from '../../../../services'
import { FormUpdateProduct } from '../../../../components/Forms'



export default async function EditProduct({ params: { id } } : { params: { id: string }}) {
    const product = await getProductsById(id)

  return (
    <div>
        <FormUpdateProduct product={product}/>
    </div>
  )
}

