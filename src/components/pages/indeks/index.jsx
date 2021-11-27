import { Container } from "@chakra-ui/react"
import { apiGet } from "../../../utils/api"
import Results from "../../molecul/indeks/Results"

const IndeksPage = ({ kanal }) => {
    const data = apiGet(`/api/portal/category/indeks/${kanal}`)
    return (
        <Container maxW="container.lg">
            <Results data={data} />
        </Container>
    )
}

export default IndeksPage