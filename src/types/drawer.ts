export enum DrawerActionTypes {
    SET_CART_DRAWER = "OPEN_CART_DRAWER",
    SET_INFO_DRAWER = 'RESET_CART',
    ERROR = "ERROR",
}
interface SetCartAction {
    type: DrawerActionTypes.SET_CART_DRAWER;
    payload: boolean;
}

interface SetInfoAction {
    type: DrawerActionTypes.SET_INFO_DRAWER,
    payload: boolean
}

interface ErrorAction {
    type: DrawerActionTypes.ERROR;
    payload: string;
}

export interface DrawerState {
    cartShow: boolean;
    infoShow: boolean;
    error: null | string;
}

export type DrawerAction = ErrorAction | SetCartAction | SetInfoAction;