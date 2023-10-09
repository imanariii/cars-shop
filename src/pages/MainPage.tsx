import NavBar from "../components/NavBar";
import {
    Stack
} from "@chakra-ui/react";
import CardItem from "../components/CardItem";
import React from "react";
import InfoDrawer from "../components/InfoDrawer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import CartDrawer from "../components/CartDrawer";


const MainPage = () => {
    const {products} = useTypedSelector(state=>state.product)
    return (
        <>
            <NavBar />
            <Stack mt='4' paddingTop="12px" spacing='4' isInline={true} wrap='wrap' justifyContent='center' bg='global.lightgrey' marginTop="0">
                {products && products.map(product => (
                    <CardItem item={product} />
                ))}
            </Stack>
            <InfoDrawer />
            <CartDrawer  />
        </>
    )
}

export default MainPage;