import { memo, useState } from "react";
import dynamic from "next/dynamic"
import { Grid, GridItem, Container, VStack, StackDivider, Button, useDisclosure } from "@chakra-ui/react";

const ImageComponent = dynamic(() => import("./atoms/image"))
const InfoComponent = dynamic(() => import("./atoms/info"))
const Modals = dynamic(() => import("../../atom/Modal"))


const IndeksVideo = memo(({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [dataVideo, setDataVideo] = useState({})

    const handleProps = (data) => {
        onOpen()
        setDataVideo(data)
    }

    return (
        <Container maxW="container.lg">
            <VStack alignItems="flex-start" divider={<StackDivider />}>
                {data?.data?.map((list, index) => (
                    <Grid templateColumns={{sm: '140px 1fr'}} gap="20px" key={index} onClick={() => handleProps(list)}>
                        <GridItem colSpan={1}>
                            <ImageComponent data={list} />
                        </GridItem>
                        <GridItem colStart={2}>
                            <InfoComponent data={list} />
                        </GridItem>
                    </Grid>
                ))}
                <Modals isOpen={isOpen} onClose={onClose} data={dataVideo} />
            </VStack>
            <Button bg="orange" color="white" fontFamily="Montserrat">Selanjutnya</Button>
        </Container>
    )
})

export default IndeksVideo