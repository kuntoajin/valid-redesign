import { memo } from "react";
import { Box, VStack, StackDivider, Link, Text, Stack } from "@chakra-ui/react"
import RubrikTitle from "../atom/RubrikTitle";
import { apiGet } from "../../utils/api";

const Terpopuler = memo(() => {
    const data = apiGet('api/portal/home/populer')

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