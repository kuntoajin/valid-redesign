import { memo } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Box, Text } from "@chakra-ui/react";
import { apiGet } from "../../utils/api";
import RubrikTitle from "../atom/RubrikTitle";

const Tajuk = memo(() => {
    const data = apiGet('api/portal/home/tajuk')
    const avatar = data?.data?.profile?.avatar

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
                        alt={data?.data?.profile?.fullname}
                        width={120}
                        height={120}
                        quality={5}
                        priority
                    />
                }
            </Box>
            <Link href={`${data?.data?.kanal.toLowerCase()}/${data?.data?.slug}`}>
                <a>
                    <Text as="h2">
                        {data?.data?.title}
                    </Text>
                </a>
            </Link>
        </Box>
    )
})

export default Tajuk