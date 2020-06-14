import { ADD_TO_CART, REMOVE_FORM_CART, LOG_OUT, LOG_ADMIN_IN, LOG_USER_IN } from "./actionType";

import userdetails from '../utils/userdetails.json'
import data from "../utils/data.json";
import carouselData from "../utils/carouselData.json";

const initState = {
    data: data,
    userLoggedIn: false,
    adminLoggedIn: false,
    cart: [],
    userDetails: userdetails,
    carouselData: carouselData
}



const reducer = (state = initState , { type, payload }) => {
    switch (type) {

        case ADD_TO_CART:
            return { ...state }

        case REMOVE_FORM_CART:
            return { ...state }

        case LOG_OUT:
            return {
                ...state, 
                userLoggedIn: false,
                adminLoggedIn: false
            }
        
        case LOG_ADMIN_IN:
            return{
                ...state,
                adminLoggedIn: true
            }

        case LOG_USER_IN:
            return {
                ...state,
                userLoggedIn: true
            }

        default:
            return state
    }
}

export default reducer