import React, { useState } from 'react';
import { Card, Heading, HStack, Stack, Input, Select, Button, Text } from '@chakra-ui/react';
import { getDatabase, ref, push } from 'firebase/database';





const AddStudent = () => {


    const firebaseConfig = {
        apiKey: "AIzaSyC0dC_EdzMuhlxlXJMPEcoq8WC2BmJMRZg",
        authDomain: "prof-67071.firebaseapp.com",
        projectId: "prof-67071",
        storageBucket: "prof-67071.appspot.com",
        messagingSenderId: "80863905609",
        appId: "1:80863905609:web:432d979e2958b035367c98"
    };




    // State variables for student inputs
    const [studentDetails, setStudentDetails] = useState({
        name: '',
        uid: '',
        class: ''
    });

    // Function to handle changes in input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentDetails({ ...studentDetails, [name]: value });
    };

    // Function to handle data upload to Firebase
    const handleAddStudent = () => {
        const database = getDatabase();
        const studentsRef = ref(database, 'students');
        push(studentsRef, studentDetails)
            .then(() => {
                console.log('Student data uploaded to Firebase');
                // Reset form fields after successful upload
                setStudentDetails({
                    name: '',
                    uid: '',
                    class: ''
                });
            })
            .catch((error) => {
                console.error('Error uploading student data to Firebase: ', error);
            });
    };

    return (
        <>
            <Card height={'70vh'} width={'70vw'} boxShadow='lg' marginLeft={'15%'} marginTop={'5%'} border={'1px solid black'} alignItems={'center'} padding={'10px'}>
                <Stack gap={16}>
                    <HStack gap={20}>
                        <Heading as={'h3'} fontSize={'20px'}>Select Class: </Heading>
                        <Select name="class" placeholder='Select option' width={'10vw'} value={studentDetails.class} onChange={handleInputChange}>
                            <option value='633'>633</option>
                            <option value='363'>363</option>
                            <option value='636'>636</option>
                        </Select>
                    </HStack>
                    <Stack>
                        <HStack alignItems={'end'} textAlign={'center'}>
                            <Text fontWeight={'bold'} fontSize={'20px'} >Name: </Text>
                            <Input name="name" placeholder='Enter Name' width={'30vw'} value={studentDetails.name} onChange={handleInputChange} />
                        </HStack>
                        <HStack alignItems={'end'} textAlign={'center'} marginTop={'10px'}>
                            <Text fontWeight={'bold'} fontSize={'20px'}>Student's UID </Text>
                            <Input name="uid" placeholder='Enter UID' width={'30vw'} value={studentDetails.uid} onChange={handleInputChange} />
                        </HStack>
                    </Stack>
                </Stack>
                <Button colorScheme='blue' width={'33vw'} marginTop={'10rem'} onClick={handleAddStudent}>Add Student</Button>
            </Card>
        </>
    )
}

export default AddStudent;
