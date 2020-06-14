import { ADD_TO_CART, REMOVE_FORM_CART, LOG_OUT, LOG_ADMIN_IN, LOG_USER_IN } from "./actionType";

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
})

export const removeFromCart = payload => ({
    type: REMOVE_FORM_CART,
    payload
})

export const logOut = () => ({
    type: LOG_OUT,
})

export const logAdminIn = () => ({
    type: LOG_ADMIN_IN,
})

export const logUserIn = () => ({
    type: LOG_USER_IN,
})