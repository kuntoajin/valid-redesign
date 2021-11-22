import dynamic from "next/dynamic"
import { Container, VStack, Box, Divider, StackDivider, HStack, Grid, Center } from "@chakra-ui/react"
import { apiGet } from "../../../utils/api"

const Terkini = dynamic(() => import('../../molecul/Terkini'))
const TopStories = dynamic(() => import('../../molecul/TopStories'))
const Tajuk = dynamic(() => import('../../molecul/Tajuk'))
const Infografis = dynamic(() => import('../../molecul/Infografis'))
const CatatanValid = dynamic(() => import('../../molecul/CatatanValid'))
const Terpopuler = dynamic(() => import('../../molecul/Terpopuler'))
const OtherStories = dynamic(() => import('../../molecul/OtherStories'))
const Nasional = dynamic(() => import('../../molecul/Nasional'))
const Ekonomi = dynamic(() => import('../../molecul/Ekonomi'))
const Kultura = dynamic(() => import('../../molecul/Kultura'))

const Home = () => {
    const data = apiGet('api/portal/home/topStories')
    return (
        <Container maxW="container.lg">
            <Terkini divider={<Divider orientation="vertical" />} />
            <Divider />
            <HStack mt="20px" divider={<StackDivider orientation="vertical" borderColor="gray.200" />} alignItems="start">
                <Box flex="1">
                    <VStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />} alignItems="left">
                        <Tajuk />
                        <Infografis />
                    </VStack>
                </Box>
                <Box overflow="hidden" flex="2">
                    <TopStories />
                </Box>
                <Box flex="1">
                    <VStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />} alignItems="left">
                        <CatatanValid />
                        <Terpopuler />
                    </VStack>
                </Box>
            </HStack>
            <Divider />
            <Box mt="15px">
                <OtherStories data={data?.data?.other_stories} />
            </Box>
            <Divider />
            {/* <HStack mt="15px" alignItems="flex-start" divider={<StackDivider orientation="vertical" borderColor="gray.200" />} > */}
                <Grid templateColumns="1fr 20px 1fr 20px 1fr" mt="15px">
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
            {/* </HStack> */}
        </Container>
    )
}

export default Home