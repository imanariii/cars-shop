export enum ProductActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
    PRODUCT_CREATE = "PRODUCT_CREATE"
}

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS;
}

interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: any[];
}

interface FetchProductsErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}

export interface IProduct {
    title: string;
    description: string;
    category: string;
    count: number;
    saleCount: number;
    price: string;
}

interface ProductCreateAction {
    type: ProductActionTypes.PRODUCT_CREATE;
    payload: IProduct;
}

export interface ProductState {
    products: IProduct[];
    loading: boolean;
    error: null | string;
}

export type ProductAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction | ProductCreateAction;