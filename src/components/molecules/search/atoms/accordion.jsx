import { memo, useState } from "react";
import dynamic from "next/dynamic";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useRadioGroup,
    HStack
} from '@chakra-ui/react'
import { useStore } from "../../../../store";

const FilterButton = dynamic(() => import("./filerButton"))

const Filter = memo(() => {
    const options = ['Berita', 'Infografis', 'Video']
    const [selectedNews, setSelectedNews] = useState()
    const news = useStore(state => state.news)
    const filterNews = useStore(state => state.handleNewsFilter)

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'Berita',
      onChange: filterNews,
    })
    const group = getRootProps()

    return (
        <Accordion allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='center' fontFamily="Montserrat">Filter</Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <HStack {...group}>
                        {options.map((value) => {
                            const radio = getRadioProps({ value })
                            return (
                            <FilterButton key={value} {...radio}>
                                {value}
                            </FilterButton>
                        )
                    })}
                    </HStack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
})

export default Filter