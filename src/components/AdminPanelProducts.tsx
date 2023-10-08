import {
    Button, Card, CardBody, CardHeader, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th,
    Thead, Tr
} from "@chakra-ui/react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AdminPanelProducts = () => {

    const {products} = useTypedSelector(state=>state.product)

    return (
        <>
            <Card>
                <CardHeader>
                    <Heading>
                        Все продукты
                    </Heading>
                </CardHeader>
                <CardBody>
                    <TableContainer>
                        <Table variant='striped' colorScheme='orange'>
                            <TableCaption>Интернет-магазин - CarsHelper</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>Наименование</Th>
                                    <Th>Кол-во</Th>
                                    <Th>Продано</Th>
                                    <Th>Цена</Th>
                                    <Th>Действия</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {products.map((product, i) => (
                                    <Tr>
                                        <Td>{i}</Td>
                                        <Td>{product.title}</Td>
                                        <Td isNumeric>{product.count}</Td>
                                        <Td isNumeric>{product.saleCount}</Td>
                                        <Td isNumeric>{product.price}</Td>
                                        <Td>
                                            <Button colorScheme="orange">Редактировать</Button>
                                            <Button colorScheme="red">Удалить</Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                            {/*<Tfoot>*/}
                            {/*    <Tr>*/}
                            {/*        <Th>To convert</Th>*/}
                            {/*        <Th>into</Th>*/}
                            {/*        <Th isNumeric>multiply by</Th>*/}
                            {/*    </Tr>*/}
                            {/*</Tfoot>*/}
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </>
    )
}

export default AdminPanelProducts