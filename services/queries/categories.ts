import { endPoints } from "./endPoints";

export async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${endPoints.categories.getCategories}`, { cache: 'no-store' });
    const data = await res.json();
    return  data;
  }

export async function getProductsByCategoryName(categoryName: string): Promise<Products> {
    const res = await fetch(`http://localhost:3000/api/products`, { cache: 'no-store' });
    const { data } = await res.json();
    return data.filter((product: Product) => product.category.name === categoryName);
  }

export async function getProductsByCategoryId(id: string): Promise<Products> {
    const res = await fetch(`${endPoints.categories.productsByCategory(id)}`, { cache: 'no-store' } );
    const { products } = await res.json();
    return products;
  }