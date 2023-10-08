import {
    Button, Card, CardBody, CardHeader,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Input, Select,
    Stack, useToast
} from "@chakra-ui/react";
import {ChangeEventHandler, useState} from "react";
import {AddIcon} from "@chakra-ui/icons";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


const AdminPanelAddProduct = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        count: 0,
        saleCount: 0
    })

    const {createProduct} = useActions()
    const toast = useToast()
    const {categories} = useTypedSelector(state => state.category)

    const handleTitleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        setProduct(prevState => ({
            ...prevState,
            title: e.target.value
        }))
    }

    const handlePriceChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        setProduct(prevState => ({
            ...prevState,
            price: e.target.value
        }))
    }

    const handleDescriptionChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        setProduct(prevState => ({
            ...prevState,
            description: e.target.value
        }))
    }

    const handleCategoryChange:ChangeEventHandler<HTMLSelectElement> = (e) => {
        setProduct(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    const submitCreateButton = () => {
        if (product.title !== ''
            && product.description !== ''
            && product.price !== ''
            && product.category !== '' ) {
            createProduct(product)
            toast({
                title: 'Продукт создан.',
                description: "Мы создали с вами успешно создали продукт.",
                status: 'success',
                duration: 1500,
                isClosable: true,
            })
            setProduct({title: '', price: '', description: '',category: '', count: 0, saleCount: 0})
        } else {
            toast({
                title: 'Ошибка при создании категории.',
                description: 'Заполните все поля',
                status: 'error',
                duration: 1500,
                isClosable: true,
            })
        }
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
                            <Input value={product.title} onChange={handleTitleChange} focusBorderColor="global.orange" />
                            {product.title === '' ? (
                                <FormErrorMessage>Название продукта обязательно.</FormErrorMessage>
                            ) : (
                                <FormHelperText color="green">
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl isInvalid={product.description === ''}>
                            <FormLabel>Описание продукта</FormLabel>
                            <Input value={product.description} onChange={handleDescriptionChange} focusBorderColor="global.orange" />
                            {product.description === '' ? (
                                <FormErrorMessage>Описание продукта обязательно.</FormErrorMessage>
                            ) : (
                                <FormHelperText color="green">
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl isInvalid={product.price === ''}>
                            <FormLabel>Цена продукта</FormLabel>
                            <Input type='number' value={product.price} onChange={handlePriceChange} focusBorderColor="global.orange" />
                            {product.price === '' ? (
                                <FormErrorMessage>Цена продукта должна быть больше 0.</FormErrorMessage>
                            ) : (
                                <FormHelperText color="green">
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isInvalid={product.category === ''}>
                            <FormLabel>Категория продукта</FormLabel>
                            <Select placeholder='Выберите категорию' onChange={handleCategoryChange} focusBorderColor="global.orange" >
                                {categories.map((category, i) => (
                                    <option key={i} value={category.title}>{category.title}</option>
                                ))}
                            </Select>
                            {product.category === '' ? (
                                <FormErrorMessage>Выберите категорию.</FormErrorMessage>
                            ) : (
                                <FormHelperText color="green">
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>



                        {/*<FormControl>*/}
                        {/*    <FormLabel>Картинка</FormLabel>*/}
                        {/*    <Stack isInline={true} alignItems='center'>*/}
                        {/*        <Button colorScheme='facebook' leftIcon={<DownloadIcon />}>*/}
                        {/*            Загрузить*/}
                        {/*        </Button>*/}
                        {/*        {true ? (*/}
                        {/*        <Alert status='error' borderRadius='6' w='auto'>*/}
                        {/*            <AlertIcon />*/}
                        {/*            Картинка не загружена*/}
                        {/*        </Alert>*/}
                        {/*        ) : (*/}
                        {/*            <Alert status='success' borderRadius='6' w='auto'>*/}
                        {/*                <AlertIcon />*/}
                        {/*                Все хорошо✓*/}
                        {/*            </Alert>*/}
                        {/*        )}*/}
                        {/*    </Stack>*/}
                        {/*</FormControl>*/}
                        <Button colorScheme='whatsapp' leftIcon={<AddIcon />} onClick={submitCreateButton}>
                            Создать продукт
                        </Button>

                    </Stack>
                </CardBody>
            </Card>
    )
}

export default AdminPanelAddProduct