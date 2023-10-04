import {Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Stack} from "@chakra-ui/react";
import React, {FC} from "react";

interface IProps {
    onOpen: () => void
}
const CardItem:FC<IProps> = ({onOpen}) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <img
                    src='https://ir.ozone.ru/s3/multimedia-d/wc1000/6709518337.jpg'
                    alt='Green double couch with wooden legs'
                    style={{borderRadius: '16px'}}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Моторное масло ZIC X7 5W-40 Синтетическое 4 л</Heading>
                    {/*<span style={{color: 'orangered', fontSize: '16px'}}>*/}
                    {/*    Синтетическое моторное масло для двигателей легковых автомобилей.*/}
                    {/*    Для использования в бензиновых, дизельных (без сажевых фильтров) и газовых двигателях легковых автомобилей.*/}
                    {/*</span>*/}
                    <span style={{color: 'orange', fontSize: '24px'}}>
                        3499₽
                    </span>
                </Stack>
            </CardBody>
            {/*<Divider/>*/}
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='orange'>
                        Добавить в корзину
                    </Button>
                    <Button variant='ghost' colorScheme='orange' onClick={onOpen}>
                        Подробнее
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardItem;