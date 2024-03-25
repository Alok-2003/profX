import { Flex, Box } from '@chakra-ui/react'
import Sidenav from '../Sidenav/sidenav'
import Topnav from '../Topnav/topnav'
const NavigationLayout = ({ title, children }) => {
    return (
        <>
            <Flex>

                <Box flexGrow={1}>
                    <Topnav title={title} />
                    <Box p={"4"}>{children}</Box>
                </Box>
                <Box>
                    <Sidenav />
                </Box>
            </Flex>

        </>
    )
}

export default NavigationLayout
