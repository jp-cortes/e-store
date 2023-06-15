import { endPoints } from "./endPoints";

export async function getAllProducts() {
    const res = await fetch(`${endPoints.products.allProducts}`)
    const data = await res.json()
    return  data;
  }

export async function getProductsById(id: string) {
    const res = await fetch(`${endPoints.products.getProduct(id)}`)
    const data = await res.json()
    return  data;
  }