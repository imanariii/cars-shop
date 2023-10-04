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
    Stack
} from "@chakra-ui/react";
import {ChangeEventHandler, useState} from "react";
import {AddIcon} from "@chakra-ui/icons";


const AdminPanelCategories = () => {
    const [input, setInput] = useState('')

    const handleInputChange:ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value)
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

                        <FormControl isInvalid={input === ''}>
                            <FormLabel>Название категории</FormLabel>
                            <Input type='email' value={input} onChange={handleInputChange} />
                            {input === '' ? (
                                <FormErrorMessage>Название категории обязательно.</FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl isInvalid={input === ''}>
                            <FormLabel>Описание категории</FormLabel>
                            <Input type='email' value={input} onChange={handleInputChange} />
                            {input === '' ? (
                                <FormErrorMessage>Описание категории обязательно.</FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Все хорошо✓
                                </FormHelperText>
                            )}
                        </FormControl>

                        <Button colorScheme='whatsapp' leftIcon={<AddIcon />}>
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

                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    )
}

export default AdminPanelCategories