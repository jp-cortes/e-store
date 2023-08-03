import { getAllProducts, getProductsById, getProductsByPage } from "./queries/products";
import { getCategories, getCategoryById, getProductsByCategoryId } from "./queries/categories";
import { loginUser, sendRecoveryEmail, updateUserPassword  } from "./queries/users";
import { getAllCustomers, getCustomerbyId, UpdateCustomer, createCustomer } from "./queries/customers";
import { getOrders, createOrder, getOrdersByCustomer, getOrdersById, addItemsToOrder } from "./queries/orders";

export {
    getAllProducts,
    getProductsById,
    getProductsByPage,
    getCategories,
    getCategoryById,
    getProductsByCategoryId,
    loginUser,
    sendRecoveryEmail,
    getAllCustomers,
    getCustomerbyId, 
    UpdateCustomer,
    createCustomer, 
    updateUserPassword,
    getOrders,
    createOrder, 
    getOrdersByCustomer,
    getOrdersById,
    addItemsToOrder
}