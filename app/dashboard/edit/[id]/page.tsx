
import { getProductsById } from '../../../../services'
import { FormUpdateProduct } from '../../../../components/Forms'
import { NavbarDashboard } from '../../../../components'



export default async function EditProduct({ params: { id } } : { params: { id: string }}) {
    const product = await getProductsById(id)

  return (
    <>
        <NavbarDashboard/>
        <h1 className='text-2xl ml-8 my-7'>Update Product</h1>
        <FormUpdateProduct product={product}/>
    </>
  )
}

