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

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
})

export default Modals