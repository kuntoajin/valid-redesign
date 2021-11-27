import { memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Grid, GridItem, Heading, Link, Box } from "@chakra-ui/react";

const MenuDrawer = memo(() => {
    return (
        <Menu isLazy>
            <MenuButton bg="dark">
                <HamburgerIcon color="white" w={9} h={9} />
            </MenuButton>
            <MenuList bg="dark" color="white">
                <Heading as="p" ml={3} fontSize="xl">RUBRIK</Heading>
                <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Box>
                                <Link href="/nasional" fontFamily="Montserrat">
                                    Nasional
                                </Link>
                                <Grid>
                                    <Link href="/nasional/hukum" fontFamily="Montserrat" fontSize="sm" fontWeight="500">Hukum</Link>
                                    <Link href="/nasional/politik" fontFamily="Montserrat">Politik</Link>
                                    <Link href="/nasional/kesra" fontFamily="Montserrat">Kesra</Link>
                                </Grid>
                            </Box>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/kultura" fontFamily="Montserrat">
                                Kultura
                            </Link>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/opini" fontFamily="Montserrat">
                                Opini
                            </Link>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/video" fontFamily="Montserrat">
                                Video
                            </Link>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/ekonomi" fontFamily="Montserrat">
                                Ekonomi
                            </Link>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/terkini" fontFamily="Montserrat">
                                Terkini
                            </Link>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/infografis" fontFamily="Montserrat">
                                Infografis
                            </Link>
                        </MenuItem>
                    </GridItem>
                </Grid>
            </MenuList>
        </Menu>
    )
})

export default MenuDrawer