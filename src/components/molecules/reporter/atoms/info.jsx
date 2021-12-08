import { memo } from "react";
import { Box, Text } from "@chakra-ui/react";

const InfoComponent = memo(({data}) => {
    return (
        <Box>
            <Text as="h1" fontFamily="Montserrat" fontWeight="700">{data?.fullname}</Text>
            <Text as="h2" fontFamily="Montserrat" fontWeight="400">{data?.position}</Text>
        </Box>
    )
})

export default InfoComponent