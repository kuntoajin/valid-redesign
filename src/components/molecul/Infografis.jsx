import { memo } from "react";
import Image from 'next/image'
import { Box, Text } from "@chakra-ui/react";
import { apiGet } from "../../utils/api";
import RubrikTitle from "../atom/RubrikTitle";

const Infografis = memo(() => {
    const data = apiGet('/api/portal/home/infographic')

    return (
        <Box>
            <RubrikTitle title="INFOGRAFIS" />
            {
                data?.data?.largeYard &&
                <Image
                    src={data?.data?.largeYard?.image}
                    alt={data?.data?.largeYard?.title}
                    width="240"
                    height="240"
                    priority
                    quality={8}
                />
            }
            <Text as="h2" fontSize="sm" dangerouslySetInnerHTML={{__html: data?.data?.largeYard?.title}} />
        </Box>
    )
})

export default Infografis