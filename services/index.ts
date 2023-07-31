import { getAllProducts, getProductsById, getProductsByPage } from "./queries/products";
import { getCategories, getCategoryById, getProductsByCategoryId } from "./queries/categories";
import { loginUser, sendRecoveryEmail, updateUserPassword  } from "./queries/users";
import { getCustomerbyId, UpdateCustomer, createCustomer } from "./queries/customers";
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
    createCustomer, 
    updateUserPassword,
    createOrder, 
    getOrdersByCustomer,
    getOrdersById,
    addItemsToOrder
}