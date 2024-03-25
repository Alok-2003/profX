import { Stack, HStack, Card, Image, Heading, Box } from '@chakra-ui/react'
import src from '../../assets/training.png'
import { Chart } from "react-google-charts";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';

const CourseCard = ({ name, completed }) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 100) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage]);


    const data = [
        ["Task", "Hours per Day"],
        ["Complete", parseInt(completed)],
        ["Incomplete", parseInt(100 - parseInt(completed))],
    ]





    const option = {
        backgroundColor: 'none',
        colors: ['red', 'green'],
        legend: 'none'
    }

    return (
        <>
            <Card cursor={'pointer'} height={'15vh'} boxShadow='xl' width={'22vw'} padding={'7px'} borderRadius={'7px'} backgroundColor={'#09291E'} _hover={{
                opacity: 0.8
            }}>
                <HStack gap={8}>
                    <Image src={src} height={'80px'} />
                    <Stack>
                        <Heading fontSize={'20px'}>{name}</Heading>
                        <HStack gap={4}>
                            <Image src={src} height={'40px'} />
                            <Box position={'absolute'} marginLeft={'-4vw'} eight="100px" >
                                <div style={{ width: 70, marginLeft: 160 }}>
                                    <CircularProgressbar value={completed} text={`${completed}%`} />
                                </div>
                            </Box>
                        </HStack>
                    </Stack>
                </HStack>
            </Card>
        </>
    )
}
export default CourseCard