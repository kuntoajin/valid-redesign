import { memo } from "react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Grid, GridItem, Heading, Link, Box, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

const MenuDrawer = memo(() => {
    const router = useRouter()
    return (
        <Menu isLazy>
            <MenuButton bg="dark">
                <HamburgerIcon color="white" w={9} h={9} />
            </MenuButton>
            <SearchIcon color="white" w={7} h={7} onClick={() => router.push("/search")} _hover={{cursor: "pointer"}} ml="10px" />
            <MenuList bg="dark" color="white">
                <Heading as="p" ml={3} fontSize="xl">RUBRIK</Heading>
                <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Box>
                                <Link href="/nasional" fontFamily="Montserrat" fontWeight="700" color="orange">
                                    Nasional
                                </Link>
                                <Grid>
                                    <Link href="/nasional/hukum" fontFamily="Montserrat" fontSize="sm">Hukum</Link>
                                    <Link href="/nasional/politik" fontFamily="Montserrat" fontSize="sm">Politik</Link>
                                    <Link href="/nasional/kesra" fontFamily="Montserrat" fontSize="sm">Kesra</Link>
                                    <Link href="/nasional/oase" fontFamily="Montserrat" fontSize="sm">Oase</Link>
                                    <Link href="/indeks/nasional" fontFamily="Montserrat" fontSize="sm">Indeks</Link>
                                </Grid>
                            </Box>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Box>
                                <Link href="/kultura" fontFamily="Montserrat" fontWeight="700" color="orange">
                                    Kultura
                                </Link>
                                <Grid>
                                    <Link href="/kultura/gaya-hidup" fontFamily="Montserrat" fontSize="sm">Gaya Hidup</Link>
                                    <Link href="/kultura/pariwisata" fontFamily="Montserrat" fontSize="sm">Pariwisata</Link>
                                    <Link href="/kultura/seni-budaya" fontFamily="Montserrat" fontSize="sm">Seni & Budaya</Link>
                                    <Link href="/kultura/tekno" fontFamily="Montserrat" fontSize="sm">Tekno</Link>
                                    <Link href="/kultura/vista" fontFamily="Montserrat" fontSize="sm">Vista</Link>
                                    <Link href="/indeks/kultura" fontFamily="Montserrat" fontSize="sm">Indeks</Link>
                                </Grid>
                            </Box>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Box>
                                <Link href="/opini" fontFamily="Montserrat" fontWeight="700" color="orange">
                                    Opini
                                </Link>
                                <Grid>
                                    <Link href="/opini/tajuk" fontFamily="Montserrat" fontSize="sm">Tajuk</Link>
                                    <Link href="/opini/survei" fontFamily="Montserrat" fontSize="sm">Survei</Link>
                                    <Link href="/opini/fokus" fontFamily="Montserrat" fontSize="sm">Fokus</Link>
                                    <Link href="/indeks/opini" fontFamily="Montserrat" fontSize="sm">Indeks</Link>
                                </Grid>
                            </Box>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Box>
                                <Link href="/video" fontFamily="Montserrat" fontWeight="700" color="orange">
                                    Video
                                </Link>
                                <Grid>
                                    <Link href="/video/visixty" fontFamily="Montserrat" fontSize="sm">Visixty</Link>
                                    <Link href="/video/vistory" fontFamily="Montserrat" fontSize="sm">Vistory</Link>
                                    <Link href="/video/vtalk" fontFamily="Montserrat" fontSize="sm">Vtalk</Link>
                                </Grid>
                            </Box>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Box>
                                <Link href="/ekonomi" fontFamily="Montserrat" fontWeight="700" color="orange">
                                    Ekonomi
                                </Link>
                                <Grid>
                                    <Link href="/ekonomi/berita" fontFamily="Montserrat" fontSize="sm">Berita</Link>
                                    <Link href="/ekonomi/wirausaha" fontFamily="Montserrat" fontSize="sm">Wirausaha</Link>
                                    <Link href="/indeks/ekonomi" fontFamily="Montserrat" fontSize="sm">Indeks</Link>
                                </Grid>
                            </Box>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Box>
                                <Link href="/terkini" fontFamily="Montserrat" fontWeight="700" color="orange">
                                    Terkini
                                </Link>
                                <Grid>
                                    <Link href="/catatan-valid" fontFamily="Montserrat" fontSize="sm">Catatan Valid</Link>
                                    <Link href="/indeks/terkini" fontFamily="Montserrat" fontSize="sm">Indeks</Link>
                                </Grid>
                            </Box>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/infografis" fontFamily="Montserrat" fontWeight="700" color="orange">
                                Infografis
                            </Link>
                        </MenuItem>
                    </GridItem>
                </Grid>
                <Divider orientation="horizontal" />
                <Heading as="p" ml={3} fontSize="xl" mt="10px">TENTANG KAMI</Heading>
                <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/about#redaksi" fontFamily="Montserrat" fontWeight="700" color="orange">
                                Redaksi
                            </Link>
                        </MenuItem>
                    </GridItem>
                    <GridItem>
                        <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                            <Link href="/about#kontak" fontFamily="Montserrat" fontWeight="700" color="orange">
                                Kontak
                            </Link>
                        </MenuItem>
                    </GridItem>
                </Grid>
            </MenuList>
        </Menu>
    )
})

export default MenuDrawer