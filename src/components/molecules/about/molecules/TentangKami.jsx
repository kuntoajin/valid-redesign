import { memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { apiGet } from "../../../../utils/api"

const TentangKami = memo(() =>{
    const data = apiGet('api/portal/other/tentang_kami')
    return (
        <Box>
            <Text dangerouslySetInnerHTML={{__html: data?.data?.description}} fontSize="lg" textAlign="justify" />
        </Box>
    )
})

export default TentangKami