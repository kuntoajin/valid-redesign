import { memo } from "react";
import { Box, Input } from "@chakra-ui/react";

const InputComponent = memo(() => {
    return (
        <Box>
            <form action="/search">
                <Input type="text" id="keyword" name="keyword" placeholder='Cari berita...' />
            </form>
        </Box>
    )
})

export default InputComponent