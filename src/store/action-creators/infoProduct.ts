import {Dispatch} from "redux";
import {InfoProductAction, InfoProductActionTypes} from "../../types/infoProduct";
import {IProduct} from "../../types/product";

export const fetchInfoProduct = (id: number) => {
    return async (dispatch: Dispatch<InfoProductAction>) => {
        try {
            dispatch({
                type: InfoProductActionTypes.FETCH_INFO_PRODUCT
            })
        } catch (e) {
            dispatch({type: InfoProductActionTypes.FETCH_INFO_PRODUCT_ERROR, payload: "Ошибка при получении информации продукта"})
        }
    }
}

export const setInfoProduct = (product: IProduct | null) => {
    return async (dispatch: Dispatch<InfoProductAction>) => {
        try {
            dispatch({
                type: InfoProductActionTypes.FETCH_INFO_PRODUCT
            })
            setTimeout(() =>
                dispatch({
                    type: InfoProductActionTypes.FETCH_INFO_PRODUCT_SUCCESS,
                    payload: product
                }), 2000)
        } catch (e) {
            dispatch({type: InfoProductActionTypes.FETCH_INFO_PRODUCT_ERROR, payload: "Ошибка при фиксации информации продукта"})
        }
    }
}
