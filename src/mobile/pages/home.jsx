import { Container } from "@chakra-ui/react"
import TerkiniMobile from "../molecules/Terkini"
import TopStories from "../molecules/TopStories"

const HomeMobile = () => {
    return (
        <Container>
            <TerkiniMobile />
            <TopStories />
        </Container>
    )
}

export default HomeMobile