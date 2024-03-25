import { Box, FormControl, FormLabel, Input, HStack, Stack, Button } from "@chakra-ui/react";
const Login = () => {
    return (
        <>
            <Box w='100vw' h='500vh' bgGradient='linear(to-r, green.200, pink.500)'>
                <FormControl zIndex={'100'} boxShadow='2xl' padding={'15px'} width={'60vw'} gap={16}>
                    <Stack alignItems={'center'}>
                        <HStack>
                            <FormLabel>Employee ID:</FormLabel>
                            <Input type='text' width={'30vw'} />
                        </HStack>
                        <HStack>
                            <FormLabel marginRight={'37px'}>Password</FormLabel>
                            <Input type='text' width={'30vw'} margin-left={'22px'} />
                        </HStack>
                        <Button colorScheme={'green'} width={'30vw'} marginLeft={'60px'}>Login</Button>
                    </Stack>
                </FormControl>
                <Box w='100vw' h='100vh' bgGradient='linear(to-r, green.200, pink.500)' position={"absolute"} marginTop={'-16rem'}>



                </Box>
            </Box>

        </>
    )
}

export default Login;