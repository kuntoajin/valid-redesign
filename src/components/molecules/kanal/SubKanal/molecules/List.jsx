import { Stack, StackDivider } from "@chakra-ui/react";
import { memo } from "react";
import InfoComponent from "../atoms/info";

const List = memo(({data}) => {
    return (
        <Stack divider={<StackDivider borderColor="gray.200" />} mt="8px">
            {
                data?.map((list, index) => (
                    <InfoComponent data={list} key={index} />
                ))
            }
        </Stack>
    )
})

export default List