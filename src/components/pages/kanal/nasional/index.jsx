import { Container } from "@chakra-ui/react";
import { memo } from "react";
import Head from 'next/head'
import Showcase from "../../../molecul/kanal/Showcase";
import Seo from "../utils/seo";
import { apiGet } from "../../../../utils/api";

const NasionalKanal = memo(() => {
    const data = apiGet('/api/portal/category/nasional?')
    return ( 
        <Container maxW="container.lg">
            <Head>
                <Seo 
                    desc="Berita dan informasi yang berisi tentang isu hukum, politik dan sosial terbaru, terkini dan paling update" 
                    title="Berita Nasional Indonesia | Validnews"
                />
            </Head>
            <Showcase data={data?.data} />
        </Container>
    )
})

export default NasionalKanal