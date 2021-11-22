import dynamic from "next/dynamic"
import { 
    Box, 
    Container, 
    Flex, 
    Spacer, 
    Link,
    Heading } from "@chakra-ui/react";
import { memo } from "react";

const MenuDrawer = dynamic(() => import('../atom/Menu'))

const Nav = memo(() => {
    return (
        <Box bg="#33424d" borderBottom="4px" borderBottomColor="orange">
            <Container maxW="container.lg" py="10px">
                <Flex>
                    <MenuDrawer />
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