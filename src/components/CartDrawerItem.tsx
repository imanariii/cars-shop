import React, {FC, useState} from "react";
import {Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Input, Stack, useToast} from "@chakra-ui/react";
import {ICartProduct} from "../types/cart";
import {useActions} from "../hooks/useActions";

const CartDrawerItem: FC<ICartProduct> = (item)=> {
    const [count, setCount] = useState(1)
    const {editCountCart, removeCart} = useActions()
    const toast = useToast()

    const incrementCount = () => {
        if(count < 3) {
            setCount(prevState => prevState + 1)
            editCountCart({id: item.id, count: count})
        } else {
            toast({
                title: 'Ошибка.',
                description: "Максимальное кол-во 3шт.",
                status: 'error',
                duration: 1500,
                isClosable: true,
            })
        }
    }

    const decrementCount = () => {
        if(count > 1) {
            setCount(prevState => prevState-1)
            editCountCart({id: item.id, count: count})
        } else {
            removeCart(item.id)
            toast({
                title: 'Успешно.',
                description: "Товар удален.",
                status: 'success',
                duration: 1500,
                isClosable: true,
            })
        }
    }



    return (
        <Card>
            <CardBody>
                <Stack isInline={true} alignItems='center'>
                    <img
                        src='https://ir.ozone.ru/s3/multimedia-d/wc1000/6709518337.jpg'
                        alt='Green double couch with wooden legs'
                        style={{borderRadius: '16px', width: '100px', height: '100px'}}
                    />
                        <Heading size='md'>{item.title}</Heading>
                        <span style={{color: 'orange', fontSize: '24px'}}>
                        {item.price}₽
                    </span>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Stack isInline={true} alignItems='center' justifyContent='center'>
                        <Button onClick={decrementCount}>-</Button>
                        <Input value={count} readOnly={true} width="50px" textAlign='center' />
                        <Button onClick={incrementCount}>+</Button>
                    </Stack>
                    <Button variant='solid' colorScheme='orange' onClick={() => {
                        removeCart(item.id)
                        toast({
                            title: 'Успешно.',
                            description: "Товар удален.",
                            status: 'success',
                            duration: 1500,
                            isClosable: true,
                        })
                    }}>
                        Удалить
                    </Button>
                    <Button variant='ghost' colorScheme='orange'>
                        Подробнее
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CartDrawerItem