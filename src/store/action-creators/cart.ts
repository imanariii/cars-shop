import {Dispatch} from "redux";
import {CartAction, CartActionTypes, ICartProduct} from "../../types/cart";

export const addCart = (product: ICartProduct) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.ADD_PRODUCT,
                payload: product
            })
        } catch (e) {
            dispatch({type: CartActionTypes.ERROR, payload: "Ошибка при добавлении в корзину"})
        }
    }
}

export const removeCart = (id: number) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.REMOVE_PRODUCT,
                payload: id
            })
        } catch (e) {
            dispatch({type: CartActionTypes.ERROR, payload: "Ошибка при добавлении в корзину"})
        }
    }
}

export const editCountCart = (item: {id: number, count: number}) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.EDIT_COUNT,
                payload: item
            })
        } catch (e) {
            dispatch({type: CartActionTypes.ERROR, payload: "Ошибка при изменения кол-ва товара в корзине"})
        }
    }
}

export const resetCart = () => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.RESET_CART
            })
        } catch (e) {
            dispatch({type: CartActionTypes.ERROR, payload: "Ошибка при очистке корзины"})
        }
    }
}