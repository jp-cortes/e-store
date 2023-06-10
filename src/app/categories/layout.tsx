import { AllCategories } from '../../components/AllCategories';

import { Suspense } from 'react';

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <div className="flex w-auto">
        <div className=" ml-7 ">
          <AllCategories />
        </div>
        <div className="grid justify-center w-full bg-red-300 mx-auto">{children}</div>
        
      </div>
    </Suspense>
  );
}


export default CategoriesLayout;