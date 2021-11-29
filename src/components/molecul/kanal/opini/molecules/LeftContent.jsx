import { memo } from "react";
import { Box, Grid } from "@chakra-ui/react";

import InfoComponent from "../../Showcase/atoms/info";
import ImageComponent from "../../Showcase/atoms/image";

const LeftContent = memo(({data, title}) => {
    return (
        <Box>
            <Grid templateColumns={{sm: "auto", md: "1fr 2fr"}}>
                <InfoComponent data={data?.data?.last_opini} title={title} />
                <ImageComponent data={data?.data?.last_opini} />
            </Grid>
        </Box>
    )
})

export default LeftContent