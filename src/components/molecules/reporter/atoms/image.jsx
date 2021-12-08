import { memo } from "react"
import Image from "next/image"
import { Box } from "@chakra-ui/react"

const ImageComponent = memo(({data}) => {
    return (
        <Box mr="20px">
            {
                data && (
                    <Image 
                        src={data?.avatar}
                        width="200px"
                        height="200px"
                    />
                )
            }
        </Box>
    )
})

export default ImageComponent