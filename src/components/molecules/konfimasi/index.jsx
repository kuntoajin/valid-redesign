import { useEffect } from "react"
import { useRouter } from "next/router"
import { Container } from "@chakra-ui/react"
import Message from "./molecules/Message"

const Konfirmasi = () => {
    const router = useRouter()

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/portal/konfirmasi/${router.query.detail}`)
        }
        dataFetch()

        // setTimeout(() => router.push('/login'), 3000)
    })

    return (
        <Container maxW="container.lg">
            <Message />
        </Container>
    )
}

export default Konfirmasi