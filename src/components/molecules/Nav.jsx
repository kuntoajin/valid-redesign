import { memo } from "react";
import dynamic from "next/dynamic"
import { 
    Box, 
    Container, 
    Flex, 
    Spacer, 
    Link,
    Heading,
    useMediaQuery,
    Grid 
} from "@chakra-ui/react";

const MenuDrawer = dynamic(() => import('../atom/Menu'))
const MenuDrawerMobile = dynamic(() => import('../mobile/atoms/Menu'))

const Nav = memo(() => {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 

    return (
        <Box bg="#33424d" borderBottom="4px" borderBottomColor="orange">
            <Container maxW="container.lg" py="10px">
                <Flex>
                    <Box>
                        {!isMobile && <MenuDrawer />}
                        {isMobile && <MenuDrawerMobile />}
                    </Box>
                    <Spacer />
                    <Flex alignItems="center">
                        <Link href="/subscribe" color="white">
                            <Heading fontSize="sm" mr="10px">
                                SUBSCRIBE
                            </Heading>
                        </Link>
                        <Link href="/login" color="white">
                            <Heading fontSize="sm">
                                LOGIN
                            </Heading>
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
})

export default Nav