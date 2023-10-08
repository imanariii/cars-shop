export enum CartActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    EDIT_COUNT = "EDIT_COUNT",
    ERROR = "ERROR",
}
interface AddProductAction {
    type: CartActionTypes.ADD_PRODUCT;
    payload: ICartProduct;
}

interface RemoveProductAction {
    type: CartActionTypes.REMOVE_PRODUCT;
    payload: number;
}

interface EditCountAction {
    type: CartActionTypes.EDIT_COUNT;
    payload: {
        id: number,
        count: number
    };
}

interface ErrorAction {
    type: CartActionTypes.ERROR;
    payload: string;
}


export interface ICartProduct {
    id: number;
    title: string;
    category: string;
    count: number;
    price: number;
}

export interface CartState {
    items: ICartProduct[];
    loading: boolean;
    error: null | string;
}

export type CartAction = ErrorAction | EditCountAction | AddProductAction | RemoveProductAction;