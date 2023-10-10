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
import {useTypedSelector} from "../hooks/useTypedSelector";
const NavBar = () => {
    const {onCart} = useActions()
    const {categories} = useTypedSelector(state => state.category)

    const onClickIconCart = () => {
        onCart(true)
    }

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
                                {categories && categories.map(category => (
                                    <Tab>{category.title}</Tab>
                                ))}
                            </TabList>
                        </Tabs>
                    </Stack>
                    <IconButton
                        onClick={onClickIconCart}
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