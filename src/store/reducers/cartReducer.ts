import {CartAction, CartActionTypes, CartState, ICartProduct} from "../../types/cart";

const initialState:CartState = {
    items: [],
    loading: false,
    error: null
}

export const cartReducer = (state= initialState, action:CartAction):CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {loading:false, error:null, items: [...state.items, action.payload]}

        case CartActionTypes.REMOVE_PRODUCT:
            let removedCartItemsList = state.items.filter(item => item.id !== action.payload)
            return {loading:false, error:null, items: removedCartItemsList}

        case CartActionTypes.EDIT_COUNT:
            let editCountCartItemList:ICartProduct[] = []
            state.items.forEach(item => {
                if(item.id === action.payload.id) {
                    item.count = action.payload.count;
                }
                editCountCartItemList.push(item)
            })
            return {loading:false, error:null, items: editCountCartItemList}

        case CartActionTypes.ERROR:
            return {loading:false, error:action.payload, items: []}
        default:
            return {...state}
    }
}