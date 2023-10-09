import {DrawerAction, DrawerActionTypes, DrawerState} from "../../types/drawer";

const initialState:DrawerState = {
    cartShow: false,
    infoShow: false,
    error: null
}

export const drawerReducer = (state= initialState, action:DrawerAction):DrawerState => {
    switch (action.type) {
        case DrawerActionTypes.SET_CART_DRAWER:
            return {error:null, cartShow: action.payload, infoShow: false}

        case DrawerActionTypes.SET_INFO_DRAWER:
            return {error:null, cartShow: false,  infoShow: action.payload}

        case DrawerActionTypes.ERROR:
            return {error:action.payload, cartShow: false, infoShow: false}
        default:
            return {...state}
    }
}