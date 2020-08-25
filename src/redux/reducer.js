import { ADD_TO_CART, REMOVE_FORM_CART, LOG_OUT, LOG_ADMIN_IN, LOG_USER_IN } from "./actionType";

import userdetails from '../utils/userdetails.json'
import data from "../utils/data.json";
import carouselData from "../utils/carouselData.json";



function loadData(key){
    try{
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
    }
    catch(err){
        return undefined
        // important to give initState undefined, if null, then your redux store does not goto the default case in reducer while initialising
    }
}

const initState = loadData('state') || {
    data: data,
    userLoggedIn: false,
    adminLoggedIn: false,
    cart: [],
    userDetails: userdetails,
    carouselData: carouselData,
    selected: {},
    orderDetails: []
}

// to save data we can use a helper function 

function saveData(key, data){
    localStorage.setItem(key,JSON.stringify(data))
}



console.log(initState)

const reducer = (state = initState , { type, payload }) => {
    switch (type) {

        case ADD_TO_CART:
            if(state.selected[payload])
                state.selected[payload]++
            else
                state.selected[payload] = 1
            return { 
                ...state,
                cart: [...state.cart,state.data.find(item => item.id === payload)],
                selected:{...state.selected}
            }

        case REMOVE_FORM_CART:
            return { ...state }

        case LOG_OUT:
            return {
                ...state, 
                userLoggedIn: false,
                adminLoggedIn: false,
                cart: [],
                selected: {}
            }
        
        case LOG_ADMIN_IN:
            return{
                ...state,
                adminLoggedIn: true,
            }

        case LOG_USER_IN:
            return {
                ...state,
                userLoggedIn: true,
            }

        default:
            return state
    }
}

export default reducer