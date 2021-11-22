import Image from 'next/image'
import { Box, Container, Center, Link } from "@chakra-ui/react"

const Header = () => {
    return (
        <Container maxW="container.lg" py="10px">
            <Center borderBottom="1px" borderColor="gray.200">
                <Link href="/">
                    <Image
                        src="/assets/static/images/ValidnewsMainLogo.png"
                        alt="Picture of the author"
                        priority
                        width={300}
                        height={60}
                        quality={20}
                    />
                </Link>
            </Center>
        </Container>
    )
}

export default Header