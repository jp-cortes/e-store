import Image from 'next/image';
import Link from 'next/link';
import { getProductsByCategoryName } from '../../services';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getProductsByCategoryName('home')

  if (!products?.length) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-[marquee_60s_linear_infinite]">
        {[...products].map((product, i) => (
     
          <Link
            key={`${product.id}-${i}`}
            href={`/product/${product.id}`}
            className="relative h-[30vh] w-full flex-none md:w-1/3"
          >
            {product.image ? (
              <>
              <Image
              alt={product.name}
              className="h-full object-contain"
              fill
              sizes="33vw"
              src={product.image}
              />
              <div className='absolute top-0 right-[80px] flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 pb-1'>
                +
            </div>
              <span className='absolute bottom-[20px] left-[80px] bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{product.category.name}</span>
              </>   
              ) : null}
            <div className="absolute bottom-4 right-0 flex items-center justify-center">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl">
                {product.name}
              </div>
            </div>
          </Link>
        
        ))}
      </div>
    </div>
  );
}