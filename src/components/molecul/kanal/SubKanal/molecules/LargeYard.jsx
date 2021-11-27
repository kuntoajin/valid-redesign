import { Box } from "@chakra-ui/react";
import { memo } from "react";
import Link from "next/link"
import InfoComponent from "../atoms/info";
import ImageComponent from "../atoms/image";

const LargeYard = memo(({data}) => {
    return (
        <Box>
            <Link href={`${data?.kanal?.toLowerCase()}/${data?.slug}`}>
                <a>
                    <ImageComponent data={data} />
                    <InfoComponent data={data} />
                </a>
            </Link>
        </Box>
    )
})

export default LargeYard