import { memo } from "react"
import dynamic from "next/dynamic"
import { Container, Divider, Text } from "@chakra-ui/react"

const Redaksi = dynamic(() => import("./molecules/Redaksi"))
const TentangKami = dynamic(() => import("./molecules/TentangKami"))
const PedomanSiber = dynamic(() => import("./molecules/PedomanSiber"))
const Disclaimer = dynamic(() => import("./molecules/Disclaimer"))
const KebijakanPrivasi = dynamic(() => import("./molecules/KebijakanPrivasi"))
const KontakKami = dynamic(() => import("./molecules/KontakKami"))

const About = memo(() => {
    return (
        <Container maxW="container.lg">
            <Text as="h1" fontSize="30px" fontWeight="700" color="orange">Tentang Kami</Text>
            <TentangKami />
            <Divider orientation="horizontal" my="15px" />
            <Redaksi />
            <Divider orientation="horizontal" my="15px" />
            <PedomanSiber />
            <Divider orientation="horizontal" my="15px" />
            <Disclaimer />
            <Divider orientation="horizontal" my="15px" />
            <KebijakanPrivasi />
            <Divider orientation="horizontal" my="15px" />
            <KontakKami />
        </Container>
    )
})

export default About
