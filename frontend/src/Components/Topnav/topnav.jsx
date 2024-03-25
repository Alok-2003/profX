
import { Stack, Progress } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    HStack, Input, InputGroup, InputLeftElement, Image, Icon, Heading, Text
} from '@chakra-ui/react'
import { React, useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import { IoIosSearch } from "react-icons/io";
import user from '../../assets/user.jpg'
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineExitToApp, MdOutlineMenuOpen } from "react-icons/md";
import Warning from '../Warn/Warning';

const topnav = ({ title }) => {
    const topIcons = [
        { icon: GrAnnounce, key: 1 },
        { icon: GrAnnounce, key: 2 },
        { icon: GrAnnounce, key: 3 },
    ]


    const [progress, setProgress] = useState(0);
    const [limit, setLimit] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prevProgress => prevProgress + (100 / (10 * 60)));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (progress >= limit) {
            setLimit(progress);
        }
    }, [progress, limit]);

    // Run effect only once when component mounts
    return (


        <div className='navbar'>
            <Warning limit={limit} zIndex={-1} />


            <HStack boxShadow='xl' h='16' justify={"space-between"} px='32' backgroundColor={"whitesmoke"}>

                <Image src={logo} width={'10rem'} />
                <InputGroup
                    justify={'center'}
                    boxShadow='md'
                    width={'max-content'}
                    borderRadius={'30px'}
                    outline={'unset'}>
                    <Input type='tel' placeholder='Search' w={'13rem'} />
                </InputGroup>
                <Heading as='h5' fontSize={'23px'} color={'#707070'}>
                    {title}
                </Heading>
                <Stack boxShadow='lg' backgroundColor={"white"} padding={'6px'} borderRadius={'3px'} w={'9rem'}>
                    <HStack gap={8}>
                        <Text fontSize={'11px'} fontWeight={'bold'}>Timer:</Text>
                        <Text fontSize={'11px'} color={'red'} fontWeight={'bold'}>{parseInt(progress)} min</Text>
                    </HStack>
                    <Progress value={progress} height={'6px'} colorScheme='red' borderRadius={'3px'}
                        marginBottom={'3px'} cursor={'pointer'} backgroundColor={'#4C00A4'} />
                </Stack>
                <Menu>
                    <MenuButton as={Button} borderRadius={'50%'} height={'43px'} width={'43px'} padding={'1px'} boxShadow='xl' backgroundColor={'whitesmoke'}>
                        <Image src={user} height={'39px'} width={'39px'} borderRadius={'50%'} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                    </MenuList>
                </Menu>
                <HStack>
                    {

                        topIcons.map((icons, index) => {

                            return (
                                <>
                                    <Box key={index}
                                        backgroundColor={'#4C00A4'}
                                        padding={'5px'}
                                        height={'1.5rem'}
                                        borderRadius={'50%'}
                                        transition={'all 0.3s ease'}
                                        cursor={'pointer'}
                                        justifyContent="center"
                                        _hover={{
                                            opacity: '0.8'
                                        }}
                                    >
                                        <Icon as={icons.icon}
                                            color={'white'}
                                            fontSize={'13px'}
                                            justifyItems={'center'} />

                                    </Box>

                                </>
                            )
                        })
                    }


                </HStack>


                <Icon as={MdOutlineExitToApp} fontSize={'33px'} cursor={'pointer'} transition={'0.3s ease all'} _hover={{
                    opacity: '0.5'
                }} />

            </HStack>
        </div>
    )
}
export default topnav;