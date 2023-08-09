import { CardDashboard } from './'

type Props = {
    data: Products
}

export function MobileProductsOverview({ data }: Props) {
  return (
    <div className='md:hidden lg:hidden flex flex-wrap justify-around'>
    {data.map((product) => (
      <CardDashboard key={product.id} product={product}/>
    ))}
  </div>
  )
}
