import { Container, Text } from "@chakra-ui/react"
import { apiGet } from "../../../utils/api"
import RubrikTitle from "../../atom/RubrikTitle"
import Results from "../../molecul/indeks/Results"

const IndeksPage = ({ kanal }) => {
    const data = apiGet(`/api/portal/category/indeks/${kanal}`)
    return (
        <Container maxW="container.lg">
            <Text>{kanal[0].toUpperCase() + kanal.substring(1)}</Text>
            <RubrikTitle title="INDEKS" />
            <Results data={data} />
        </Container>
    )
}

export default IndeksPage