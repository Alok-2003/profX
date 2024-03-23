// Import necessary components and libraries
import React, { useState } from 'react';
import { Card, Button, FormControl, FormLabel, Input, Stack, HStack } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addmarks = () => {
    // Define state variables for form inputs
    const [Name, setName] = useState('');
    const [UID, setUID] = useState('');
    const [Section, setSection] = useState('');
    const [MarksOneSub, setMarksOneSub] = useState('');
    const [MarksSecSub, setMarksSecSub] = useState('');
    const [MarksThirSub, setMarksThirSub] = useState('');

    // Initialize navigate hook
    const navigate = useNavigate();

    // Define function to handle form submission
    const handleMarks = async (e) => {
        e.preventDefault();
        try {
            // Send form data to server
            const { data } = await axios.post("http://localhost:4000/api/send",
                { Name, UID, Section, MarksOneSub, MarksSecSub, MarksThirSub },
                { headers: { "Content-type": "application/json" }, withCredentials: true }
            );
            // Display success message
            toast.success(data.message);
            // Reset form fields
            setName("");
            setUID("");
            setSection("");
            setMarksOneSub("");
            setMarksSecSub("");
            setMarksThirSub("");
            // Navigate to specified route
            navigate("/addmarks");
        } catch (error) {
            // Display error message
            toast.error(error.response.data.message);
        }
    }

    // Render form component
    return (
        <Card height={'80vh'} width={'70vw'} backgroundColor={'whitesmoke'} padding={'30px'} border={'1px solid red'} marginLeft={'13%'} marginTop={'5%'} zIndex={1}>
            <FormControl>
                <Stack gap={4}>
                    <HStack>
                        <FormLabel>Student Names</FormLabel>
                        <Input type='text' border='0.5px solid black' width={"15vw"} value={Name} onChange={(e)=> setName(e.target.value)} />
                        <FormLabel>UID</FormLabel>
                        <Input type='text' border='0.5px solid black' width={"15vw"} value={UID} onChange={(e)=> setUID(e.target.value)} />
                        <FormLabel>Section</FormLabel>
                        <Input type='text' border='0.5px solid black' width={"10vw"} value={Section} onChange={(e)=> setSection(e.target.value)} />
                    </HStack>
                    <HStack>
                        <FormLabel>Physics</FormLabel>
                        <Input type='text' border='0.5px solid black' width={" 40vw"} value={MarksOneSub} onChange={(e)=> setMarksOneSub(e.target.value)} />
                    </HStack>
                    <HStack gap={4}>
                        <FormLabel>Maths</FormLabel>
                        <Input type='text' border='0.5px solid black' width={" 40vw"} value={MarksSecSub} onChange={(e)=> setMarksSecSub(e.target.value)} />
                    </HStack>
                    <HStack>
                        <FormLabel>Python</FormLabel>
                        <Input type='text' border='0.5px solid black' width={" 40vw"} value={MarksThirSub} onChange={(e)=> setMarksThirSub(e.target.value)} />
                    </HStack>
                </Stack>
            </FormControl>
            <Button colorScheme='green' width={'30rem'} marginTop={'60px'} marginLeft={'30%'} type="submit" onClick={handleMarks} >Update Marks</Button>
        </Card>
    );
}
export default Addmarks;
