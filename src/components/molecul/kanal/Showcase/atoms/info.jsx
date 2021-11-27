import { memo } from "react";
import { Text, Box } from "@chakra-ui/react";
import RubrikTitle from '../../../../atom/RubrikTitle'

const InfoComponent = memo(({data}) => {
    return (
        <Box>
            <RubrikTitle title={data?.largeYard?.sub_kanal.toUpperCase()} />
            <Text as="h2">{data?.largeYard?.title}</Text>
            <Text as="p">{data?.largeYard?.lower_title}</Text>
        </Box>
    )
})

export default InfoComponent