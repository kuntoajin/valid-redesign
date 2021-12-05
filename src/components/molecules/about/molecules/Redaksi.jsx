import { memo } from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { apiGet } from "../../../../utils/api"

const Redaksi = memo(() => {
    const data = apiGet("api/portal/other/redaksi")
    return (
        <Box id="redaksi">
            <Text as="h2" fontSize="30px" fontWeight="700" color="orange">Redaksi</Text>
            {
                data?.data?.map((list, index) => (
                    <Box key={index}>
                        <Text as="h3" fontSize="24px" fontWeight="700">{list.name}</Text>
                        <Text fontSize="18px">
                            {list?.employee?.map((listEmployee) => listEmployee.fullname).join(", ")}
                        </Text>
                    </Box>
                ))
            }
        </Box>
    )
})

export default Redaksi