import { memo } from "react";
import Link from "next/link"
import Image from "next/image"
import { Box, Text, HStack, StackDivider, VStack, Divider } from "@chakra-ui/react";
import RubrikTitle from "../../../../atom/RubrikTitle";
import { apiGet } from "../../../../../utils/api";

const Tajuk = memo(() => {
    const data = apiGet('api/portal/category/opini')
    const avatar = data?.data?.tajuk?.largeYard?.profile?.avatar

    return (
        <Box>
            <RubrikTitle title="TAJUK" />
            <Box mb="10px">
                <Box w={120} h={120} borderRadius="full">
                    {
                        avatar &&
                        <Image 
                            placeholder="blur"
                            blurDataURL
                            src={avatar}
                            alt={data?.data?.tajuk?.largeYard?.profile?.fullname}
                            width={120}
                            height={120}
                            quality={5}
                            priority
                        />
                    }
                </Box>
                <Link href={`${data?.data?.tajuk?.largeYard?.kanal.toLowerCase()}/${data?.data?.tajuk?.largeYard?.slug}`}>
                    <a>
                        <Text as="h2">
                            {data?.data?.tajuk?.largeYard?.title}
                        </Text>
                        <Text as="p" fontSize="xs" dangerouslySetInnerHTML={{__html: data?.data?.tajuk?.largeYard?.lower_title}}/>
                    </a>
                </Link>
            </Box>
            <Divider orientation="horizontal" />
            <VStack divider={<StackDivider  />} mt="10px">
                {
                    data?.data?.tajuk?.list?.map((list, index) => (
                        <Box key={index}>
                            <HStack divider={<StackDivider  />}>
                                <Text fontFamily="Montserrat" fontSize="xs" fontWeight="600" color="brown">{list.date}</Text>
                                <Text fontFamily="Montserrat" fontSize="xs" fontWeight="600" color="brown">{list.time}</Text>
                            </HStack>
                            <Link href={`/tajuk/${list.slug}`}>
                                <a>
                                    <Text dangerouslySetInnerHTML={{__html: list.title}} fontWeight="600" />
                                </a>
                            </Link>
                        </Box>
                    ))
                }
            </VStack>
        </Box>
    )
})

export default Tajuk