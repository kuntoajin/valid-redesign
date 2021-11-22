import { Divider, Grid, Box, Skeleton, StackDivider, HStack } from "@chakra-ui/react"
import { apiGet } from "../../utils/api"
import { NewsTerkiniHome } from "../atom/News"
import RubrikTitle from "../atom/RubrikTitle"

const Terkini =  () => {
    const data = apiGet('api/portal/home/terkini')

    return (
        <Box>
            <RubrikTitle title="TERKINI" />
            <HStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />}>
                {
                    data?.data?.map((list, index) => (
                        <Box key={index}>
                            <NewsTerkiniHome data={list} />  
                        </Box>
                    ))
                }
            </HStack>
        </Box>
    )
}

export default Terkini