import {Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Stack} from "@chakra-ui/react";
import React, {FC} from "react";
import {IProduct} from "../types/product";
import {useActions} from "../hooks/useActions";

interface IProps {
    onOpen: () => void,
    item: IProduct
}
const CardItem:FC<IProps> = ({onOpen, item}) => {
    const {setInfoProduct} = useActions()
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
            {/*<Divider/>*/}
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='orange'>
                        Добавить в корзину
                    </Button>
                    <Button variant='ghost' colorScheme='orange' onClick={() => {
                        setInfoProduct(item)
                        onOpen()
                    }}>
                        Подробнее
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CardItem;