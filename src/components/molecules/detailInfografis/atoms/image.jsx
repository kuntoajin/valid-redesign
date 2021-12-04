import { memo } from "react";
import { Box, Image } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    return (
        <Box>
            {
                data?.data?.image && 
                <Image 
                    src={data?.data?.image}
                    alt={data?.data?.title}
                />
            }
        </Box>
    )
})

export default ImageComponent