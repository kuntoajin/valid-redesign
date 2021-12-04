import { Container, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { apiGet } from "../../../utils/api"
import RubrikTitle from "../../atom/RubrikTitle"

const Results = dynamic(() => import("../../molecules/indeks/Results"))

const SubKanalPage = ({ subKanal }) => {
    const data = apiGet(`/api/portal/category/subcanal/${subKanal}`)
    const SubKanalName = data?.data?.sub_canal_name?.toLowerCase()

    return (
        <Container maxW="container.lg">
            <RubrikTitle title={data?.data?.sub_canal_name} />
            <Results data={data} />
        </Container>
    )
}

export default SubKanalPage