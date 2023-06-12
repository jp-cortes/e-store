const {NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_VERSION} = process.env;

const API = NEXT_PUBLIC_API_URL;
const VERSION = NEXT_PUBLIC_API_VERSION;

 export const endPoints = {
  products:{
    allProducts: `${API}/api/${VERSION}/products`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/api/${VERSION}/products/`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    updateProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}`
  },
  customers:{
    getUsers: `${API}/api/${VERSION}/customers`,
    postUsers: `${API}/api/${VERSION}/customers`,
  },  
  users: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`
  },
  categories:{
    getCategories: `${API}/api/${VERSION}/categories`,
    productsByCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files:{
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName) => `${API}/api/${VERSION}/${fileName}`
  }
  
}