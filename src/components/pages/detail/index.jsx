import { Box, Container } from "@chakra-ui/react"
import RubrikTitle from "../../atom/RubrikTitle"

const DetailComponents = ({ data }) => {
    return (
        <Container maxW="container.lg">
            <RubrikTitle title={data?.data?.category?.toUpperCase()} />
            <Box>
                test
            </Box>
        </Container>
    )
}

export default DetailComponents