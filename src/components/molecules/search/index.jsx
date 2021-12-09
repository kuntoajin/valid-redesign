import dynamic from "next/dynamic"
import { Container, Divider } from "@chakra-ui/react"

const InputComponent = dynamic(() => import("./molecules/InputComponent"))
const Filter = dynamic(() => import("./atoms/accordion"))
const Result = dynamic(() => import("./molecules/Result"))

const Search = ({ data, keyword }) => {
    return (
        <Container maxW="container.lg">
            <InputComponent />
            <Filter />
            <Divider orientation="horizontal" my="20px" />
            <Result data={data} keyword={keyword} />
        </Container>
    )
}

export default Search