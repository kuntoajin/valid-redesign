import { memo } from "react";
import { Text, Box } from "@chakra-ui/react";

const InfoComponent = memo(({data}) => {
    return (
        <Box>
            <Text as="h2" fontSize="md" dangerouslySetInnerHTML={{__html: data?.title}} noOfLines={2} />
        </Box>
    )
})

export default InfoComponent