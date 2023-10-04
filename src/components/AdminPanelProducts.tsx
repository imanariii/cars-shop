import {Heading} from "@chakra-ui/react";
import { useTypedSelector } from "../hooks/useTypedSelector";


const AdminPanelProducts = () => {
    const {products} = useTypedSelector(state=>state.product)
    console.log(products)
    return (
        <>
            <Heading>
                Все продукты
            </Heading>
            {products.map(item => (
                <h1>{item.title}</h1>
            ))}
        </>
    )
}

export default AdminPanelProducts