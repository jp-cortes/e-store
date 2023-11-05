


export function GridHomeSkeleton(){
  return (
    <>
    <div className="h-[100vh] grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 md:px-4 gap-2 px-2 mt-2">
        <div className='animate-pulse md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5  rounded-lg relative' >
            <div className='mb-2 w-full h-4/5 bg-gray-300 rounded-lg'>
            </div>
        </div>
        <div className='animate-pulse md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3  rounded-lg relative' >
            <div className='mb-2 w-full h-4/5 bg-gray-300 rounded-lg'>
            </div>
        </div>
        <div className='animate-pulse md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-5 rounded-lg relative' >
            <div className='mb-2 w-full h-4/5 bg-gray-300 rounded-lg'>
            </div>
        </div>
    </div>
    </>
  )
}

