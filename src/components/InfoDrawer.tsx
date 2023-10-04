import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import ActiveCartInfo from "./ActiveCartInfo";
import React, {FC} from "react";


interface IProps {
    onClose: () => void,
    isOpen: boolean
}

const InfoDrawer:FC<IProps> = ({onClose, isOpen}) => {
    return (
        <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xl'>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>Информация о товаре</DrawerHeader>
                <DrawerBody>
                    <ActiveCartInfo />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default InfoDrawer;