import {ProductAction, ProductActionTypes, ProductState} from "../../types/product";

const initialState:ProductState = {
    products: [{
        title: 'Тест1',
        description: 'Описание тестового продукта',
        saleCount: 0,
        count: 0,
        price: '100',
        category: 'Масло'
    }, {
        title: 'Тест2',
        description: 'Описание тестового продукта',
        saleCount: 0,
        count: 0,
        price: '100',
        category: 'Колодки'
    }],
    loading: false,
    error: null
}

export const productReducer = (state= initialState, action:ProductAction):ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS:
            return {loading:true, error:null, products: []}
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {loading:false, error:null, products: action.payload}
        case ProductActionTypes.PRODUCT_CREATE:
            return {loading:false, error:null, products: [...state.products, action.payload]}
        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return {loading:false, error:action.payload, products: []}
        default:
            return {...state}
    }
}