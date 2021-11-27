import { Container, Grid, Divider, Center } from "@chakra-ui/react"
import Seo from './utils/seo'
import dynamic from 'next/dynamic'

const LeftContent = dynamic(() => import('../../molecul/detail/molecules/LeftContent'))
const RightContent = dynamic(() => import('../../molecul/detail/molecules/RightContent'))

const DetailComponents = ({ data, infografis, terpopuler }) => {
    return (
        <Container maxW="container.lg">
            <Seo
                title={data?.data?.title}
                desc={data?.data?.lower_title}
                keyword={data?.data?.keyword}
            />
            <Grid templateColumns="2fr 20px 1fr">
                <LeftContent data={data} />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <RightContent data={{infografis, terpopuler}} />
            </Grid>
        </Container>
    )
}

export default DetailComponents