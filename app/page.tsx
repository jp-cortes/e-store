import { Suspense } from "react";
import { Carousel } from "../components/Carousel";
import { GridHome } from "../components/GridHome";




export default function Home() {
  return (

      <Suspense>
      <GridHome/>
      <Carousel/>
    </Suspense>
  
  )
}
