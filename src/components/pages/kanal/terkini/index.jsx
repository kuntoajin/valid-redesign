import { Container, Divider, Box, Grid, Center } from "@chakra-ui/react";
import { memo } from "react";
import Seo from "../utils/seo";
import { apiGet } from "../../../../utils/api";
import RubrikTitle from "../../../atom/RubrikTitle";
import dynamic from "next/dynamic";

const Showcase = dynamic(() => import("../../../molecul/kanal/Showcase"))
const OtherStories = dynamic(() => import("../../../molecul/kanal/OtherStories"))
const SubKanal = dynamic(() => import("../../../molecul/kanal/SubKanal"))

const TerkiniPage = memo(() => {
    const data = apiGet('/api/portal/category/terkini')
    console.log(data?.data?.last_terkini)
    return ( 
        <Container maxW="container.lg">
            <Seo 
                desc="Berita dan informasi yang berisi tentang isu hukum, politik dan sosial terbaru, terkini dan paling update" 
                title="Berita Nasional Indonesia | Validnews"
                keyword="berita hukum, berita politik, berita sosial, isu politik, isu sosial"
            />
            <Showcase data={data?.data?.last_terkini} populer={data?.data?.populer} title="Terkini" />
        </Container>
    )
})

export default TerkiniPage