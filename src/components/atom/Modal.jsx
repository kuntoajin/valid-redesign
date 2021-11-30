import { memo } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    AspectRatio,
    Text
} from "@chakra-ui/react"

const Modals = memo(({isOpen, onClose, data}) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src={data?.iframe}
                                alt={data?.title}
                            />
                        </AspectRatio>
                        <Text dangerouslySetInnerHTML={{__html: data?.description}} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
})

export default Modals