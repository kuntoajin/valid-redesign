import { memo } from "react";
import Image from 'next/image'
import { Box, Text } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    const photo = data?.main_photo

    return (
        <Box pr="0" pt={0} pl={{md: "10px", sm: "0"}}>
            {
                photo && 
                <Image 
                    placeholder="blur"
                    blurDataURL
                    src={photo}
                    alt={data?.title}
                    priority
                    quality={3}
                    width={500}
                    height={300}
                />
            }
            <Text as="em" dangerouslySetInnerHTML={{__html: data?.caption_photo}} fontSize="xs" />
        </Box>
    )
})

export default ImageComponent