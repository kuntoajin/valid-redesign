import { memo } from "react";
import Image from 'next/image'
import { Box, Text } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    return (
        <Box>
            {
                data?.main_photo && 
                <Image 
                    placeholder="blur"
                    blurDataURL
                    src={data?.main_photo}
                    alt={data?.title}
                    priority
                    quality={3}
                    width={200}
                    height={120}
                />
            }
        </Box>
    )
})

export default ImageComponent