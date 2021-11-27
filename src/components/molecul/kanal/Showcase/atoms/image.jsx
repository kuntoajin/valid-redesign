import { memo } from "react";
import Image from 'next/image'
import { Box } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    return (
        <Box p={5} pt={0}>
            {
                data?.largeYard && 
                <Image 
                    src={data?.largeYard?.main_photo}
                    priority
                    quality={5}
                    width="500"
                    height="300"
                />
            
            }
        </Box>
    )
})

export default ImageComponent