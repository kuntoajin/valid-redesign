import { memo } from "react";
import { Box, Text } from "@chakra-ui/layout";

const InfoComponent = memo(({data}) => {
    return (
        <Box>
            <Text as="h2" fontSize="xl" dangerouslySetInnerHTML={{__html: data.title}} />
            <Text as="p" dangerouslySetInnerHTML={{__html: data.description}} noOfLines={[2]} />
        </Box>
    )
})

export default InfoComponent