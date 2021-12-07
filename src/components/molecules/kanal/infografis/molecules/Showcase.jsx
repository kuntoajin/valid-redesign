import { memo } from "react";
import Link from "next/link"
import Image from "next/image"
import { Grid, Box, Text, HStack, StackDivider } from "@chakra-ui/react";

const Showcase = memo(({data}) => {
    const image = data?.infografis?.image
    return (
        <Grid templateColumns="3fr auto">
            <Box>
                <Text as="h1" fontSize="30px" fontWeight="700" color="orange">Infografis</Text>
                <HStack divider={<StackDivider />}>
                    <Text>{data?.infografis?.date}</Text>
                    <Text>{data?.infografis?.time}</Text>
                </HStack>
                <Link href={`/infografis/${data?.infografis?.slug}`}>
                    <a>{data?.infografis?.title}</a>
                </Link>
                <Text dangerouslySetInnerHTML={{__html: data?.infografis?.description}} />
            </Box>
            <Box>
                {
                    image && 
                    <Image
                        src={image}
                        width="317px"
                        height="317px"
                        priority
                    />
                }
            </Box>
        </Grid>
    )
})

export default Showcase