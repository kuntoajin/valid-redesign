import { memo } from "react";
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Box, Grid, Divider, Center } from "@chakra-ui/react";
import RubrikTitle from "../../../atom/RubrikTitle";

const ImageComponent = dynamic(() => import('./atoms/image'))
const InfoComponent = dynamic(() => import('./atoms/info'))

const OtherStories = memo(({data, title}) => {
    return (
        <Box mt={5}>
            <RubrikTitle title="OTHER STORIES" />
            <Grid templateColumns={{sm: "auto", md: "1fr 20px 1fr 20px 1fr"}}>
            {
                data?.other_list?.map((list, index) => (
                    <>
                        <Box flex="1" key={index}>
                            <Grid alignItems="flex-start" justifyContent="start" key={index}>
                                <Link href={`/${list.kanal.toLowerCase()}/${list.slug}`}>
                                    <a>
                                        <ImageComponent data={list} />
                                        <InfoComponent data={list} />
                                    </a>
                                </Link>
                            </Grid>
                        </Box>
                        {index !== 2 ? <Center><Divider orientation="vertical" /></Center> : null}
                    </>
                ))
            }
            </Grid>
        </Box>
    )
})

export default OtherStories