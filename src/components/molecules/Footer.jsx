import Image from 'next/image'
import { Box, VStack, StackDivider, HStack, Center, Link, Heading, Flex } from "@chakra-ui/react"

const date = new Date()

const Footer = () => {
    return (
        <footer>
            <Box bg="#33424d" py="20px">
                <VStack
                    spacing={4}
                    align="stretch"
                >
                    <Center>
                        <Box display={{sm: "grid", md: "flex"}}>
                            <Link href="/" color="white">
                                <Heading as="p" size="xs">
                                    Tentang kami
                                </Heading>
                            </Link>
                            <Link href="/" color="white">
                                <Heading as="p" size="xs">
                                    Redaksi
                                </Heading>
                            </Link>
                            <Link href="/" color="white">
                                <Heading as="p" size="xs">
                                    Pedoman dan Siber
                                </Heading>
                            </Link>
                            <Link href="/" color="white">
                                <Heading as="p" size="xs">
                                    Disclaimer
                                </Heading>
                            </Link>
                            <Link href="/" color="white">
                                <Heading as="p" size="xs">
                                    Privacy Policy
                                </Heading>
                            </Link>
                            <Link href="/" color="white">
                                <Heading as="p" size="xs">
                                    Kontak
                                </Heading>
                            </Link>
                        </Box>
                    </Center>
                    <Center>
                        <HStack>
                            <Link href="/" color="white">
                                <Image
                                    src="/assets/static/images/LogoAmsi.png"
                                    alt="Amsi"
                                    height="45"
                                    width="150"
                                    priority
                                    quality={8}
                                />
                            </Link>
                            <Link href="/" color="white">
                                <Image
                                    src="/assets/static/images/LogoVisi.png"
                                    alt="Visi"
                                    height="45"
                                    width="150"
                                    priority
                                    quality={8}
                                />
                            </Link>
                        </HStack>
                    </Center>
                    <Center color="white">
                        <Heading as="p" size="xs">
                            ©Validnews {date.getFullYear()} All rights reserved.
                        </Heading>
                    </Center>
                </VStack>
            </Box>
        </footer>
    )
}

export default Footer