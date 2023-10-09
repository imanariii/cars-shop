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


interface IProps {
    isOpen: boolean,
    onClose: () => void
}

const CartDrawer:FC<IProps> = ({isOpen, onClose}) => {
    const {items} = useTypedSelector(state => state.cart)
    const {resetCart} = useActions()
    const toast = useToast()
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
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
                        onClose()
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