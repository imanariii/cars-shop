import NavBar from "../components/NavBar";
import {
    Stack, useDisclosure
} from "@chakra-ui/react";
import CardItem from "../components/CardItem";
import React from "react";
import InfoDrawer from "../components/InfoDrawer";


const MainPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <NavBar />
            <Stack mt='4' paddingTop="12px" spacing='4' isInline={true} wrap='wrap' justifyContent='center' bg='global.lightgrey' marginTop="0">
                <CardItem onOpen={onOpen} />
                <CardItem onOpen={onOpen} />
                <CardItem onOpen={onOpen} />
                <CardItem onOpen={onOpen} />
                <CardItem onOpen={onOpen} />
                <CardItem onOpen={onOpen} />
                <CardItem onOpen={onOpen} />
                <CardItem onOpen={onOpen} />
            </Stack>
            <InfoDrawer isOpen={isOpen}  onClose={onClose} />
        </>
    )
}

export default MainPage;