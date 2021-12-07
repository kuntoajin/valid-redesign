import { memo } from "react";
import Image from 'next/image'
import { Box, useMediaQuery } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 

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
                    width={isMobile ? 100 : 200}
                    height={isMobile ? 60 : 120}
                />
            }
        </Box>
    )
})

export default ImageComponent