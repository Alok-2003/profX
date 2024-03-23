import { Card, CardBody, CardHeader, HStack, Stack, Heading, Text } from '@chakra-ui/react'

const Deadlines = () => {
    return (
        <>

            <Card bg={'white'} boxShadow='xl' marginTop={'10px'} width={'19vw'} height={'8rem'} borderRadius={'4px'}>
                <CardHeader>
                    <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} marginTop={'-19.3px'} marginLeft={'-1.2rem'} borderRadius={'3px 3px 0px 0px '} color={'white'} width={'19vw'}> Deadlines</Heading>
                </CardHeader>
                <CardBody>
                    <Stack>
                        <HStack>
                            <Text>Meeting in C3 -- 20/02/24</Text>
                        </HStack>
                        <HStack>
                            <Text>Class in C3 -- 20/02/24</Text>
                        </HStack>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default Deadlines;