import { memo } from "react";
import Image from 'next/image'
import { Box, Text } from "@chakra-ui/react";
import RubrikTitle from "../../../atom/RubrikTitle";

const Infografis = memo(({data}) => {
    return (
        <Box>
            <RubrikTitle title="INFOGRAFIS" />
            <Image
                placeholder="blur"
                blurDataURL
                src={data?.image}
                alt={data?.title}
                priority
                quality={5}
                width={324}
                height={324}
            />
            <Text as="h2" fontSize={20} dangerouslySetInnerHTML={{__html: data?.title}} />
        </Box>
    )
})

export default Infografis