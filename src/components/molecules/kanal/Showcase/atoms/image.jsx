import { memo } from "react";
import Image from 'next/image'
import { Box, Text } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    const photo = data?.largeYard?.main_photo

    return (
        <Box p={{md: "10px", sm: "0"}} pt={0}>
            {
                photo && 
                <Image 
                    placeholder="blur"
                    blurDataURL
                    src={photo}
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