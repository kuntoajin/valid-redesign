import { memo } from "react";
import Image from 'next/image'
import { Box, Text } from "@chakra-ui/react";
import { apiGet } from "../../utils/api";
import RubrikTitle from "../atom/RubrikTitle";

const CatatanValid = memo(() => {
    const data = apiGet('api/portal/home/catatanValid')
    const photo = data?.data?.main_photo

    return (
        <Box>
            <RubrikTitle title="CATATAN VALID" />
            <Box>
                {
                    photo &&
                    <Image 
                        src={data?.data?.main_photo}
                        alt={data?.data?.title}
                        width={240}
                        height={144}
                        priority
                    />
                }
            </Box>
            <Text as="h2" dangerouslySetInnerHTML={{__html: data?.data?.title}} />
        </Box>
    )
})

export default CatatanValid