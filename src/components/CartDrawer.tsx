import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/react";
import CartDrawerItem from "./CartDrawerItem";
import React, {FC} from "react";


interface IProps {
    isOpen: boolean,
    onClose: () => void
}

const CartDrawer:FC<IProps> = ({isOpen, onClose}) => {
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
                    <CartDrawerItem />
                    <CartDrawerItem />
                    <CartDrawerItem />
                    <CartDrawerItem />
                    <CartDrawerItem />
                    <CartDrawerItem />
                    <CartDrawerItem />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Очистить корзину
                    </Button>
                    <Button colorScheme='orange'>Оформить заказ</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CartDrawer;