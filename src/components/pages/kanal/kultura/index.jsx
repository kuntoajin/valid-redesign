import { Container, Divider, Box, Grid, Center } from "@chakra-ui/react";
import { memo } from "react";
import Seo from "../utils/seo";
import { apiGet } from "../../../../utils/api";
import RubrikTitle from "../../../atom/RubrikTitle";
import dynamic from "next/dynamic";

const Showcase = dynamic(() => import("../../../molecules/kanal/Showcase"))
const OtherStories = dynamic(() => import("../../../molecules/kanal/OtherStories"))
const SubKanal = dynamic(() => import("../../../molecules/kanal/SubKanal"))

const KulturaPage = memo(() => {
    const data = apiGet('/api/portal/category/kultura')
    return ( 
        <Container maxW="container.lg">
            <Seo 
                desc="Berita dan informasi yang berisi soal gaya hidup, seni budaya, teknologi dan pariwisata" 
                title="Berita Kultura Indonesia | Validnews.id"
                keyword="berita gaya hidup, informasi gaya hidup, berita teknologi, berita pariwisata, informasi pariwisata"
            />
            <Showcase data={data?.data?.last_kultura} populer={data?.data?.populer} title="Kultura" />
            <Divider />
            <OtherStories data={data?.data?.last_kultura} />
            <Divider />
            <Grid templateColumns={{sm: "auto", md: "1fr 20px 1fr 20px 1fr 20px 1fr"}} mt="15px">
                <Box>
                    <RubrikTitle title="GAYA HIDUP" />
                    <SubKanal data={data?.data?.gaya_hidup} />
                </Box>
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Box>
                    <RubrikTitle title="SENI & BUDAYA" />
                    <SubKanal data={data?.data?.seni_budaya} />
                </Box>
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Box>
                    <RubrikTitle title="TEKNO" />
                    <SubKanal data={data?.data?.teknologi} />
                </Box>
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Box>
                    <RubrikTitle title="PARIWISATA" />
                    <SubKanal data={data?.data?.pariwisata} />
                </Box>
            </Grid>
        </Container>
    )
})

export default KulturaPage