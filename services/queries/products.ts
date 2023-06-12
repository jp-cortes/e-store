import { endPoints } from "./endPoints";

export async function getAllProducts() {
    const res = await fetch(`${endPoints.products.allProducts}`)
    const data = await res.json()
    return  data;
  }