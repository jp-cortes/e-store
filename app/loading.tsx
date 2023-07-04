import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className='w-full h-full grid place-content-center'>
        <div>
           Loading...
          <figure>
            <Image src='' width={200} height={200} alt='loader'/>
          </figure>
          </div>
      </div>
    )
  }