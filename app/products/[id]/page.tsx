import { getProductsById } from "../../../services";
import { AddToCartButton } from "../../../components";
import { Suspense } from "react";
import { RelatedProducts } from "../../../components";
import { Navbar } from "../../../components";
import Image from "next/image";




export default async function Product ({ params: { id } } : { params: { id: string }}) {

  const productID = id.split("-")[0]; //get the id from params
  
  const product = await getProductsById(productID);
  
  return (
    <>
       <Navbar />
    <div className="bg-white dark:bg-gray-900  grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-2">
      <div className='bg-white dark:bg-gray-900  md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5  rounded-lg relative px-4'>

      <h1 className='text-2xl font-semibold self-center mt-7'>Product Details</h1>
      <figure className="relative mt-5 mb-2w-full h-4/5">
        <Image
        className='w-full h-full object-cover rounded-lg' 
        src={product.image}
        width={640}
        height={400}
        alt={product.name}
           />
      </figure>
      <div className="absolute bottom-[120px] right-5 flex items-center justify-center flex-col">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl ">
                {product.name}
              </div>
              <div className="inline-flex bg-white px-2 text-lg mt-2 font-semibold text-black rounded-lg">
              € {product.price}
              </div>
          </div>
      </div>
      <div className='bg-white md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-5  rounded-lg relative mt-7'>
        <div className='flex flex-col items-center relative mt-10 px-2'>
          <p className='text-justify text-xl'>
            {product.description}.
          </p>
          <div className='mt-10'>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

    </div>
    <Suspense>
      <RelatedProducts categoryId={product.categoryId}/>
    </Suspense>
    
    </>
  )
}

