import { StringifyOptions } from "querystring";


const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

 export const endPoints = {
  products:{
    allProducts: `${API}/api/${VERSION}/products`,
    getProducts: (limit: string, offset: string) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/api/${VERSION}/products/`,
    getProduct: (id: string) => `${API}/api/${VERSION}/products/${id}`,
    updateProducts: (id: string) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id: string) => `${API}/api/${VERSION}/products/${id}`
  },
  customers:{
    getUsers: `${API}/api/${VERSION}/customers`,
    postUsers: `${API}/api/${VERSION}/customers`,
    profile: (id: string) => `${API}/api/${VERSION}/customers/${id}`,
    patchUser: (id: string) => `${API}/api/${VERSION}/customers/${id}`
  },  
  users: {
    login: `${API}/api/${VERSION}/auth/login`,
    resetPassword: `${API}/api/${VERSION}/auth/recovery`
  },
  categories:{
    getCategories: `${API}/api/${VERSION}/categories`,
    productsByCategory: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
    putCategories: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files:{
    postFiles: `${API}/api/${VERSION}/files/upload`,
    // getFiles: (fileName) => `${API}/api/${VERSION}/${fileName}`
  }
  
}