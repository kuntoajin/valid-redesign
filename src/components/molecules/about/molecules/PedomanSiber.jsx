import { memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { apiGet } from "../../../../utils/api"

const PedomanSiber = memo(() => {
    const data = apiGet("api/portal/other/pedoman_media")
    return (
        <Box>
            <Text as="h2" fontSize="30px" fontWeight="700" color="orange">{data?.data?.name}</Text>
            <Text dangerouslySetInnerHTML={{__html: data?.data?.description}} fontSize="lg" textAlign="justify" />
        </Box>
    )
})

export default PedomanSiber