'use client'


export function Pagination({
  data,
  isPreviousData,
    page, 
    setPage,
    limit,
    setLimit,
} : {
  data: Products
  isPreviousData: boolean,
    page: number, 
    setPage: Function,
    limit: number,
    setLimit: Function,
}) {
  //pages
const PAGES = [1, 2, 3, 4, 5, 6, 7, 8];

function plusPage(p: number) {    
  //function for specific pages    
        if(page !== p) {
            setPage(p * limit);
        }
}

function nextPage() {   
  // function to move forward between pages      
          if (!isPreviousData && data) {
            setPage(limit + page)
          }
}

function previousPage() {
  // funtion to move back between pages
  setPage( page - limit);
}

    
  return (
    <div className="flex items-center justify-end border border-borderGreen bg-lightGreen px-4 py-3 sm:px-6">
  
  <div className="">
    {/* <div>
      <p className="text-sm text-gray-700"> 
        Showing
        {' '} 
        <span className="font-medium">{1}</span>
        {' '}
        to
        {' '}
        <span className="font-medium">{10}</span>{' '}
        
        Products
      </p>
    </div> */}
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        {page > 0 &&  <button 
        onClick={previousPage}
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-borderGreen ring-1 ring-inset ring-borderGreen hover:bg-gray-300 focus:z-20 focus:outline-offset-0">
          
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
          
        </button>}
        
        {PAGES.map((number, index) => <Pages key={index} pageNumber={number} callBack={() => plusPage(number) }/>)}
       {page > 70 ? null : <button 
        onClick={nextPage}
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-borderGreen ring-1 ring-inset ring-borderGreen hover:bg-gray-300 focus:z-20 focus:outline-offset-0">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
          
        </button>}
      </nav>
    </div>
  </div>
</div>
  )
}
function Pages ({pageNumber, callBack} : {pageNumber: number, callBack: Function}) {
    return (
        <button onClick={() => callBack()}
        className="focus:bg-buttonGreen relative inline-flex items-center px-4 py-2 text-sm font-semibold text-borderGreen ring-1 ring-inset ring-borderGreen hover:bg-hoverGreen hover:text-lightGreen focus:z-20 focus:outline-offset-0 ">
            {pageNumber}
            </button>
    )
}