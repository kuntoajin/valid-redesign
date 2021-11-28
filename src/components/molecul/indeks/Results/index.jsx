import { memo } from "react";
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Box, VStack, Divider, Grid } from "@chakra-ui/react";

const ImageComponent = dynamic(() => import('./atoms/image'))
const InfoComponent = dynamic(() => import('./atoms/info'))

const Results = memo(({data}) => {
    return (
        <Box>
            <VStack divider={<Divider borderColor="gray.200" />} alignItems="flex-start">
                {
                    data?.data?.map((list, index) => (
                        <Link href={`/${list.kanal.toLowerCase()}/${list.slug}`} key={index}>
                            <a>
                                <Grid templateColumns="1fr 4fr" gap="3">
                                    <ImageComponent data={list} />
                                    <InfoComponent data={list} />
                                </Grid>
                            </a>
                        </Link>
                    ))
                }
            </VStack>
        </Box>
    )
})

export default Results