import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, useToast} from "@chakra-ui/react";
import React, {FC} from "react";
import {IProduct} from "../types/product";
import {useActions} from "../hooks/useActions";
import {ICartProduct} from "../types/cart";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface IProps {
    item: IProduct
}
const CardItem:FC<IProps> = ({item}) => {
    const {setInfoProduct} = useActions()
    const {items} = useTypedSelector(state => state.cart)

    const toast = useToast()

    const itemCart: ICartProduct = {
        id: items.length+1,
        title: item.title,
        price: +item.price,
        count: 1,
        category: item.category
    }
    const {addCart, onInfo} = useActions()

    const onClickButtonAddToCart = () => {
        addCart(itemCart)
        console.log(itemCart)
        toast({
            title: 'Продукт добавлен в корзину.',
            description: "Мы успешно добавили продукт в корзину.",
            status: 'success',
            duration: 1500,
            isClosable: true,
        })

    }

    const onClickButtonInfoProduct = () => {
        setInfoProduct(item)
        onInfo(true)
    }

    return (
        <Card maxW='sm'>
            <CardBody>
                <img
                    src='https://ir.ozone.ru/s3/multimedia-d/wc1000/6709518337.jpg'
                    alt='Green double couch with wooden legs'
                    style={{borderRadius: '16px'}}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{item?.title}</Heading>
                    <span style={{color: 'orange', fontSize: '24px'}}>
                        {item?.price + '₽'}
                    </span>
                </Stack>
            </CardBody>
            <Divider/>
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='orange' onClick={onClickButtonAddToCart}>
                        Добавить в корзину
                    </Button>
                    <Button variant='ghost' colorScheme='orange' onClick={onClickButtonInfoProduct}>
                        Подробнее
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardItem;