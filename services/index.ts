import { getAllProducts, getProductsById, getProductsByPage } from "./queries/products";
import { getCategories, getProductsByCategoryName, getProductsByCategoryId } from "./queries/categories";
import { loginUser, sendRecoveryEmail } from "./queries/users";
import { getCustomerbyId, UpdateCustomer } from "./queries/customers";
import { createOrder, getOrdersByCustomer, getOrdersById, addItemsToOrder } from "./queries/orders";

export {
    getAllProducts,
    getProductsById,
    getProductsByPage,
    getCategories,
    getProductsByCategoryName,
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