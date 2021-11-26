import Image from 'next/image'
import Head from 'next/head'
import { Box, Container, Text, HStack, StackDivider } from "@chakra-ui/react"
import RubrikTitle from "../../atom/RubrikTitle"

const DetailComponents = ({ data }) => {
    console.log(data?.data)
    return (
        <Container maxW="container.lg">
            <Head>
                <title>{data?.data?.title}</title>
                <meta />
            </Head>
            <RubrikTitle title={data?.data?.category?.toUpperCase()} />
            <Box>
                <HStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />}>
                    <Text fontFamily="Montserrat" fontSize="sm">{data?.data?.date}</Text>
                    <Text fontFamily="Montserrat" fontSize="sm">{data?.data?.time}</Text>
                </HStack>
                <Text as="h1" dangerouslySetInnerHTML={{__html: data?.data?.title}} />
                <Text as="h2" dangerouslySetInnerHTML={{__html: data?.data?.lower_title}} />
                <Box>
                    {data?.data?.list_reporter.length <= 0 ? null : <Text as="p" fontSize="xs" fontFamily="Montserrat">Penulis: {data?.data?.list_reporter.map((list, index) => {
                        return (
                            list.type === 1 ? <a className='penulis' href={`${list.type === 1 ? `/reporter/${list.id}` : '' }`} key={index}>{list.name}, </a> : 
                            <small className='penulis' key={index}>{list.name}, </small>
                        )
                    })}</Text>}
                    <Text as="p" fontSize="xs" fontFamily="Montserrat">Editor: {data?.data?.editor}</Text>
                </Box>
                <Image 
                    src={data?.data?.main_photo}
                    alt={data?.data?.title}
                    height={300}
                    width={500}
                    priority
                    quality={5}
                />
                <Text dangerouslySetInnerHTML={{__html: data?.data?.caption_photo}}/>
                <Box dangerouslySetInnerHTML={{__html: data?.data?.content}} />
            </Box>
        </Container>
    )
}

export default DetailComponents