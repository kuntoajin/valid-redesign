import { memo } from "react";
import Image from "next/image"
import Link from "next/link"
import { Box, Text } from "@chakra-ui/react";
import RubrikTitle from "../../../../atom/RubrikTitle";

const SubKanal = memo(({title, data}) => {
    const image = data?.largeYard?.thumbnail
    return (
        <Box>
            <RubrikTitle title={title} />
            <Box>
                <Link href={`/opini/${data?.largeYard?.slug}`}>
                    <a>
                        {
                            image &&
                            <Image
                                src={data?.largeYard?.thumbnail}
                                alt={data?.largeYard?.title}
                                width="500px"
                                height="300px"
                            />
                        }
                        <Text as="h2" dangerouslySetInnerHTML={{__html: data?.largeYard?.title}} />
                    </a>
                </Link>
            </Box>
            <Box>
                {
                    data?.list?.map((list, index) => (
                        <Link href={`/opini/${list.slug}`} key={index}>
                            <a>
                                <Text as="h2" dangerouslySetInnerHTML={{__html: list.title}} />
                            </a>
                        </Link>
                    ))
                }
            </Box>
        </Box>
    )
})

export default SubKanal