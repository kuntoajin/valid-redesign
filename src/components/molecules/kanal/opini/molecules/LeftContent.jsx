import { memo } from "react";
import dynamic from "next/dynamic";
import { Box, Divider, Grid, HStack, StackDivider } from "@chakra-ui/react";

const InfoComponent = dynamic(() => import("../atoms/info"))
const ImageComponent = dynamic(() => import("../atoms/image"))
const SubKanal = dynamic(() => import("../atoms/subKanal"))

const LeftContent = memo(({data, title}) => {
    return (
        <Box>
            <Grid templateColumns={{sm: "auto", md: "1fr 2fr"}}>
                <InfoComponent data={data?.data?.last_opini} title={title} />
                <ImageComponent data={data?.data?.last_opini} />
            </Grid>
            <Divider orientation="horizontal" />
            <HStack divider={<StackDivider />} alignItems="flex-start">
                <SubKanal title="FOKUS" data={data?.data?.fokus} />
                <SubKanal title="SURVEI" data={data?.data?.paradigma} />
            </HStack>
        </Box>
    )
})

export default LeftContent