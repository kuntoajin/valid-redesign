import { memo } from "react";
import Image from 'next/image'
import { Box, Text, HStack, StackDivider, Link, Skeleton, VStack, Grid } from "@chakra-ui/react";
import RubrikTitle from "./RubrikTitle";

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export const NewsTerkiniHome = memo(({data}) => {
    return (
        <Grid templateColumns="1fr 3fr" mb="10px">
            <Box mr="5px">
                <Skeleton isLoaded>
                    <Image 
                        // loader={myLoader}
                        src={data?.main_photo}
                        alt={data?.title}
                        width={500}
                        height={300}
                        layout="responsive"
                        quality={5}
                        priority
                    />
                </Skeleton>
            </Box>
            <Link href={`/${data?.kanal?.toLowerCase()}/${data?.slug}`}>
                <Text as="h2" dangerouslySetInnerHTML={{__html: data?.title}} lineHeight="15px" fontSize="13px" />
            </Link>
        </Grid>
    )
})

