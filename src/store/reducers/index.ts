import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {categoryReducer} from "./categoryReducer";
import {infoProductReducer} from "./infoProductReducer";
import {cartReducer} from "./cartReducer";


export const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
    infoProduct: infoProductReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>