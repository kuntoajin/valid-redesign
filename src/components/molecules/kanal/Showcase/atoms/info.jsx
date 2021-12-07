import { memo } from "react";
import { Text, Box, HStack, StackDivider } from "@chakra-ui/react";
import RubrikTitle from '../../../../atom/RubrikTitle'

const InfoComponent = memo(({data, title}) => {
    return (
        <Box>
            <Text as="h1" fontSize="30px" fontWeight="700" color="orange">{title}</Text>
            <RubrikTitle title={data?.largeYard?.sub_kanal?.toUpperCase()} />
            <HStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />}>
                <Text fontFamily="Montserrat" fontSize="sm">{data?.largeYard?.date}</Text>
                <Text fontFamily="Montserrat" fontSize="sm">{data?.largeYard?.time}</Text>
            </HStack>
            <Text as="h2" fontSize="22px">{data?.largeYard?.title}</Text>
            <Text as="p">{data?.largeYard?.lower_title}</Text>
        </Box>
    )
})

export default InfoComponent