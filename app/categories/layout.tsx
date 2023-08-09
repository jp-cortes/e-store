
import { Suspense } from 'react';
import { Footer } from '../../components';
import { Navbar } from '../../components';
import { AllCategories } from '../../components/AllCategories';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Suspense>
        <div className="flex w-auto md:gap-3">
          <div className="mt-8">
            <AllCategories />
          </div>
          <div className="w-full bg-white ">{children}</div>
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}


