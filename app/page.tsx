import { Suspense } from "react";
import { Carousel } from "../components/Carousel";
import { GridHome } from "../components/GridHome";
import { getAllProducts } from "../services";




export default async function Home() {
  const dynamicData = await getAllProducts()



  return (

      <Suspense>
      <GridHome products={dynamicData}/>
      <Carousel/>
    </Suspense>
  
  )
}
