import React from 'react';
import { Card, CardBody, CardHeader, Stack, Heading } from '@chakra-ui/react';
import ApexChart from '../Charts/AreaChart'

const Performance = () => {
    return (
        <>
            <Card boxShadow='lg' bg={'white'} marginTop={'10px'} width={'46vw'} height={'22rem'} borderRadius={'4px'}>
                <CardHeader>
                    <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} marginTop={'-19.3px'} marginLeft={'-1.2rem'} borderRadius={'3px 3px 0px 0px '} color={'white'} width={'46vw'}> Student Performance</Heading>
                </CardHeader>
                <CardBody>
                    <Stack>
                        <ApexChart height={250} /> {/* Use the ApexChart component here */}
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}

export default Performance;
