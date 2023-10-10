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

    const onCloseDrawer = () => onInfo(false);

    const onClickButtonResetItems = () => {
        onInfo(false)
        resetCart()
        toast({
            title: 'Успешно.',
            description: "Корзина очищена.",
            status: 'success',
            duration: 1500,
            isClosable: true,
        })
    }

    return (
        <Drawer
            isOpen={cartShow}
            placement='right'
            onClose={onCloseDrawer}
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
                    <Button variant='outline' mr={3} onClick={onClickButtonResetItems}>
                        Очистить корзину
                    </Button>
                    <Button colorScheme='orange'>Оформить заказ</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CartDrawer;