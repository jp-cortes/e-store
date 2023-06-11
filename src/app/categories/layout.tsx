import { AllCategories } from '../../components/AllCategories';

import { Suspense } from 'react';

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <div className="flex w-auto md:gap-3">
        <div className="mt-8">
          <AllCategories />
        </div>
        <div className="w-full bg-red-300 ">{children}</div>
        
      </div>
    </Suspense>
  );
}


export default CategoriesLayout;