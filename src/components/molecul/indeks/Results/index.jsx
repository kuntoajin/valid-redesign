import { memo } from "react";
import dynamic from 'next/dynamic'
import { Box } from "@chakra-ui/react";

const ImageComponent = dynamic(() => import('./atoms/image'))
const InfoComponent = dynamic(() => import('./atoms/info'))

const Results = memo(({data}) => {
    console.log(data)
    return (
        <Box>
            {
                data?.data?.map((list, index) => (
                    <Box key={index}>
                        <ImageComponent data={list} />
                        <InfoComponent data={list} />
                    </Box>
                ))
            }
        </Box>
    )
})

export default Results