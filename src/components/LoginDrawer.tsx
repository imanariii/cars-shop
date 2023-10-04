import React, {FC} from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    PinInput, PinInputField, Stack, useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {
    isOpen: boolean,
    onClose: () => void
}

const LoginDrawer:FC<IProps> = ({isOpen, onClose}) => {
    const navigate = useNavigate();
    const toast = useToast()
    const completePinCode = (value: string) => {
        if(value === "222222") {
            toast({
                title: 'Успешно.',
                description: "Ждите, мы перенаправим вас.",
                status: 'success',
                duration: 2500,
                isClosable: true,
            })
            setTimeout(()=>navigate('../admin'), 3000)
        } else {
            toast({
                title: 'Ошибка.',
                description: "Возникли проблемы.",
                status: 'error',
                duration: 2500,
                isClosable: true,
            })
            onClose()
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign='center'>Авторизация</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack isInline={true} justifyContent='center'>
                        <PinInput onComplete={(value) => completePinCode(value)} autoFocus={true}>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default LoginDrawer;