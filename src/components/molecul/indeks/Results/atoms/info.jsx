import { memo } from "react";
import { Text, Box, HStack, StackDivider } from "@chakra-ui/react";

const InfoComponent = memo(({data}) => {
    return (
        <Box>
            <Text as="h2" fontSize="xl" dangerouslySetInnerHTML={{__html: data?.title}} />
            <Text as="p" dangerouslySetInnerHTML={{__html: data?.lower_title}} />
        </Box>
    )
})

export default InfoComponent