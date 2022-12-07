
import { Box, Button, Container, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { format } from 'date-fns';

interface ISearchHeaderProps {
}

const SearchHeader: React.FunctionComponent<ISearchHeaderProps> = (props) => {

    const [rangeDate, setRangeDate] = React.useState([{
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    }])

    const [isDateRange, setIsDateRange] = React.useState(false)


    const handleSelect = (item: any) => {
        setRangeDate([item.selection])

        console.log(item.selection);

        if (item?.selection[0]?.startDate && item?.selection[0]?.endDate) {
            setIsDateRange(false)
        } else {
            console.log('hahaha');

        }

    }

    return (
        <Flex bg='#003580' w={'100%'} minH='240px' alignItems='center'>
            <Container maxW='1280px' color='black' py='12px'>
                <Text fontSize='48px' fontWeight='700'>Find you next stay</Text>
                <Text fontSize='24px' fontWeight='400'>Search deals on hotels, homes, and mush more...</Text>
                <Flex bg='#febb02' gap={1} p={1} borderRadius='2px'>
                    <Box bg='white' flexGrow={1}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<FontAwesomeIcon icon='fa-solid fa-bed' />}
                            />
                            <Input placeholder='where are you going' />
                        </InputGroup>
                    </Box>
                    <Box position='relative' w='285px' bg='white'>
                        <Flex onClick={() => setIsDateRange(pre => !pre)}
                            sx={{
                                '&::before': {
                                    
                                }
                            }}>
                            <Text >{`${format(rangeDate[0].startDate, 'MM/dd/yyyy')} `}</Text>

                            <Text>{rangeDate[0].endDate && format(rangeDate[0].startDate, 'MM/dd/yyyy')}</Text>
                        </Flex>

                        {
                            isDateRange &&
                            <Box position='absolute' top='100%' left='0'>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item: any) => handleSelect(item)}
                                    moveRangeOnFirstSelection={true}
                                    ranges={rangeDate}
                                    minDate={new Date()}
                                />
                            </Box>
                        }

                    </Box>
                    <Box bg='white' w='270px'></Box>
                    <Button borderRadius='0' bg='#003580' color='white' _hover={{
                        bg: '#0826ccef',
                    }}>Search</Button>
                </Flex>
            </Container>
        </Flex>
    )
};

export default SearchHeader;
