import {Link} from "react-router-dom";
import {Button, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import AdminPanelCategories from "../components/AdminPanelCategories";
import AdminPanelAddProduct from "../components/AdminPanelAddProduct";
import AdminPanelProducts from "../components/AdminPanelProducts";


const AdminPage = () => {
    return (
        <>
            <Stack isInline={true}
                   justifyContent='space-between'
                   alignItems="center"
                   p='12px 24px'>
                <Link to='../'><Button colorScheme='gray'>Перейти на сайт</Button></Link>
                <Heading textAlign='left' color='global.orange'>Добро пожаловать! <br/> Администратор</Heading>
            </Stack>
            <Tabs isFitted variant='enclosed'>
                <TabList>
                    <Tab>Категории</Tab>
                    <Tab>Добавление продукта</Tab>
                    <Tab>Все продукты</Tab>
                </TabList>
                <TabPanels bg='global.grey' style={{minHeight: '90vh'}}>
                    <TabPanel>
                        <AdminPanelCategories />
                    </TabPanel>
                    <TabPanel>
                        <AdminPanelAddProduct />
                    </TabPanel>
                    <TabPanel>
                        <AdminPanelProducts />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>

    )
}

export default AdminPage;