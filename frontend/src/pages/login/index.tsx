import { Box, Button, Container, Input, Text } from '@chakra-ui/react';
import * as React from 'react';
import LayoutSign from '../../components/layout/LayoutSignin';

interface ISignInProps {
}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event: any) => {
        setPassword(event.target.value)
    }

    return <LayoutSign>
        <Container maxW='1280px' mt='48px' p='16px 16px 0px 16px' >
            <Text textAlign='center' fontSize='44px' fontWeight='bold' color='black' variant='h2'>Sign in</Text>
            <Box maxW='600px' w='100%' m='0 auto'>
                <Box mb='24px'>
                    <Text>Email</Text>
                    <Input value={email} onChange={handleChangeEmail} />
                </Box>
                <Box mb='30px'>
                    <Text>Password</Text>
                    <Input value={password} onChange={handleChangePassword} />
                </Box>

                <Button w='100%'>sign in</Button>
            </Box>
        </Container>
    </LayoutSign>;
};

export default SignIn;
