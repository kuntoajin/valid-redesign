import { Container, Divider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { apiGet } from "../../../../utils/api";
import Seo from "../utils/seo";

const Showcase = dynamic(() => import("../../../molecules/kanal/infografis/molecules/Showcase"))
const InfografisTerpopuler = dynamic(() => import("../../../molecules/kanal/infografis/molecules/InfografisTerpopuler"))
const InfografisLainnya = dynamic(() => import("../../../molecules/kanal/infografis/molecules/InfografisLainnya"))

const InfografisPage = () => {
    const data = apiGet('/api/portal/category/infografis')
    return (
        <Container maxW="container.lg">
            <Seo 
                desc="Informasi yang ditampilkan secara Visual yang menarik dan mudah dimengerti, berita infografis, informasi data, informasi grafis" 
                title="Infografis Terbaru Indonesian | Validnews.id"
                keyword="Visualisasi informasi, berita infografis, informasi data, informasi grafis"
            />
            <Showcase data={data?.data} />
            <Divider orientation="horizontal" />
            <InfografisTerpopuler data={data?.data} />
            <Divider orientation="horizontal" />
            <InfografisLainnya />
        </Container>
    )
}

export default InfografisPage