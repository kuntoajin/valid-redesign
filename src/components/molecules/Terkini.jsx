import { Divider, Grid, Box, Center } from "@chakra-ui/react"
import { apiGet } from "../../utils/api"
import { NewsTerkiniHome } from "../atom/News"
import RubrikTitle from "../atom/RubrikTitle"

const Terkini =  () => {
    const data = apiGet('api/portal/home/terkini')

    return (
        <Box>
            <RubrikTitle title="TERKINI" />
            <Grid templateColumns={{sm: "auto", md:"1fr 0px 1fr 0px 1fr 0px 1fr"}} divider={<Divider orientation="horizontal" borderColor="gray.200" />}>
                {
                    data?.data?.map((list, index) => {
                        return (
                        <>
                            <Box key={index}>
                                <NewsTerkiniHome data={list} index={index} />  
                            </Box>
                            {index !== 3 ? (
                                <Center>
                                    <Divider orientation="vertical" />
                                </Center>
                            ) : null}
                        </>
                    )})
                }
            </Grid>
        </Box>
    )
}

export default Terkini