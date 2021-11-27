import { Box, Divider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { memo } from "react";

const Infografis = dynamic(() => import('../atoms/infografis'))
const Terpopuler = dynamic(() => import('../atoms/terpopuler'))

const RightContent = memo((data) => {
    return (
        <Box>
            <Infografis data={data.data.infografis.data} />
            <Divider orientation="horizontal"/>
            <Terpopuler data={data.data.terpopuler} />
        </Box>
    )
})

export default RightContent