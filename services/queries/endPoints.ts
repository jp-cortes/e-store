import { StringifyOptions } from "querystring";


const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

 export const endPoints = {
  products:{
    allProducts: `${API}/api/${VERSION}/products`,
    getProducts: (limit: number, offset: number) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/api/${VERSION}/products/`,
    getProduct: (id: string) => `${API}/api/${VERSION}/products/${id}`,
    updateProducts: (id: string) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id: number) => `${API}/api/${VERSION}/products/${id}`
  },
  customers:{
    allCutomers: `${API}/api/${VERSION}/customers`,
    postUsers: `${API}/api/${VERSION}/customers`,
    patchUser: (id: string) => `${API}/api/${VERSION}/customers/${id}`
  },  
  users: {
    login: `${API}/api/${VERSION}/auth/login`,
    account: `${API}/api/${VERSION}/users/account`,
    sendRecoveryEmail: `${API}/api/${VERSION}/auth/recovery`,
    resetUserPassword: `${API}/api/${VERSION}/auth/change-password`,
  },
  categories:{
    getCategories: `${API}/api/${VERSION}/categories`,
    getCategory: (id: string) =>`${API}/api/${VERSION}/categories/${id}`,
    productsByCategory: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
    putCategories: (id: string) => `${API}/api/${VERSION}/categories/${id}`,
  },
  orders: {
    allOrders: `${API}/api/${VERSION}/orders`,
    createOrder: `${API}/api/${VERSION}/orders`,
    addItem: `${API}/api/${VERSION}/orders/add-item`,
    order: (id: string) => `${API}/api/${VERSION}/orders/${id}`,
    updateOrder: (id: number) => `${API}/api/${VERSION}/orders/${id}`,
    myOrders: `${API}/api/${VERSION}/profile/my-orders/`
  },
  files:{
    postFiles: `${API}/api/${VERSION}/files/upload`,
  }
  
}