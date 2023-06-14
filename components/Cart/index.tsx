import { XMarkIcon } from '@heroicons/react/24/solid';


type Props = {}

export function ShoppingCart(props: Props) {
  return (
    <div className='w-[360px] h-[calc(100vh-68px)] top-[68px] flex flex-col fixed right-0 border border-black rounded-lg bg-white z-30'>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
            <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
            </div>
        </div>
        ShoppingCart

    </div>
  )
}

