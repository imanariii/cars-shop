import {Dispatch} from "redux";
import {IProduct, ProductAction, ProductActionTypes} from "../../types/product";
import axios from "axios";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get('http://localhost:8080/posts')
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: "Ошибка при загрузке продуктов"})
        }
    }
}

export const createProduct = (product: IProduct) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({
                type: ProductActionTypes.PRODUCT_CREATE,
                payload: product
            })
        } catch (e) {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: "Ошибка при создании продукта"})
        }
    }
}