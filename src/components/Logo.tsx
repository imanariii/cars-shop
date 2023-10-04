import {Heading, Highlight, useDisclosure} from "@chakra-ui/react";
import React from "react";
import LoginDrawer from "./LoginDrawer";


const Logo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Heading lineHeight='tall' color='white' onDoubleClick={onOpen} style={{cursor: 'pointer'}}>
                <Highlight
                    query='Helper'
                    styles={{ px: '4', py: '1', rounded: 'full', bg: 'orange.400' }}
                >
                    CarsHelper
                </Highlight>
            </Heading>
            <LoginDrawer onClose={onClose} isOpen={isOpen} />
        </>
    )
}

export default Logo;