import { memo } from "react"
import Head from "next/head"
import { Container, Center, Image } from "@chakra-ui/react"

const Message = memo(() => {
    return (
        <Container maxW="container.lg" centerContent h="70vh">
            <Head>
                <title>Selamat Akun Anda Telah Aktif!</title>
            </Head>
            <Image src="/assets/static/images/RegisterPage.svg" w="50%" my="50px" />
            <Center as="h1" fontFamily="Montserrat" fontWeight="600" fontSize="lg">
                Yeay terima kasih telah mendaftar di Validnews.id. Anda akan redirect ke halaman login sesaat lagi.
            </Center>
      </Container>
    )
})

export default Message