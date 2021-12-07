import { memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { apiGet } from "../../../../utils/api"

const KebijakanPrivasi = memo(() =>{
    const data = apiGet('api/portal/other/kebijakan_privasi')
    return (
        <Box>
            <Text as="h2" fontSize="30px" fontWeight="700" color="orange">Kebijakan Privasi</Text>
            <Text dangerouslySetInnerHTML={{__html: data?.data?.description}} fontSize="lg" textAlign="justify" />
        </Box>
    )
})

export default KebijakanPrivasi