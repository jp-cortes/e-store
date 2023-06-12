
type Props = {}

export function Card({ product }) {
  return (
   
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg mx-auto'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{product.category.name}</span>
            <img className='w-full h-full object-cover rounded-lg' 
            src={product.image} 
            alt="product" />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                +
            </div>
        </figure>
        <p className='flex justify-between px-4'>
            <span className='text-sm font-light capitalize'>{product.name}</span>
            <span className='text-lg font-medium'>${product.price}</span>
        </p>
    </div>
  
  )
}

