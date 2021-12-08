import { memo } from "react"
import dynamic from "next/dynamic"
import { useRouter } from 'next/router'
import { Box, Center, Divider, Container } from "@chakra-ui/react"
import { apiGet } from "../../../utils/api"

const ImageComponent = dynamic(() => import("./atoms/image"))
const InfoComponent = dynamic(() => import("./atoms/info"))
const News = dynamic(() => import("./atoms/news"))

const Reporter = memo(() => {
    const router = useRouter()
    const data = apiGet(`api/portal/category/newsByReporter/${router.query.slug}?page=1`)

    return (
        <Container maxW="container.lg">
            <Box>
                <Center>
                    <ImageComponent data={data?.data?.employee} />
                    <InfoComponent data={data?.data?.employee} />
                </Center>
                <Divider orientation="horizontal" />
                <News data={data?.data?.news} />
            </Box>
        </Container>
    )
})

export default Reporter