import { Suspense } from "react";
import { Carousel } from "../components";
import { GridHome } from "../components";
import { Footer } from "../components";
import { Navbar } from "../components";

export const runtime = 'edge';



export default async function Home() {
  return (
    <>
      <Navbar />
      <Suspense>
        <GridHome />
        <Carousel />
        <Suspense>
          <Footer />S
        </Suspense>
      </Suspense>
    </>
  );
}
