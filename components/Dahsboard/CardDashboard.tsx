import Image from 'next/image';



export function CardDashboard({ product }: { product: Product }) {
  return (
    <div className='w-[300px] p-3 flex flex-col gap-2 mt-4 rounded-lg bg-white'>
          <div className="h-auto w-auto mx-auto mb-4">
              <Image
                  className="rounded-full h-auto w-auto"
                  width={64}
                  height={64}
                  src={product.image}
                  alt={product.name} />
          </div>
          <div className="flex justify-between content-center">
              <p className="text-xs font-medium text-gray-900 uppercase">
                  Name:
              </p>
              <p className="text-sm font-medium text-gray-500">
                  {product.name}
              </p>
          </div>
          <div className="flex justify-between content-center">
              <p className="text-xs font-medium text-gray-900 uppercase">
              Category: 
              </p>
              <p className="text-sm text-gray-500">
              {product.category.name}
              </p>
          </div>
          <div className="flex justify-between content-center">
            <p className='text-xs font-medium text-gray-900 uppercase'>
                Price:
            </p>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  € {product.price}
              </span>
          </div>
          <div className='flex justify-between content-center'>
            <p className='text-xs font-medium text-gray-900 uppercase'>Product id:</p>
          <p className=" text-sm text-gray-500">{`${product.id}`}</p>
          </div>
       
      </div>
  
  )
}

