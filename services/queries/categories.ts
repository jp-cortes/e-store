import { endPoints } from "./endPoints";

export async function getCategories() {
    const res = await fetch(`${endPoints.categories.getCategories}`);
    const data = await res.json();
    return  data;
  }

export async function getProductsByCategoryName(categoryName: string) {
    const res = await fetch(`http://localhost:3000/api/categories`);
    const { data } = await res.json();
    return data.filter((product: Product) => product.category.name === categoryName);
  }

export async function getProductsByCategoryId(id: string) {
    const res = await fetch(`${endPoints.categories.productsByCategory(id)}`);
    const { products } = await res.json();
    return products;
  }