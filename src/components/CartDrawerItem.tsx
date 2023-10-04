import React, {FC, useState} from "react";
import {Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Input, Stack} from "@chakra-ui/react";

// interface IProps {
//
// }
const CartDrawerItem: FC = ()=> {
    const [count, setCount] = useState(1)
    const incrementCount = () => {
        if(count < 3) {
            setCount(prevState => prevState + 1)
        } else {
            alert('Розничный заказ: до 3 шт')
        }
    }

    const decrementCount = () => {
        if(count > 1) {
            setCount(prevState => prevState-1)
        } else {
            alert('Минимум 1 шт')
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
                        <Heading size='md'>Моторное масло ZIC X7 5W-40 Синтетическое 4 л</Heading>
                        <span style={{color: 'orange', fontSize: '24px'}}>
                        3499₽
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
                    <Button variant='solid' colorScheme='orange'>
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