import { memo } from "react";
import dynamic from 'next/dynamic'
import { Box, Divider, Grid } from "@chakra-ui/react";

const ImageComponent = dynamic(() => import('./atoms/image'))
const InfoComponent = dynamic(() => import('./atoms/info'))
const TerpopulerTerkini = dynamic(() => import('./atoms/terpopuler'))

const Showcase = memo(({data, populer, title}) => {
    return (
        <Box>
            <Grid templateColumns={{sm: "auto", md: "3fr 20px 1fr"}}>
                <Grid templateColumns={{sm: "auto", md: "1fr 2fr"}}>
                    <InfoComponent data={data} title={title} />
                    <ImageComponent data={data} />
                </Grid>
                <Divider orientation="vertical" />
                <Box>
                    <TerpopulerTerkini data={populer} />
                </Box>
            </Grid>
        </Box>
    )
})

export default Showcase