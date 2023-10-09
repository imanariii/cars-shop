import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ProductActionCreators from '../store/action-creators/product'
import * as InfoProductActionCreators from '../store/action-creators/infoProduct'
import * as CategoryActionCreators from '../store/action-creators/category'
import * as CartActionCreators from '../store/action-creators/cart'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...ProductActionCreators,
        ...CategoryActionCreators,
        ...InfoProductActionCreators,
        ...CartActionCreators
    }, dispatch)
}