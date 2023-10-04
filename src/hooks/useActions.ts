import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ProductActionCreators from '../store/action-creators/product'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ProductActionCreators, dispatch)
}