import {Dispatch} from "redux";
import {DrawerAction, DrawerActionTypes} from "../../types/drawer";

export const onCart = (value: boolean) => {
    return async (dispatch: Dispatch<DrawerAction>) => {
        try {
            dispatch({
                type: DrawerActionTypes.SET_CART_DRAWER,
                payload: value
            })

        } catch (e) {
            dispatch({type: DrawerActionTypes.ERROR, payload: "Ошибка при открытии/закрытии корзины"})
        }
    }
}

export const onInfo = (value: boolean) => {
    return async (dispatch: Dispatch<DrawerAction>) => {
        try {
            dispatch({
                type: DrawerActionTypes.SET_INFO_DRAWER,
                payload: value
            })

        } catch (e) {
            dispatch({type: DrawerActionTypes.ERROR, payload: "Ошибка при открытии/закрытии модального окна информации"})
        }
    }
}