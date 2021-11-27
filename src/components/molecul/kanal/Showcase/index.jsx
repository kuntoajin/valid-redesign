import { memo } from "react";
import dynamic from 'next/dynamic'
import { Box, Divider, Grid } from "@chakra-ui/react";

const ImageComponent = dynamic(() => import('./atoms/image'))
const InfoComponent = dynamic(() => import('./atoms/info'))
const TerpopulerTerkini = dynamic(() => import('./atoms/terpopuler'))

const Showcase = memo(({data, title}) => {
    return (
        <Box>
            <Grid templateColumns="3fr 20px 1fr">
                <Grid templateColumns="1fr 2fr">
                    <InfoComponent data={data?.last_ekonomi} title={title} />
                    <ImageComponent data={data?.last_ekonomi} />
                </Grid>
                <Divider orientation="vertical" />
                <Box>
                    <TerpopulerTerkini data={data?.populer} />
                </Box>
            </Grid>
        </Box>
    )
})

export default Showcase