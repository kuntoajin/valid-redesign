import { memo } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Box, Text } from "@chakra-ui/react";
import { apiGet } from "../../utils/api";
import RubrikTitle from "../atom/RubrikTitle";

const CatatanValid = memo(() => {
    const data = apiGet('api/portal/home/catatanValid')
    const photo = data?.data?.main_photo
    
    return (
        <Box>
            <RubrikTitle title="CATATAN VALID" />
            <Link href={`${data?.data?.kanal_slug.toLowerCase()}/${data?.data?.slug}`}>
                <a>
                    <Box>
                        {
                            photo &&
                            <Image 
                                placeholder="blur"
                                blurDataURL
                                src={data?.data?.main_photo}
                                alt={data?.data?.title}
                                width={240}
                                height={144}
                                quality={5}
                                priority
                            />
                        }
                    </Box>
                    <Text as="h2" dangerouslySetInnerHTML={{__html: data?.data?.title}} />
                </a>
            </Link>
        </Box>
    )
})

export default CatatanValid