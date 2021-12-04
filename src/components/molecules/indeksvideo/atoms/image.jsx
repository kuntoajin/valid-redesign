import { memo } from "react";
import Image from "next/image"
import { Box } from "@chakra-ui/react";

const ImageComponent = memo(({data}) => {
    return (
        <Box>
            <Image
                src={data?.thumbnail}
                width={200}
                height={120}
            />
        </Box>
    )
})

export default ImageComponent