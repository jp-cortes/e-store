import { Carousel } from "../components/Carousel";
import GridHome from "../components/GridHome";


export default function Home() {
  return (
    <div className="bg-white px-6">
      <GridHome/>
      <Carousel/>
    </div>
  )
}
