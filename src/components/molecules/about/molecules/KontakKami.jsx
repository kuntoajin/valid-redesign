import { memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { apiGet } from "../../../../utils/api"

const KontakKami = memo(() =>{
    const data = apiGet('api/portal/other/kontak')
    return (
        <Box>
            <Text as="h2" fontSize="30px" fontWeight="700" color="orange">Kontak Kami</Text>
            <Text dangerouslySetInnerHTML={{__html: data?.data?.description}} fontSize="lg" textAlign="justify" />
        </Box>
    )
})

export default KontakKami