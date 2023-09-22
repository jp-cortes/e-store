import { Suspense } from "react";
import { Carousel } from "../components";
import { GridHome } from "../components";
import { Footer } from "../components";
import { Navbar } from "../components";
import { GridHomeSkeleton } from "../components/Skeletons/GridHomeSkeleton";

export const runtime = 'edge';



export default async function Home() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<GridHomeSkeleton />}>
        <GridHome />
        <Carousel />
        <Suspense>
          <Footer />S
        </Suspense>
      </Suspense>
    </>
  );
}
