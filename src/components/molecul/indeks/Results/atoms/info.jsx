import { memo } from "react";
import Link from "next/link"
import { Text, Box } from "@chakra-ui/react";

const InfoComponent = memo(({data}) => {
    return (
        <Box>
            <Link href={`/${data?.kanal?.toLowerCase()}/${data?.slug}`}>
                <a>
                    <Text as="h2" fontSize={{md: "xl", sm: "lg"}} dangerouslySetInnerHTML={{__html: data?.title}} noOfLines={2} />
                    <Text as="p" fontSize="sm" dangerouslySetInnerHTML={{__html: data?.lower_title}} noOfLines={2} />
                </a>
            </Link>
        </Box>
    )
})

export default InfoComponent