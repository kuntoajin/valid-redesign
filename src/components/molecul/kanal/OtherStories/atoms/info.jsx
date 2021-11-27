import { memo } from "react";
import { Text, Box, HStack, StackDivider } from "@chakra-ui/react";

const InfoComponent = memo(({data}) => {
    return (
        <Box>
            <Text as="h2" fontSize="lg" dangerouslySetInnerHTML={{__html: data.title}} />
        </Box>
    )
})

export default InfoComponent