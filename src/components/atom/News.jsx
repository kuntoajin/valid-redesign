import { memo } from "react";
import Image from 'next/image'
import { Box, Text, Link, Skeleton, Grid } from "@chakra-ui/react";

export const NewsTerkiniHome = memo(({data, index}) => {
    return (
        <Grid templateColumns="1fr 2fr" mb="10px">
            <Box mr="5px" pl="10px">
                <Skeleton isLoaded>
                    <Image 
                        placeholder="blur"
                        blurDataURL
                        src={data?.main_photo}
                        alt={data?.title}
                        width={100}
                        height={60}
                        quality={3}
                        priority
                    />
                </Skeleton>
            </Box>
            <Link href={`/${data?.kanal?.toLowerCase()}/${data?.slug}`}>
                <Text as="h2" dangerouslySetInnerHTML={{__html: data?.title}} lineHeight="15px" fontSize="13px" noOfLines={2} />
            </Link>
        </Grid>
    )
})

