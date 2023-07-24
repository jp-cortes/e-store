import { endPoints } from "./endPoints";

export async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${endPoints.categories.getCategories}`, { cache: 'no-cache' });
    const data = await res.json();
    return  data;
  }

export async function getProductsByCategoryId(id: string): Promise<Products> {
    const res = await fetch(`${endPoints.categories.productsByCategory(id)}`, { cache: 'no-cache' } );
    const { products } = await res.json();
    return products;
  }