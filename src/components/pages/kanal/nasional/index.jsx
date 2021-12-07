import { Container, Divider, Box, Grid, Center } from "@chakra-ui/react";
import { memo } from "react";
import Seo from "../utils/seo";
import { apiGet } from "../../../../utils/api";
import RubrikTitle from "../../../atom/RubrikTitle";
import dynamic from "next/dynamic";

const Showcase = dynamic(() => import("../../../molecules/kanal/Showcase"))
const OtherStories = dynamic(() => import("../../../molecules/kanal/OtherStories"))
const SubKanal = dynamic(() => import("../../../molecules/kanal/SubKanal"))

const NasionalKanal = memo(() => {
    const data = apiGet('/api/portal/category/nasional')
    return ( 
        <Container maxW="container.lg">
            <Seo 
                desc="Berita dan informasi yang berisi tentang isu hukum, politik dan sosial terbaru, terkini dan paling update" 
                title="Berita Nasional Indonesia | Validnews"
                keyword="berita hukum, berita politik, berita sosial, isu politik, isu sosial"
            />
            <Showcase data={data?.data?.last_nasional} populer={data?.data?.populer} title="Nasional" />
            <Divider />
            <OtherStories data={data?.data?.last_nasional} />
            <Divider />
            <Grid templateColumns={{sm: "auto", md: "1fr 20px 1fr 20px 1fr 20px 1fr"}} mt="15px">
                <Box>
                    <RubrikTitle title="HUKUM" />
                    <SubKanal data={data?.data?.hukum} />
                </Box>
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Box>
                    <RubrikTitle title="POLITIK" />
                    <SubKanal data={data?.data?.politik} />
                </Box>
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Box>
                    <RubrikTitle title="KESRA" />
                    <SubKanal data={data?.data?.kesra} />
                </Box>
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Box>
                    <RubrikTitle title="OASE" />
                    <SubKanal data={data?.data?.feature} />
                </Box>
            </Grid>
        </Container>
    )
})

export default NasionalKanal