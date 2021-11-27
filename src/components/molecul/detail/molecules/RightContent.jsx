import { Box } from "@chakra-ui/react";
import { memo } from "react";
import Infografis from "../atoms/infografis";

const RightContent = memo(({data}) => {
    return (
        <Box>
            <Infografis data={data.data} />
        </Box>
    )
})

export default RightContent