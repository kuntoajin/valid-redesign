import dynamic from "next/dynamic"
import { Container, VStack, Box, Divider, StackDivider, Grid, Center } from "@chakra-ui/react"
import { apiGet } from "../../../utils/api"

const Terkini = dynamic(() => import('../../molecules/Terkini'))
const TopStories = dynamic(() => import('../../molecules/TopStories'))
const Tajuk = dynamic(() => import('../../molecules/Tajuk'))
const Infografis = dynamic(() => import('../../molecules/Infografis'))
const CatatanValid = dynamic(() => import('../../molecules/CatatanValid'))
const Terpopuler = dynamic(() => import('../../molecules/Terpopuler'))
const OtherStories = dynamic(() => import('../../molecules/OtherStories'))
const Nasional = dynamic(() => import('../../molecules/Nasional'))
const Ekonomi = dynamic(() => import('../../molecules/Ekonomi'))
const Kultura = dynamic(() => import('../../molecules/Kultura'))
const Fokus = dynamic(() => import('../../molecules/Fokus'))
const Survei = dynamic(() => import('../../molecules/Survei'))
const Vista = dynamic(() => import('../../molecules/Vista'))
const Visixty = dynamic(() => import('../../molecules/Visixty'))
const Vistory = dynamic(() => import('../../molecules/Vistory'))
const Vtalk = dynamic(() => import('../../molecules/Vtalk'))

const Home = () => {
    const data = apiGet('api/portal/home/topStories')
    return (
        <Container maxW="container.lg">
            <Terkini divider={<Divider orientation="vertical" />} />
            <Divider />
            <Grid 
                templateColumns={{md: "1fr 20px 2fr 20px 1fr" }} 
                // templateRows={{sm: "1fr 1fr 1fr"}}
                // templateAreas={{sm: ['top_stories', 'tajuk', 'catatan_valid']}}
                mt="15px"
            >
                <Box>
                    <VStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />} alignItems="left">
                        <Tajuk />
                        <Infografis />
                    </VStack>
                </Box>
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Box overflow="hidden">
                    <TopStories />
                </Box>
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Box>
                    <VStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />} alignItems="left">
                        <CatatanValid />
                        <Terpopuler />
                    </VStack>
                </Box>
            </Grid>
            <Divider />
            <Box mt="15px">
                <OtherStories data={data?.data?.other_stories} />
            </Box>
            <Divider />
            <Grid templateColumns={{sm: "auto", md: "1fr 20px 1fr 20px 1fr"}} mt="15px">
                <Nasional />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Ekonomi />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Kultura />
            </Grid>
            <Divider />
            <Grid templateColumns={{sm: "auto", md: "1fr 20px 1fr 20px 1fr"}} mt="15px">
                <Fokus />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Survei />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Vista />
            </Grid>
            <Divider />
            <Grid templateColumns={{sm: "auto", md: "1fr 20px 1fr 20px 1fr"}} mt="15px">
                <Visixty />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Vistory />
                <Center>
                    <Divider orientation="vertical" />
                </Center>
                <Vtalk />
            </Grid>
        </Container>
    )
}

export default Home