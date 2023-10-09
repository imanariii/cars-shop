import {
    Button,
    Card, CardBody, CardFooter, Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, Heading, Stack, Skeleton
} from "@chakra-ui/react";
import React, {FC} from "react";
import CategoryName from "./CategoryName";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const InfoDrawer:FC = () => {
    const {info, loading, error} = useTypedSelector(state => state.infoProduct)
    const { infoShow} = useTypedSelector(state => state.drawer)

    const {setInfoProduct, onInfo} = useActions()
    if(error) return <h1>Ошибка</h1>
    return (
        <Drawer placement='left' onClose={() => {
            onInfo(false)
            setInfoProduct(null)
        }} isOpen={infoShow} size='xl'>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>Информация о товаре</DrawerHeader>
                <DrawerBody>
                    <Card bg="transparent">
                        <CardBody bg='transparent' width="100%" minHeight='80vh'>
                            <Stack  isInline={true}>
                                <Skeleton isLoaded={!loading}>
                                    <img
                                        src='https://ir.ozone.ru/s3/multimedia-d/wc1000/6709518337.jpg'
                                        alt='Green double couch with wooden legs'
                                        style={{borderRadius: '16px'}}
                                        width="300px"
                                        height="300px"
                                    />
                                </Skeleton>


                                <Stack mt='6' spacing='3'>
                                    <Skeleton isLoaded={!loading}>
                                        <Heading size='md'>{info?.title}</Heading>
                                    </Skeleton>

                                        <span style={{color: '#343434', fontWeight: 600, fontSize: '16px'}}>
                                            Категория :
                                            <Skeleton isLoaded={!loading}>
                                                <CategoryName title={info?.category || '' } />
                                            </Skeleton>
                                        </span>
                                    <Stack isInline={true} alignItems="center">
                                        <span style={{color: '#343434', fontWeight: 600, fontSize: '16px'}}>
                                            Цена :
                                        </span>
                                        <Skeleton isLoaded={!loading}>
                                            <span style={{color: 'orange', fontSize: '24px'}}>
                                                {info?.price}
                                            </span>
                                        </Skeleton>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack marginTop='24px'>
                                <span style={{color: '#343434', fontWeight: 600, fontSize: '16px'}}>
                                    Описание :
                                </span>
                                <Skeleton isLoaded={!loading}>
                                    <span style={{color: '#343434', fontSize: '16px'}}>
                                        {info?.description}
                                    </span>
                                </Skeleton>
                            </Stack>
                        </CardBody>
                        <Divider/>
                        <CardFooter justifyContent='flex-end'>
                            <Button variant='solid' colorScheme='orange'>
                                Добавить в корзину
                            </Button>
                        </CardFooter>
                    </Card>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default InfoDrawer;