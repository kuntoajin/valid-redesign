import Image from 'next/image'
import Link from 'next/link'
import { Box, Container, Center, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <Container maxW="container.lg" py="10px">
            <Center borderBottom="1px" borderColor="gray.200">
                <Link href="/">
                    <a>
                        <Image
                            src="/assets/static/images/ValidnewsMainLogo.png"
                            alt="Picture of the author"
                            priority
                            width={300}
                            height={60}
                            quality={20}
                        />
                        <Text display="none">Logo</Text>
                    </a>
                </Link>
            </Center>
        </Container>
    )
}

export default Header