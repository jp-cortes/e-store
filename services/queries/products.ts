import { endPoints } from "./endPoints";

export async function getAllProducts(): Promise<Products> {
    const res = await fetch(`${endPoints.products.allProducts}`, { cache: 'no-store' });
    const  data  = await res.json();
    return  data;
  }

export async function getProductsById(id: string): Promise<Product> {
    const res = await fetch(`${endPoints.products.getProduct(id)}`, { cache: 'no-store' });
    const data = await res.json();
    return  data;
  }