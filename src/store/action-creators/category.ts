import {Dispatch} from "redux";
import {CategoryAction, CategoryActionTypes, ICategory} from "../../types/category";

export const createCategory = (category: ICategory) => {
    return async (dispatch: Dispatch<CategoryAction>) => {
        try {
            dispatch({
                type: CategoryActionTypes.CATEGORY_CREATE,
                payload: category
            })

        } catch (e) {
            console.log("Ошибка при создании продукта")
            dispatch({type: CategoryActionTypes.FETCH_CATEGORIES_ERROR, payload: "Ошибка при создании продукта"})
        }
    }
}