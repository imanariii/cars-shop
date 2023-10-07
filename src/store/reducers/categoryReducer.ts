import {CategoryAction, CategoryActionTypes, CategoryState} from "../../types/category";

const initialState: CategoryState= {
    categories: [],
    loading: false,
    error: null
}

export const categoryReducer = (state= initialState, action:CategoryAction):CategoryState => {
    switch (action.type) {
        case CategoryActionTypes.FETCH_CATEGORIES:
            return {loading:true, error:null, categories: []}
        case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {loading:false, error:null, categories: action.payload}
        case CategoryActionTypes.CATEGORY_CREATE:
            return {loading:false, error:null, categories: [...state.categories, action.payload]}
        case CategoryActionTypes.FETCH_CATEGORIES_ERROR:
            return {loading:false, error:action.payload, categories: []}
        default:
            return {...state}
    }
}