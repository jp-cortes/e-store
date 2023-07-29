import { getAllProducts, getProductsById, getProductsByPage } from "./queries/products";
import { getCategories, getCategoryById, getProductsByCategoryId } from "./queries/categories";
import { loginUser, sendRecoveryEmail } from "./queries/users";
import { getCustomerbyId, UpdateCustomer } from "./queries/customers";
import { createOrder, getOrdersByCustomer, getOrdersById, addItemsToOrder } from "./queries/orders";

export {
    getAllProducts,
    getProductsById,
    getProductsByPage,
    getCategories,
    getCategoryById,
    getProductsByCategoryId,
    loginUser,
    sendRecoveryEmail,
    getCustomerbyId, 
    UpdateCustomer,
    createOrder, 
    getOrdersByCustomer,
    getOrdersById,
    addItemsToOrder
}