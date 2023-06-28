import { Suspense } from "react";
import { Carousel } from "../components/Carousel";
import { GridHome } from "../components/GridHome";
import { getAllProducts } from "../services";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";




export default async function Home() {
  const products = await getAllProducts();



  return (
        <>
      <Navbar />
      <Suspense>
      <GridHome products={products}/>
      <Carousel/>
      <Suspense>
        <Footer/>
      </Suspense>
    </Suspense>
        </>
  
  )
}
