import { memo } from "react";
import { Stack, Box, StackDivider, Link, Text } from "@chakra-ui/react";
import RubrikTitle from "../../../../atom/RubrikTitle";

const TerpopulerTerkini = memo(({data}) => {
    return (
        <Box>
            <RubrikTitle title="TERPOPULER" />
            <Stack divider={<StackDivider borderColor="gray.200" />}>
                {data?.map((list, index) => (
                    <Link href={`/${list?.kanal.toLowerCase()}/${list?.slug}`} key={index}>
                        <Text as="h2" dangerouslySetInnerHTML={{__html: list.title}} lineHeight="20px" fontSize="sm" />
                    </Link>
                ))}
            </Stack>
        </Box>
    )
})

export default TerpopulerTerkini