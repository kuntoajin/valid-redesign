import { Box, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import { memo } from "react";
import RubrikTitle from "../../../atom/RubrikTitle";

const Terpopuler = memo(({data}) => {
    return (
        <Box>
            <RubrikTitle title="TERPOPULER" />
            <Stack divider={<StackDivider borderColor="gray.200" />}>
                {data?.data?.map((list, index) => (
                    <Link href={`/${list?.kanal.toLowerCase()}/${list?.slug}`} key={index}>
                        <Text as="h2" dangerouslySetInnerHTML={{__html: list.title}} lineHeight="20px" fontSize="sm" />
                    </Link>
                ))}
            </Stack>
        </Box>
    )
})

export default Terpopuler