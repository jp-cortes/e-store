import { AllCategories } from '../../components/AllCategories';

import { Suspense } from 'react';
import { Footer } from '../../components/Footer';

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
  
    <Suspense>
      <div className="flex w-auto md:gap-3">
        <div className="mt-8">
          <AllCategories />
        </div>
        <div className="w-full bg-white ">{children}</div>
        
      </div>
      <Suspense>
        <Footer/>
      </Suspense>
    </Suspense>
    
  );
}


export default ProductsLayout;