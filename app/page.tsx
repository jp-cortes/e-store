import { Carousel } from "../components/Carousel";
import { GridHome } from "../components/GridHome";
import { ProductDetail } from "../components/ProductDetail";


export default function Home() {
  return (
    <div className="bg-white px-6">
       <ProductDetail/>
      <GridHome/>
      <Carousel/>
    </div>
  )
}
