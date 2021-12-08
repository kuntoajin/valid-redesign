import { memo } from "react"
import { Center } from "@chakra-ui/react"

const Message = memo(() => {
    return (
        <Center justifyContent="center" h="69vh" fontFamily="Montserrat" fontSize="25px" textAlign="center">
            Terima kasih telah mendaftar di Validnews.id. Anda akan redirect ke halaman login sesaat lagi.
        </Center>
    )
})

export default Message