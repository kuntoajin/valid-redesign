import { memo } from "react";
import Image from 'next/image'
import { Box, Text } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    return (
        <Box p={{md: "10px", sm: "0"}} pt={0}>
            {
                data?.largeYard && 
                <Image 
                    placeholder="blur"
                    blurDataURL
                    src={data?.largeYard?.main_photo}
                    alt={data?.largeYard?.title}
                    priority
                    quality={3}
                    width={500}
                    height={300}
                />
            }
            <Text as="em" dangerouslySetInnerHTML={{__html: data?.largeYard?.caption_photo}} fontSize="xs" />
        </Box>
    )
})

export default ImageComponent