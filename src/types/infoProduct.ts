import {IProduct} from "./product";

export enum InfoProductActionTypes {
    FETCH_INFO_PRODUCT = "FETCH_INFO_PRODUCT",
    FETCH_INFO_PRODUCT_SUCCESS = "FETCH_INFO_PRODUCT_SUCCESS",
    RESET_INFO_PRODUCT = "RESET_INFO_PRODUCT",
    FETCH_INFO_PRODUCT_ERROR = "FETCH_INFO_PRODUCT_ERROR"
}

interface FetchInfoProductAction {
    type: InfoProductActionTypes.FETCH_INFO_PRODUCT;
}

interface FetchInfoProductSuccessAction {
    type: InfoProductActionTypes.FETCH_INFO_PRODUCT_SUCCESS;
    payload: IProduct;
}

interface ResetInfoProductAction {
    type: InfoProductActionTypes.RESET_INFO_PRODUCT;
}


interface FetchInfoProductErrorAction {
    type: InfoProductActionTypes.FETCH_INFO_PRODUCT_ERROR;
    payload: string;
}

export interface InfoProductState {
    info: IProduct | null;
    loading: boolean;
    error: null | string;
}

export type InfoProductAction = FetchInfoProductAction | FetchInfoProductSuccessAction | FetchInfoProductErrorAction | ResetInfoProductAction;