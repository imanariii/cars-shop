import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay, useToast
} from "@chakra-ui/react";
import CartDrawerItem from "./CartDrawerItem";
import React, {FC} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const CartDrawer:FC = () => {
    const {items} = useTypedSelector(state => state.cart)

    const {cartShow} = useTypedSelector(state => state.drawer)

    const {resetCart, onInfo} = useActions()
    const toast = useToast()
    return (
        <Drawer
            isOpen={cartShow}
            placement='right'
            onClose={() => onInfo(false)}
            size="lg"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Корзина</DrawerHeader>

                <DrawerBody>
                    {items && items.map(item => (
                        <CartDrawerItem {...item} />
                    ))}
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={() => {
                        onInfo(false)
                        resetCart()
                        toast({
                            title: 'Успешно.',
                            description: "Корзина очищена.",
                            status: 'success',
                            duration: 1500,
                            isClosable: true,
                        })
                    }}>
                        Очистить корзину
                    </Button>
                    <Button colorScheme='orange'>Оформить заказ</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CartDrawer;