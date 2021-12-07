import { Container, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { apiGet } from "../../../utils/api"
import RubrikTitle from "../../atom/RubrikTitle"

const Results = dynamic(() => import("../../molecules/indeks/Results"))

const IndeksPage = ({ kanal, title }) => {
    const data = apiGet(`/api/portal/category/${kanal}`)
    return (
        <Container maxW="container.lg">
            <Text>{title}</Text>
            <RubrikTitle title="INDEKS" />
            <Results data={data} />
        </Container>
    )
}

export default IndeksPage