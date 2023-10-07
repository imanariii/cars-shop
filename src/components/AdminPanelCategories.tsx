import {
    Button,
    Card,
    CardBody,
    CardHeader,
    FormControl,
    FormErrorMessage, FormHelperText,
    FormLabel,
    Heading,
    Input,
    Stack, useToast
} from "@chakra-ui/react";
import {ChangeEventHandler, useState} from "react";
import {AddIcon} from "@chakra-ui/icons";
import {ICategory} from "../types/category";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const AdminPanelCategories = () => {
    const [category, setCategory] = useState<ICategory>({
        title: '',
        description: ''
    })
    const toast = useToast()

    const {categories} = useTypedSelector(state => state.category)
    const {createCategory} = useActions()
    const handleTitleChange:ChangeEventHandler<HTMLInputElement> = (e) => setCategory(prevState => ({...prevState, title: e.target.value}))
    const handleDescriptionChange:ChangeEventHandler<HTMLInputElement> = (e) => setCategory(prevState => ({...prevState, description: e.target.value}))

    const submitCreateButton = () => {
        if (category.title !== '' && category.description !== '') {
            createCategory(category)
            toast({
                title: 'Категория создана.',
                description: "Мы создали с вами успешно создали категорию.",
                status: 'success',
                duration: 1500,
                isClosable: true,
            })
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
        <Stack>
            <Card>
                <CardHeader>
                    <Heading>
                        Добавление категории
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack>

                        <FormControl isInvalid={category.title === ''}>
                            <FormLabel>Название категории</FormLabel>
                            <Input type='email' value={category.title} onChange={handleTitleChange} />
                            {category.title === '' ? (
                                <FormErrorMessage>Название категории обязательно.</FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl isInvalid={category.description === ''}>
                            <FormLabel>Описание категории</FormLabel>
                            <Input type='email' value={category.description} onChange={handleDescriptionChange} />
                            {category.description === '' ? (
                                <FormErrorMessage>Описание категории обязательно.</FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>

                        <Button colorScheme='whatsapp' leftIcon={<AddIcon />} onClick={submitCreateButton}>
                            Создать категорию
                        </Button>

                    </Stack>
                </CardBody>
            </Card>

            <Card>
                <CardHeader>
                    <Heading>
                        Категории
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack>
                        {categories.map((category, i) => (
                            <span key={`${category.title + i}`}>{category.title}</span>
                        ))}
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    )
}

export default AdminPanelCategories