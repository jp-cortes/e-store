import { Suspense } from "react";
import { Carousel } from "../components";
import { GridHome } from "../components";
import { Footer } from "../components";
import { Navbar } from "../components";
import { getAllProducts } from "../services";




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
