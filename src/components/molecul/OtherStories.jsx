import { memo } from "react";
import Image from "next/image"
import { HStack, Box, StackDivider, Text, Grid } from "@chakra-ui/react";
import RubrikTitle from "../atom/RubrikTitle";

const OtherStories = memo(({data}) => {
    return (
        <Box flex="1">
            <RubrikTitle title="OTHER STORIES" />
            <HStack divider={<StackDivider borderColor="gray.200" />} alignItems="flex-start">
                {
                    data?.map((list, index) => (
                        <Grid alignItems="flex-start" justifyContent="start" key={index}>
                            <Image 
                                src={list.main_photo}
                                alt={list.title}
                                priority
                                quality={3}
                                width="350px"
                                height="210px"
                            />
                            <Text as="h2" dangerouslySetInnerHTML={{__html: list.title}} fontSize="xl" />
                        </Grid>
                    ))
                }
            </HStack>
        </Box>
    )
})

export default OtherStories