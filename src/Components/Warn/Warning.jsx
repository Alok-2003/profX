import React, { useEffect, useState } from 'react';

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
function Warning({ limit }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    useEffect(() => {
        if (parseInt(limit) > (100 / ((3000 / 60) * 60))) {
            onOpen();
        }
    }, [onOpen]);

    return (
        <>
            {/* <Button colorScheme='red' onClick={onOpen} id='popupBtn'>
                Delete Customer
            </Button> */}

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Break Time
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Working since a long time...You need a break
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>

                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default Warning;