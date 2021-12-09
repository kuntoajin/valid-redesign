import { VStack, Box, StackDivider } from "@chakra-ui/react"
import { memo } from "react"
import News from "../atoms/news"

const Result = memo(({data, keyword}) => {
    return (
        <VStack alignItems="flex-start" divider={<StackDivider />}>
            {
                data?.result?.map((list, index) => (
                    <Box key={index}>
                        <News data={list} />
                    </Box>
                ))
            }
        </VStack>
    )
})

export default Result