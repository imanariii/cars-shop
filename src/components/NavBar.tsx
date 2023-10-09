import {
    Card,
    IconButton,
    Input,
    Stack,
    Tab,
    TabList,
    Tabs
} from "@chakra-ui/react";
import {ShoppingCart} from "@mui/icons-material";
import React from "react";
import Logo from "./Logo";
import {useActions} from "../hooks/useActions";
const NavBar = () => {
    const {onCart} = useActions()
    return (
        <>
            <Card padding="24px 10%" bg="global.grey" borderRadius='0'>
                <Stack isInline={true} alignItems='center' justifyContent='space-between'>
                    <Logo />
                    <Stack alignItems='flex-start' width='80%' paddingTop="18px" gap="1rem">
                        <Input
                            placeholder='Введите название товара'
                            variant='filled'
                            colorScheme='orange'
                            color="orange"
                            focusBorderColor="global.orange"
                        />
                        <Tabs variant='soft-rounded' colorScheme='orange'>
                            <TabList>
                                <Tab>Всё</Tab>
                                <Tab>Масла</Tab>
                                <Tab>Колодки</Tab>
                            </TabList>
                        </Tabs>
                    </Stack>
                    <IconButton
                        onClick={() => onCart(true)}
                        bg='global.orange'
                        aria-label='Корзина'
                        title='text'
                        icon={<ShoppingCart />}
                    />
                </Stack>
            </Card>
        </>
    )
}

export default NavBar