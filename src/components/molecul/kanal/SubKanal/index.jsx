import { memo } from "react";
import dynamic from "next/dynamic"
import { Box, Divider } from "@chakra-ui/react";

const LargeYard = dynamic(() => import("./molecules/LargeYard"))
const List = dynamic(() => import("./molecules/List"))

const SubKanal = memo(({data}) => {
    return (
        <Box>
            <LargeYard data={data?.largeYard} />
            <Divider />
            <List data={data?.list} />
        </Box>
    )
})

export default SubKanal