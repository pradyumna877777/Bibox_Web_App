import { ADD_TO_CART , ADD_ACTIVE_ITEM , REMOVE_ACTIVE_ITEM , UPDATE_FINAL_ITEMS} from './action-types/cart-actions.js'

//add cart action
export const addToCart= ()=>{
    return{
        type: ADD_TO_CART
    }
}
//add active action
export const addActiveItem= (id)=>{
    return{
        type: ADD_ACTIVE_ITEM,
        id
    }
}
//remove active action
export const removeActiveItem= (id)=>{
    return{
        type: REMOVE_ACTIVE_ITEM,
        id
    }
}

export const updateFinalItems= (items)=>{
    return{
        type: UPDATE_FINAL_ITEMS,
        items
    }
}