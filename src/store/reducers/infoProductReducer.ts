import {InfoProductAction, InfoProductActionTypes, InfoProductState} from "../../types/infoProduct"


const initialState : InfoProductState = {
    info: null,
    loading: false,
    error: null
}

export const infoProductReducer = (state= initialState, action: InfoProductAction): InfoProductState => {
    switch (action.type) {
        case InfoProductActionTypes.FETCH_INFO_PRODUCT:
            return {loading:true, error:null, info: null}
        case InfoProductActionTypes.FETCH_INFO_PRODUCT_SUCCESS:
            return {loading:false, error:null, info: action.payload}
        case InfoProductActionTypes.FETCH_INFO_PRODUCT_ERROR:
            return {loading:false, error:action.payload, info: null}
        default:
            return {...state}
    }
}