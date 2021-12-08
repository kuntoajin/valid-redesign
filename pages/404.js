import { Container, Image, Center } from "@chakra-ui/react"
import Head from "next/head"

const Page404 = () => {
    return (
        <Container maxW="container.lg" centerContent h="70vh">
            <Head>
                <title>404 Halaman Tidak Ditemukan</title>
            </Head>
            <Image 
                src="/assets/static/images/404Page.svg" 
                w="50%"
                my="50px"
            />
            <Center as="h1" fontFamily="Montserrat" fontWeight="600" fontSize="lg">Yahh Halaman Tidak Ditemukan!</Center>
        </Container>
    )
}

export default Page404