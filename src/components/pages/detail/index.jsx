import { Container, Grid, Divider, Center, Box, useMediaQuery } from "@chakra-ui/react"
import Seo from './utils/seo'
import dynamic from 'next/dynamic'

const LeftContent = dynamic(() => import('../../molecules/detail/molecules/LeftContent'))
const RightContent = dynamic(() => import('../../molecules/detail/molecules/RightContent'))

const DetailComponents = ({ data, infografis, terpopuler }) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
    return (
        <Container maxW="container.lg">
            <Seo
                title={data?.data?.title}
                desc={data?.data?.lower_title}
                keyword={data?.data?.keyword}
            />
            <Grid templateColumns={{sm: "auto", md: "2fr 20px 1fr"}}>
                <LeftContent data={data} />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                {!isMobile && <RightContent data={{infografis, terpopuler}} />}
            </Grid>
        </Container>
    )
}

export default DetailComponents