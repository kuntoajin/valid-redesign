import { memo } from "react"
import dynamic from "next/dynamic"
import { Container, Divider, Grid, Center } from "@chakra-ui/react"
import { apiGet } from "../../../../utils/api"
import Seo from "../utils/seo"

const LeftContent = dynamic(() => import("../../../molecules/kanal/opini/molecules/LeftContent"))
const RightContent = dynamic(() => import("../../../molecules/kanal/opini/molecules/RightContent"))

const OpiniKanal = memo(() => {
    const data = apiGet('/api/portal/category/opini')
    return ( 
        <Container maxW="container.lg">
            <Seo 
                desc="Artikel berisi tulisan atau artikel yang berisi pendapat, opini, hasil riset dari tim riset Validnews atau tulisan dari pengamat atau pakar di bidang" 
                title="Artikel Opini Terbaru | Validnews.id"
                keyword="artikel opini, berita riset, pendapat pengamat, pendapat pakar"
            />
            <Grid templateColumns="3fr 20px 1fr">
                <LeftContent data={data} title="Opini" />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <RightContent />
            </Grid>
        </Container>
        )
    }
)

export default OpiniKanal