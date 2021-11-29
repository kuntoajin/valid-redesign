import { memo, useRef } from "react";
import Link from 'next/link'
import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Input,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"

const subkanal = {
    nasional: [
        "Hukum",
        "Politik",
        "Kesra",
        "Oase"
    ],
    kultura: {
        nama: [
            "Gaya Hidup",
            "Seni & Budaya",
            "Tekno",
            "Pariwisata",
            "Vista",
            "Indeks"
        ],
        slug: [
            "gaya-hidup",
            "seni-budaya",
            "tekno",
            "pariwisata",
            "vista",
        ]
    }
}

const MenuDrawerMobile = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <Box>
            <HamburgerIcon ref={btnRef} color="white" w={9} h={9} onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg="dark">
                    <DrawerCloseButton color="white" />
                    <DrawerHeader fontFamily="Montserrat" color="white">RUBRIK</DrawerHeader>
        
                    <DrawerBody>
                        <Input placeholder="Cari Berita..." fontFamily="Montserrat" color="white" />
                        <Box>
                            <Accordion defaultIndex={[0]} allowMultiple>
                                <AccordionItem color="white">
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Nasional
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    {
                                        subkanal.nasional.map((list, index) => (
                                            <AccordionPanel pb={2} ml="20px" key={index}>
                                                <Box>
                                                    <Link href={`/nasional/${list.toLowerCase()}`}>
                                                        <a>{list}</a>
                                                    </Link>
                                                </Box>
                                            </AccordionPanel>
                                        ))
                                    }
                                </AccordionItem>

                                <AccordionItem color="white">
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Ekonomi
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={2}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
})

export default MenuDrawerMobile