import { memo } from "react";
import Image from 'next/image'
import { Box } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    return (
        <Box>
            {
                data?.data?.main_photo && 
                <Image 
                    placeholder="blur"
                    blurDataURL
                    src={data?.data?.main_photo}
                    alt={data?.data?.title}
                    priority
                    quality={10}
                    width={660}
                    height={396}
                />
            }
        </Box>
    )
})

export default ImageComponent