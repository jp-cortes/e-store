import { getAllProducts, getProductsById } from "./queries/products";
import { getCategories, getProductsByCategoryName, getProductsByCategoryId } from "./queries/categories";
import { loginUser } from "./queries/users";


export {
    getAllProducts,
    getProductsById,
    getCategories,
    getProductsByCategoryName,
    getProductsByCategoryId,
    loginUser,
}