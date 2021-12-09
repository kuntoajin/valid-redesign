import { memo } from "react";
import Image from "next/image"
import Link from "next/link"
import { Box, useMediaQuery, Text, Grid } from "@chakra-ui/react";

const News = memo(({data}) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 

    return (
        <Box>
            <Link href={`/${data?.kanal?.toLowerCase()}/${data.slug}`} key={data?.id}>
                <a>
                    <Grid templateColumns="auto 3fr" gap="3">
                        <Box>
                            <Image 
                                src={data?.thumbnail}
                                placeholder="blur"
                                blurDataURL
                                alt={data?.title}
                                priority
                                quality={20}
                                width={isMobile ? 100 : 200}
                                height={isMobile ? 60 : 120}    
                            />
                        </Box>
                        <Box>
                            <Text as="h2" dangerouslySetInnerHTML={{__html: data?.title}} fontSize="22px" />
                            <Text as="p" dangerouslySetInnerHTML={{__html: data?.lower_title}} />
                        </Box>
                    </Grid>
                </a>
            </Link>
        </Box>
    )
})

export default News