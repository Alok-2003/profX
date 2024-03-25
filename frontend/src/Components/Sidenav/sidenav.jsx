import React, { useEffect } from 'react'
import { Stack, useDisclosure, Icon, Image, HStack, Text, background } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerContent,
    DrawerHeader,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { GrAnnounce } from "react-icons/gr";
import { MdDashboard, MdOutlineMenuOpen } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { HiDocumentReport } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { TbBooks } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa6";
import { PiExamFill } from "react-icons/pi";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";

const sidenav = () => {
    const links = [
        {
            name: 'Dashboard',
            icon: MdDashboard,
            path: '/'
        },
        {
            name: 'Announce',
            icon: GrAnnounce,
            path: '/announce'
        },
        {
            name: 'Task',
            icon: FaTasks,
            path: '/task'
        },
        {
            name: 'Chats',
            icon: IoMdChatbubbles,
            path: '/chats'
        },
        {
            name: 'Leave',
            icon: SlCalender,
            path: '/leave'
        },
        {
            name: 'Results',
            icon: HiDocumentReport,
            path: '/results'
        },
        {
            name: 'Support',
            icon: BiSupport,
            path: '/support'
        },
        {
            name: 'Resources',
            icon: TbBooks,
            path: '/resources'
        },
        {
            name: 'Workload',
            icon: FaNetworkWired,
            path: '/workload'
        },
        {
            name: 'Exams',
            icon: PiExamFill,
            path: '/exams'
        },
        {
            name: 'Exams',
            icon: PiExamFill,
            path: '/exams'
        },
        {
            name: 'Update Marks',
            icon: BsFileEarmarkSpreadsheetFill,
            path: '/addmarks'
        },
        {
            name: 'Add Student',
            icon: BsFileEarmarkSpreadsheetFill,
            path: '/addstudent'
        },
    ]

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        onOpen();
    }, [])

    return (
        <>
            <Icon as={MdOutlineMenuOpen}
                fontSize={'33px'}
                transform={'rotate(180deg)'}
                marginTop={'-50px'}
                mx={4}
                position={'absolute'}
                backgroundColor={'#4C00A4'}
                borderRadius={'3px'}
                color={'white'}
                cursor={'pointer'}
                transition={'all 0.3s ease'}
                _hover={{
                    opacity: 0.5,
                }}
                onClick={() => {
                    onOpen()
                }} />

            <Drawer
                isOpen={isOpen}
                placement='left'
                onOpen={onOpen}
                onClose={onClose}
                size={'xs'}
                padding={'none'}
            >
                <DrawerContent padding={'none'}>
                    <DrawerCloseButton
                        as={MdOutlineMenuOpen}
                        onClick={() => {
                            onClose();
                        }}
                        color={'white'}
                        backgroundColor={'#4C00A4'}
                        borderRadius={'3px'}
                        cursor={'pointer'}
                        transition={'all 0.3s ease'}
                        _hover={{
                            opacity: 0.5,
                        }}
                    />
                    <DrawerHeader alignContent={'center'}>
                        <Image src={logo} alt='Dan Abramov' width={'10rem'} />
                    </DrawerHeader>
                    <hr />
                    <DrawerBody>
                        <Stack spacing='10px' padding={'-100px'}>
                            {links.map((link, index) => {
                                return (
                                    <>
                                        <Link to={link.path} display={'flex'}>
                                            <HStack cursor={'pointer'}
                                                _hover={{
                                                    opacity: '0.5'
                                                }
                                                }
                                                key={link.path}
                                            >

                                                <Icon as={link.icon} fontSize={'23px'} />
                                                <Text fontSize='17px' color={'#707070'} fontWeight={'bold'}>{link.name}</Text>

                                            </HStack >
                                        </Link>
                                        <hr />
                                    </>
                                )
                            })}
                            {/* <HStack cursor={'pointer'} _hover={{
                                opacity: '0.5'
                            }}>

                                <Icon as={MdOutlineMenuOpen} fontSize={'30px'} />
                                <Text fontSize='md' fontWeight={'bold'}>Dashboard</Text>
                            </HStack> */}
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth='1px' justifyContent={'center'}>
                        <Text fontWeight={'bold'}>©️profX - 2024</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </>
    )
}
export default sidenav;