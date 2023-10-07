import {Heading} from "@chakra-ui/react";
import { useTypedSelector } from "../hooks/useTypedSelector";


const AdminPanelProducts = () => {

    const {products} = useTypedSelector(state=>state.product)

    return (
        <>
            <Heading>
                Все продукты
            </Heading>
            {products.map((item, i) => (
                <span>{item.title}</span>
            ))}
        </>
    )
}

export default AdminPanelProducts