import { Container, Divider } from "@chakra-ui/react";
import { memo } from "react";
import Showcase from "../../../molecul/kanal/Showcase";
import Seo from "../utils/seo";
import { apiGet } from "../../../../utils/api";
import OtherStories from "../../../molecul/kanal/OtherStories";

const EkonomiKanal = memo(() => {
    const data = apiGet('/api/portal/category/ekonomi')
    return ( 
        <Container maxW="container.lg">
            <Seo 
                desc="Berita yang membahas berita-berita ekonomi dan bisnis terbaru" 
                title="Berita Ekonomi Indonesia Terbaru | Validnews.id"
                keyword="berita ekonomi, berita bisnis terbaru, berita ekonomi terbaru, berita ekonomi terkini"
            />
            <Showcase data={data?.data?.last_ekonomi} populer={data?.data?.populer} title="Ekonomi" />
            <Divider />
            <OtherStories data={data?.data?.last_ekonomi} />
            <Divider />
        </Container>
    )
})

export default EkonomiKanal