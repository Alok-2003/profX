import { Stack, HStack, Card, Image, Heading, Box, Text, Progress } from '@chakra-ui/react';

const Coursedetails = ({ name }) => {
    return (
        <>
            <Card bgGradient='linear(to-b, blue, #F2F2F2)' height={'91vh'} >

                <HStack>
                    <Stack>
                        <Heading as={'h1'} width={'35rem'} mt={'7rem'} ml={'10rem'} color={'white'} fontSize={'43px'}>

                            {name}

                        </Heading>
                        <Progress hasStripe value={64} width={'27rem'} ml={'19%'} backgroundColor={'red'} colorScheme={'green'} />
                        <HStack marginLeft={'10rem'} marginTop={'2rem'} gap={8}>

                            <Stack alignItems={'center'} color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                                <Text >333,333</Text>
                                <Text marginTop={'-23px'}> Students Enrolled</Text>

                            </Stack>
                            <Stack alignItems={'center'} color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                                <Text >333,333</Text>
                                <Text marginTop={'-23px'}> Students Enrolled</Text>

                            </Stack>
                            <Stack alignItems={'center'} color={'white'} fontWeight={'bold'} fontSize={'30px'}>
                                <Text >333,333</Text>
                                <Text marginTop={'-23px'}> Students Enrolled</Text>

                            </Stack>

                        </HStack>


                    </Stack>



                </HStack>



            </Card>

        </>
    )
}

export default Coursedetails
