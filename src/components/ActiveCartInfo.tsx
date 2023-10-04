import {Button, Card, CardBody, CardFooter, Divider, Heading, Stack} from "@chakra-ui/react";
import React from "react";
import CategoryName from "./CategoryName";

const ActiveCartInfo = () => {
    return (
        <Card bg="transparent">
            <CardBody bg='transparent' width="100%" minHeight='80vh'>
                <Stack  isInline={true}>
                    <img
                        src='https://ir.ozone.ru/s3/multimedia-d/wc1000/6709518337.jpg'
                        alt='Green double couch with wooden legs'
                        style={{borderRadius: '16px'}}
                        width="300px"
                        height="300px"
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Моторное масло ZIC X7 5W-40 Синтетическое 4 л</Heading>
                        <span style={{color: '#343434', fontWeight: 600, fontSize: '16px'}}>
                            Категория : <CategoryName title={'Масло'} />
                        </span>
                        <span style={{color: '#343434', fontWeight: 600, fontSize: '16px'}}>
                            Объем : <CategoryName title={'4л'} />
                        </span>
                        <Stack isInline={true} alignItems="center">
                            <span style={{color: '#343434', fontWeight: 600, fontSize: '16px'}}>
                                Цена :
                            </span>
                            <span style={{color: 'orange', fontSize: '24px'}}>
                                3499₽
                            </span>
                        </Stack>

                    </Stack>
                </Stack>
                <Stack marginTop='24px'>
                    <span style={{color: '#343434', fontWeight: 600, fontSize: '16px'}}>
                        Описание :
                    </span>
                    <span style={{color: '#343434', fontSize: '16px'}}>
                        Синтетическое моторное масло для двигателей легковых автомобилей. Для использования в бензиновых, дизельных (без сажевых фильтров) и газовых двигателях легковых автомобилей. Выполняет требования API SP: дополнительная защита от преждевременного воспламенения топливной смеси LSPI, защита от износа цепи ГРМ, улучшенная топливная экономичность. Масло произведено с использованием собственного синтетического базового масла Yubase и современного сбалансированного пакета присадок.
                    </span>
                </Stack>
            </CardBody>
            <Divider/>
            <CardFooter justifyContent='flex-end'>
                <Button variant='solid' colorScheme='orange'>
                    Добавить в корзину
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ActiveCartInfo;