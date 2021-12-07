import { memo } from "react";
import Image from "next/image"
import Link from "next/link"
import { Center, Box, Divider, Text, Grid } from "@chakra-ui/react";
import RubrikTitle from "../atom/RubrikTitle";

const OtherStories = memo(({data}) => {
    return (
        <Box flex="1">
            <RubrikTitle title="OTHER STORIES" />
            <Grid templateColumns={{md: "1fr 20px 1fr 20px 1fr", sm: "auto"}} mt="15px">
                {
                    data?.map((list, index) => {
                        return (
                        <>
                            <Box alignItems="flex-start" justifyContent="start" key={index}>
                                <Link href={`/${list.kanal.toLowerCase()}/${list.slug}`}>
                                    <a>
                                        <Image 
                                            placeholder="blur"
                                            blurDataURL
                                            src={list.main_photo}
                                            alt={list.title}
                                            priority
                                            quality={5}
                                            width="350px"
                                            height="210px"
                                        />
                                        <Text as="h2" dangerouslySetInnerHTML={{__html: list.title}} fontSize="xl" noOfLines={2} />
                                    </a>
                                </Link>
                            </Box>
                            {
                                index !== 3 ?
                                <Center>
                                    <Divider orientation="vertical" />
                                </Center> : null
                            }
                        </>
                    )})
                }
            </Grid>
        </Box>
    )
})

export default OtherStories