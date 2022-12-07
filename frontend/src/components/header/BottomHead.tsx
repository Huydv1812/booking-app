import * as React from 'react';
import { Box, Container, Flex, Button, Text, Image } from '@chakra-ui/react'
import Link from 'next/link';
import Bed from '../../../public/icon/BedIconHead';
import Plane from '../../../public/icon/PlaneIconHead';
import Suitcase from '../../../public/icon/SuitcaseIconHead';
import Car from '../../../public/icon/CarIconHead';
import Attractions from '../../../public/icon/AttractionsIconHead';
import Taxi from '../../../public/icon/TaxiIconHead';

interface IHeaderBottomProps {
}

const listService = [
    {
        icon: <Bed />,
        name: 'Stays',
        id: 1,
        url: '/'
    },
    {
        icon: <Plane />,
        name: 'Flights',
        id: 2,
        url: 'https://flights-vn.gotogate.com/rf/start'
    },
    {
        icon: <Suitcase />,
        name: 'Flight + Hotel',
        id: 3,
        url: 'https://www.agoda.com/c/booking?tag=MG3afLO8UkaezKciHb0Mo0QLVVSGSR-V7B_TloYmBy8xNjcwMjk1MDkz&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaPQBiAEBmAEquAEXyAEM2AEB6AEB-AELiAIBqAIDuAKy27acBsACAdICJDQwMzRlYWM5LTZjODgtNDAyZS1hNGYyLWQxMDU4N2JhMDdmMdgCBuACAQ'
    },
    {
        icon: <Car />,
        name: 'Car rental',
        id: 4,
        url: '/cars'
    },
    {
        icon: <Attractions />,
        name: 'Attractions',
        id: 5,
        url: '/attractions'
    },
    {
        icon: <Taxi />,
        name: 'Airport taxis',
        id: 6,
        url: '/taxi'
    },
]

const renderNavItem = (item: { icon: JSX.Element, name: string, id: number, url: string }, id: number, onClick: (id: number) => void) => {
    return (
        <Link href='/'>
            <Button color='white' bg='transparent' p={'12px 15px !important'} borderRadius='100px' border={id === item.id ? '1px solid #fff' : '1px solid transparent'}
                onClick={() => onClick(item.id)}
                _hover={{
                    backgroundColor: "#ffffff1a",
                }}
                leftIcon={item.icon}>{item.name}</Button>
        </Link>
    )
}

const HeaderBottom: React.FunctionComponent<IHeaderBottomProps> = (props) => {
    const [activeNav, setActiveNav] = React.useState(1);

    const handleActive = (id: number) => {
        setActiveNav(id)
    }

    return <Box bg='#003580' w={'100%'} minH='80px' py='12px'>
        <Container maxW='1280px' color='white'>
            <Flex gap='8px' p='8px 0px 12px'>
                {
                    listService.map((item) => (
                        renderNavItem(item, activeNav, handleActive)
                    ))
                }
            </Flex>
        </Container>
    </Box>;
};

export default HeaderBottom;
