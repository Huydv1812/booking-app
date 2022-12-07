import * as React from 'react';
import { Box, Container, Flex, Button, Text, Image } from '@chakra-ui/react'
import Link from 'next/link';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

    return <Box bg='#003580' w={'100%'} py='12px'>
        <Container maxW='1280px' color='white'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Link href='/'><Text color="#fff" fontSize='24px' fontWeight='700'>Booking.com</Text></Link>

                <Flex gap='20px'>
                    <Link href='/register'>
                        <Button borderRadius='0' color='#003580' _hover={{
                            bg: '#f3f3f3',
                        }}>Register</Button>
                    </Link>
                    <Link href='/login'>
                        <Button borderRadius='0' color='#003580' _hover={{
                            bg: '#f3f3f3',
                        }}>Sign in</Button>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    </Box>;
};

export default Header;
