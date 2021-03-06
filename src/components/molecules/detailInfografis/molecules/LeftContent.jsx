import { memo } from "react";
import { Box, Text, HStack, StackDivider } from "@chakra-ui/react"
import dynamic from "next/dynamic";
import RubrikTitle from "../../../atom/RubrikTitle";

const ImageComponent = dynamic(() => import('../atoms/image'))
const Konten = dynamic(() => import('../atoms/konten'))

const LeftContent = memo(({data}) => {
    return (
        <Box>
            <RubrikTitle title={data?.data?.category?.toUpperCase()} />
            <HStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />}>
                <Text fontFamily="Montserrat" fontSize="sm">{data?.data?.date}</Text>
                <Text fontFamily="Montserrat" fontSize="sm">{data?.data?.time}</Text>
            </HStack>
            <Text as="h1" dangerouslySetInnerHTML={{__html: data?.data?.title}} fontSize="25" fontWeight="700" />
            <Text as="h2" fontWeight="500" dangerouslySetInnerHTML={{__html: data?.data?.lower_title}} />
            {/* <Box my={2}>
                {data?.data?.list_reporter.length <= 0 ? null : <Text as="p" fontSize="xs" fontWeight="600" fontFamily="Montserrat">Penulis: {data?.data?.list_reporter.map((list, index) => {
                    return (
                        list.type === 1 ? <a className='penulis' href={`${list.type === 1 ? `/reporter/${list.id}` : '' }`} key={index}>{list.name}, </a> : 
                        <small className='penulis' key={index}>{list.name}, </small>
                    )
                })}</Text>}
                <Text as="p" fontWeight="600" fontSize="xs" fontFamily="Montserrat">Editor: {data?.data?.editor}</Text>
            </Box> */}
            <Text as="p" fontSize="md" dangerouslySetInnerHTML={{__html: data?.data?.description}}/>
            <ImageComponent data={data} />
            {/* <Konten data={data} /> */}
        </Box>
    )
})

export default LeftContent