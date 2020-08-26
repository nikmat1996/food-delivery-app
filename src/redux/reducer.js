import { ADD_TO_CART, REMOVE_FROM_CART, LOG_OUT, LOG_ADMIN_IN, LOG_USER_IN } from "./actionType";

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


const reducer = (state = initState , { type, payload }) => {
    let { selected, cart } = state 
    switch (type) {

        case ADD_TO_CART:
            return { 
                ...state,
                cart: [...cart, state.data.find(item => item.id === payload)],
                selected:{...selected, [payload] : payload in selected ? selected[payload] + 1 : 1}
            }

        case REMOVE_FROM_CART:
            let newCart =[], found = false;
            for(let item of state.cart){
                if(item.id === payload)
                    if(!found){ 
                        found = true
                    } else {
                        newCart.push(item)
                    }
                else
                    newCart.push(item)
            }
            return { 
                ...state,
                cart : [...newCart],
                selected : {...selected, [payload] : selected[payload] - 1}
            }

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