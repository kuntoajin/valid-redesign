import { Box } from "@chakra-ui/react";
import { memo } from "react";

const Konten = memo(({data}) => {
    return (
        <Box dangerouslySetInnerHTML={{__html: data?.data?.content}}/>
    )
})

export default Konten