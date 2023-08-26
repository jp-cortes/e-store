
import Cookie  from 'js-cookie';
import { endPoints } from "./endPoints";
import { CreateProductValues, UpdateProductValues } from '../../utils/schemas/Products';

export async function getAllProducts(): Promise<Products> {
    const res = await fetch(`${endPoints.products.allProducts}`, 
    { cache: 'no-cache'}
    );
    const data = await res.json();
    return  data;
  }

export async function getProductsByPage(limit: number, offset: number): Promise<Products> {
    const res = await fetch(`${endPoints.products.getProducts(limit, offset)}`, 
    { cache: 'no-cache'}
    );
    const data = await res.json();
    return  data;
  }

export async function getProductsById(id: string): Promise<Product> {
    const res = await fetch(`${endPoints.products.getProduct(id)}`, 
    { cache: 'no-cache'}
    );
    const data = await res.json();
    return  data;
  }

export async function createProduct(product: CreateProductValues): Promise<Product | null> {
  const { 
    name, 
    price,
    description,
    categoryId, 
    image
   } = product;
  
  const token = Cookie.get('token');
  //Set the Authorization header with the token
  if(!token) return null;

  const headers = {
    'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };
    const res = await fetch(`${endPoints.products.postProducts}`,
    {
      method: 'POST',
      headers: headers,
    
      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: name,
        price: price,
        description: description,
        categoryId: categoryId,
        image: image,
      })
    } 
    );
    const data = await res.json();
    return  data;
  }
export async function updateProduct(id: string, updateProduct: UpdateProductValues): Promise<Product | null> {
  const token = Cookie.get('token');
  //Set the Authorization header with the token
  if(!token) return null;

  const headers = {
    'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };
    const res = await fetch(`${endPoints.products.updateProducts(id)}`,
    {
      method: 'PATCH',
      headers: headers,
    
      //make sure to serialize your JSON body
      body: JSON.stringify({
        ...updateProduct
      })
    } 
    );
    const data = await res.json();
    return  data;
  }

export async function deleteProduct(id: number): Promise<void | null> {
  const token = Cookie.get('token');
  //Set the Authorization header with the token
  if(!token) return null;

  const headers = {
    'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };
    const res = await fetch(`${endPoints.products.deleteProducts(id)}`,
    {
      method: 'DELETE',
      headers: headers
    } 
    );
    const data = await res.json();
    return  data;
  }