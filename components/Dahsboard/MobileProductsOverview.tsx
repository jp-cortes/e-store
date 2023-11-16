'use client'
import { useFetch } from '../../hooks/infiniteQuery';
import { getAllProducts } from '../../services';
import { CardDashboard } from './'

async function fetchProducts(page: number) {
  const products = await getAllProducts();
  return products.slice((page - 1) * 9, page * 9);
}

export function MobileProductsOverview() {

  const { data, isLoading, ref } = useFetch({ query: ['all_products'], queryFunction: fetchProducts })
  const  products = data?.pages.flatMap((product: Products) => product);

  return (
    <div className='md:hidden lg:hidden flex flex-wrap justify-around'>
    {products?.map((product, i) => (
      <div key={product.id}>
      <CardDashboard product={product}/>
      {i === products.length - 1 && <div ref={ref} />}
      </div>
    ))}
  </div>
  )
}
