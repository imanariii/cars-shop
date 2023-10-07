export enum CategoryActionTypes {
    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
    CATEGORY_CREATE = "CATEGORY_CREATE"
}

interface FetchCategoriesAction {
    type: CategoryActionTypes.FETCH_CATEGORIES;
}

interface FetchCategoriesSuccessAction {
    type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS;
    payload: any[];
}

interface FetchCategoriesErrorAction {
    type: CategoryActionTypes.FETCH_CATEGORIES_ERROR;
    payload: string;
}

export interface ICategory {
    title: string;
    description: string;
}

interface CategoryCreateAction {
    type: CategoryActionTypes.CATEGORY_CREATE;
    payload: ICategory;
}

export interface CategoryState {
    categories: ICategory[];
    loading: boolean;
    error: null | string;
}

export type CategoryAction = FetchCategoriesAction | FetchCategoriesSuccessAction | FetchCategoriesErrorAction | CategoryCreateAction;