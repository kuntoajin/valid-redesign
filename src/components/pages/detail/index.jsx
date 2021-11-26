import Image from 'next/image'
import Head from 'next/head'
import { Box, Container, Text } from "@chakra-ui/react"
import RubrikTitle from "../../atom/RubrikTitle"

const DetailComponents = ({ data }) => {
    return (
        <Container maxW="container.lg">
            <Head>
                <title>{data?.data?.title}</title>
            </Head>
            <RubrikTitle title={data?.data?.category?.toUpperCase()} />
            <Box>
                <Text as="h1" dangerouslySetInnerHTML={{__html: data?.data?.title}} />
                <Text as="h2" dangerouslySetInnerHTML={{__html: data?.data?.lower_title}} />
                <Image 
                    src={data?.data?.main_photo}
                    height={300}
                    width={500}
                    priority
                    quality={5}
                />
            </Box>
        </Container>
    )
}

export default DetailComponents