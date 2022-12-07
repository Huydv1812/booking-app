import { Box, Button, Container, Image, Input, Text, useToast } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { useMutation } from 'react-query';
import LayoutSign from '../../components/layout/LayoutSignin';
import { RegisterProp, registerRequest } from '../../service/auth';
import { API_ENDPOINT } from '../../shared/constants/endpoint';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const toast = useToast()

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [isRegister, setIsRegister] = React.useState(false);

    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event: any) => {
        setPassword(event.target.value)
    }

    const handleChangeConfirmPassword = (event: any) => {
        setConfirmPassword(event.target.value)
    }


    class ExtendError extends Error {
        declare response: AxiosResponse<{
            msg: string
        }>
    }


    const { mutate: onRegisterRequest } = useMutation<any, ExtendError, any, any>((req: RegisterProp) => {
        return registerRequest(req)
    }, {
        onSuccess: () => {
            setIsRegister(true)
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.msg,
                status: 'error',
                isClosable: true,
                position: 'top-right'
            })
        }
    });

    const handleRegisterRequest = () => {
        const data = {
            email: 'hahaha@gmail.com',
            password: '123456'
        }
        onRegisterRequest(data)
    }

    return <LayoutSign>
        <Container maxW='1280px' mt='48px' p='16px 16px 0px 16px' >
            {!isRegister ?
                <>
                    <Text textAlign='center' fontSize='44px' fontWeight='bold' color='black' variant='h2'>Register</Text>
                    <Box maxW='600px' w='100%' m='0 auto'>
                        <Box mb='24px'>
                            <Text>Email</Text>
                            <Input value={email} onChange={handleChangeEmail} />
                        </Box>
                        <Box mb='30px'>
                            <Text>Password</Text>
                            <Input value={password} onChange={handleChangePassword} />
                        </Box>
                        <Box mb='30px'>
                            <Text>confirm password</Text>
                            <Input value={confirmPassword} onChange={handleChangeConfirmPassword} />
                        </Box>
                        <Button w='100%' onClick={handleRegisterRequest}>sign up</Button>
                    </Box>
                </>
                :
                <Box maxW='1280px' mt='48px' p='16px 16px 0px 16px'>
                    <Text textAlign='center' fontSize='23px' fontWeight='bold' color='black' variant='h2'>Register</Text>
                    <Text textAlign='center'>You can check email</Text>
                </Box>
            }
        </Container>
    </LayoutSign>;
};

export default Register;
