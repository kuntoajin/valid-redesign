import { memo } from "react";
import dynamic from 'next/dynamic'
import { Box } from "@chakra-ui/react";

const ImageComponent = dynamic(() => import('./atoms/image'))
const InfoComponent = dynamic(() => import('./atoms/info'))

const Showcase = memo(({data}) => {
    return (
        <Box>
            <InfoComponent data={data} />
            <ImageComponent data={data} />
        </Box>
    )
})

export default Showcase