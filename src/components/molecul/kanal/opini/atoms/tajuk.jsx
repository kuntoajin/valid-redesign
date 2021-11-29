import { memo } from "react";
import Link from "next/link"
import Image from "next/image"
import { Box, Text } from "@chakra-ui/layout";
import RubrikTitle from "../../../../atom/RubrikTitle";
import { apiGet } from "../../../../../utils/api";

const Tajuk = memo(() => {
    const data = apiGet('api/portal/category/opini')
    const avatar = data?.data?.tajuk?.largeYard?.profile?.avatar
    console.log(data?.data?.tajuk)
    return (
        <Box>
            <RubrikTitle title="TAJUK" />
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
                    <Text as="p" fontSize="xs">{data?.data?.tajuk?.largeYard?.lower_title}</Text>
                </a>
            </Link>
        </Box>
    )
})

export default Tajuk