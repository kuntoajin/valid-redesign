import { memo, useState } from "react";
import Image from 'next/image'
import dynamic from "next/dynamic";
import {
    Box, 
    VStack, 
    useDisclosure, 
    Text, 
    Grid, 
    Divider,
} from "@chakra-ui/react"
import RubrikTitle from "./RubrikTitle"

const Modals = dynamic(() => import("./Modal"))

const NewsModal = memo(({title, data}) => {
    const photo = data?.data?.largeYard.main_photo ? data?.data?.largeYard.main_photo : data?.data?.largeYard.thumbnail
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [dataVideo, setDataVideo] = useState({})

    const handleProps = (data) => {
        onOpen()
        setDataVideo(data)
    }
    
    return (
        <>
            <Box>
                <RubrikTitle title={title} />
                <VStack>
                    <Box onClick={() => handleProps(data?.data?.largeYard)}>
                        <Box>
                            {
                                photo && 
                                <Image
                                src={photo}
                                priority
                                alt={data?.data?.largeYard?.title}
                                width="350px"
                                height="210px"
                                quality={5}
                                />
                            }
                        </Box>
                        <Text as="h2" dangerouslySetInnerHTML={{__html: data?.data?.largeYard?.title}} fontSize="xl" noOfLines={2} />
                    </Box>
                    <Divider orientation="horizontal" borderColor="gray.200" />
                    <Box>
                        <VStack divider={<Divider borderColor="gray.200" />}>
                            {
                                data?.data?.list.map((list, index) => (
                                    <Grid templateColumns="1fr 2fr" gap={3} key={index} onClick={() => handleProps(list)}>
                                        <Box flex="1">
                                            <Image 
                                                src={list.main_photo ? list.main_photo : list.thumbnail}
                                                priority
                                                alt={list.title}
                                                height={60}
                                                width={101}
                                                quality={3}
                                                />
                                        </Box>
                                        <Text as="h2" fontSize="sm" dangerouslySetInnerHTML={{__html: list. title}} flex="1" fontWeight="700" noOfLines={[2, 3]} />
                                    </Grid>
                                ))
                            }
                        </VStack>
                    </Box>
                </VStack>
            </Box>
            <Modals isOpen={isOpen} onClose={onClose} data={dataVideo} />
        </>
    )
})

export default NewsModal