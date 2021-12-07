import { memo } from "react";
import dynamic from "next/dynamic"
import { Box } from "@chakra-ui/layout";

const Tajuk = dynamic(() => import("../atoms/tajuk"))

const RightContent = memo(() => {
    return (
        <Box>
            <Tajuk />
        </Box>
    )
})

export default RightContent