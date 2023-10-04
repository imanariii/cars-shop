import {
    Alert,
    AlertIcon,
    Button, Card, CardBody, CardHeader,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Stack
} from "@chakra-ui/react";
import {ChangeEventHandler, useState} from "react";
import {AddIcon, DownloadIcon} from "@chakra-ui/icons";
import {useActions} from "../hooks/useActions";


const AdminPanelAddProduct = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: 0
    })

    const {createProduct} = useActions()

    const handleTitleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        setProduct(prevState => ({
            ...prevState,
            title: e.target.value
        }))

    }

    const handlePriceChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        setProduct(prevState => ({
            ...prevState,
            price: Number(e.target.value)
        }))
    }

    const handleDescriptionChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        setProduct(prevState => ({
            ...prevState,
            description: e.target.value
        }))
    }

    return (
            <Card>
                <CardHeader>
                    <Heading>
                        Добавление продукта
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack>

                        <FormControl isInvalid={product.title === ''}>
                            <FormLabel>Название продукта</FormLabel>
                            <Input type='email' value={product.title} onChange={handleTitleChange} />
                            {product.title === '' ? (
                                <FormErrorMessage>Название продукта обязательно.</FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl isInvalid={product.description === ''}>
                            <FormLabel>Описание продукта</FormLabel>
                            <Input type='email' value={product.description} onChange={handleDescriptionChange} />
                            {product.description === '' ? (
                                <FormErrorMessage>Описание продукта обязательно.</FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl isInvalid={product.price === 0}>
                            <FormLabel>Цена продукта</FormLabel>
                            <Input type='email' value={product.price} onChange={handlePriceChange} />
                            {product.price === 0 ? (
                                <FormErrorMessage>Цена продукта должна быть больше 0.</FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl>
                            <FormLabel>Картинка</FormLabel>
                            <Stack isInline={true} alignItems='center'>
                                <Button colorScheme='facebook' leftIcon={<DownloadIcon />}>
                                    Загрузить
                                </Button>
                                {/*{true ? (*/}
                                <Alert status='error' borderRadius='6' w='auto'>
                                    <AlertIcon />
                                    Картинка не загружена
                                </Alert>
                                {/*) : (*/}
                                {/*    <Alert status='success' borderRadius='6' w='auto'>*/}
                                {/*        <AlertIcon />*/}
                                {/*        Все хорошо✓*/}
                                {/*    </Alert>*/}
                                {/*)}*/}
                            </Stack>
                        </FormControl>
                        <Button colorScheme='whatsapp' leftIcon={<AddIcon />} onClick={()=>{
                            createProduct(product)
                            console.log(product)
                        }}>
                            Создать продукт
                        </Button>

                    </Stack>
                </CardBody>
            </Card>
    )
}

export default AdminPanelAddProduct