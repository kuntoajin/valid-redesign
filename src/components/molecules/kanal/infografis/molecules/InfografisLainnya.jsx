import { memo } from "react";
import Image from "next/image"
import Link from "next/link"
import { Box, Grid, Center, Text, Divider } from "@chakra-ui/react";
import RubrikTitle from "../../../../atom/RubrikTitle";
import { apiGet } from "../../../../../utils/api";

const InfografisLainnya = memo(() => {
    const data = apiGet('/api/portal/category/infografis')

    return (
        <Box>
            <RubrikTitle title="INFOGRAFIS LAINNYA" />
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="15px">
                {
                    data?.data?.other_list?.map((list, index) => (
                        <Link href={`/infografis/${list.slug}`} key={index}>
                            <a>
                                <Box>
                                    <Image 
                                        src={list.image}
                                        alt={list.title}
                                        width="250px"
                                        height="250px"
                                        quality={10}
                                    />
                                    <Text as="h2" dangerouslySetInnerHTML={{__html: list.title}} />
                                </Box>
                            </a>
                        </Link>
                    ))
                }
            </Grid>
        </Box>
    )
})

export default InfografisLainnya