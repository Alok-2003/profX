import { Card, CardBody, HStack, Image, Stack, Heading, Button, Text } from '@chakra-ui/react'
import poster from '../../assets/training.png'




const Banner = () => {
    return (
        <>
            <Card backgroundColor={'#09291E'} boxShadow='xl' marginTop={'10px'} width={'70vw'} borderRadius={'4px'} ml={'8%'} height={'9rem'}>
                <CardBody>
                    <HStack gap={16}>
                        <Image src={poster} height={'4rem'} />
                        <Stack alignItems={'center'}>
                            <Heading as={'h1'} color={'white'} fontSize={'45px'}>Hello User, Welcome Back !!!</Heading>
                            {/* <HStack gap={4} marginTop={'10px'} marginRight={'unset'}>
                                <Link to='/chats'><Button bgGradient='linear(to-b, #7928CA, black)' borderRadius={'3px'} size={'sm'} color={'white'} _hover={{
                                    opacity: 0.8
                                }}>Make Questions</Button></Link>


                                <Button bgGradient='linear(to-b, #7928CA, black)' borderRadius={'3px'} size={'sm'} color={'white'} _hover={{
                                    opacity: 0.8
                                }}>Add Students</Button>


                                <Button bgGradient='linear(to-b, #7928CA, black)' borderRadius={'3px'} size={'sm'} color={'white'} _hover={{
                                    opacity: 0.8
                                }}>Create Course</Button>
                                <Button bgGradient='linear(to-b, #7928CA, black)' borderRadius={'3px'} size={'sm'} color={'white'} _hover={{
                                    opacity: 0.8
                                }}>Create Quiz</Button>
                                <Button bgGradient='linear(to-b, #7928CA, black)' borderRadius={'3px'} size={'sm'} color={'white'} _hover={{
                                    opacity: 0.8
                                }}>Start Live Quiz</Button>
                            </HStack> */}
                        </Stack>
                        <Image src={poster} height={'4rem'} marginLeft={'-1rem'} />
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}
export default Banner;