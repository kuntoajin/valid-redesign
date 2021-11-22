import Image from 'next/image'
import { Box, VStack, Link, Text, Grid, StackDivider, Divider, Wrap, WrapItem } from "@chakra-ui/react"
import { memo } from "react"
import RubrikTitle from "./RubrikTitle"

const NewsWithChildren = memo(({title, data}) => {
    const photo = data?.data?.largeYard.main_photo
    return (
        <Box>
            <RubrikTitle title={title} />
            <VStack>
                <Box>
                    <Link href={`/${data?.data?.largeYard?.kanal.toLowerCase()}/${data?.data?.largeYard?.slug}`}>
                        <Box>
                            {
                                photo && 
                                <Image
                                src={photo}
                                priority
                                alt={data?.data?.largeYard?.title}
                                width="350px"
                                height="210px"
                                quality={5}
                                />
                            }
                        </Box>
                        <Text as="h2" dangerouslySetInnerHTML={{__html: data?.data?.largeYard?.title}} fontSize="xl" noOfLines={[2, 3]} />
                    </Link>
                </Box>
                <Divider orientation="horizontal" borderColor="gray.200" />
                <Box>
                    <VStack divider={<Divider borderColor="gray.200" />}>
                        {
                            data?.data?.list.map((list, index) => (
                                <Link href={`${list.kanal.toLowerCase()}/${list.slug}`} key={index}>
                                    <Grid templateColumns="1fr 2fr" gap={3}>
                                        <Box flex="1">
                                            <Image 
                                                src={list.main_photo}
                                                priority
                                                alt={list.title}
                                                height={60}
                                                width={101}
                                                quality={3}
                                            />
                                        </Box>
                                        <Text as="h2" fontSize="sm" dangerouslySetInnerHTML={{__html: list. title}} flex="1" fontWeight="700" noOfLines={[2, 3]} />
                                    </Grid>
                                </Link>
                            ))
                        }
                    </VStack>
                </Box>
            </VStack>
        </Box>
    )
})

export default NewsWithChildren