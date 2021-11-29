import { memo } from "react"
import { Container, Grid } from "@chakra-ui/react"
import { apiGet } from "../../../../utils/api"
import Seo from "../utils/seo"
import LeftContent from "../../../molecul/kanal/opini/molecules/LeftContent"
import RightContent from "../../../molecul/kanal/opini/molecules/RightContent"

const OpiniKanal = memo(() => {
    const data = apiGet('/api/portal/category/opini')
    console.log(data)
    return ( 
        <Container maxW="container.lg">
            <Seo 
                desc="Artikel berisi tulisan atau artikel yang berisi pendapat, opini, hasil riset dari tim riset Validnews atau tulisan dari pengamat atau pakar di bidang" 
                title="Artikel Opini Terbaru | Validnews.id"
                keyword="artikel opini, berita riset, pendapat pengamat, pendapat pakar"
            />
            <Grid templateColumns="3fr 1fr">
                <LeftContent data={data} title="Opini" />
                <RightContent />
            </Grid>
        </Container>
        )
    }
)

export default OpiniKanal