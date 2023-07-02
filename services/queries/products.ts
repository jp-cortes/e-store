import { endPoints } from "./endPoints";

export async function getAllProducts(): Promise<Products> {
    const res = await fetch(`${endPoints.products.allProducts}`);
    // const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json();
    return  data;
  }

export async function getProductsById(id: string): Promise<Product> {
    const res = await fetch(`${endPoints.products.getProduct(id)}`);
    const data = await res.json();
    return  data;
  }