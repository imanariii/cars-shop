import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ProductActionCreators from '../store/action-creators/product'
import * as CategoryActionCreators from '../store/action-creators/category'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({...ProductActionCreators, ...CategoryActionCreators}, dispatch)
}