import Image from 'next/image'
import { Flex, Box, Spacer, Heading, Link, Text } from "@chakra-ui/react"

const RubrikTitle = ({ title }) => {
    return (
        <Flex align="center" mb="10px">
            <Flex align="center" mr="5px">
                <Image
                    src="/assets/static/images/IconRubric.png"
                    priority
                    alt={`${title} | Validnews.id`}
                    width="20px"
                    height="20px"
                    quality={5}
                />
            </Flex>
            <Heading as="h2" fontSize="11px" letterSpacing="2px" color="orange">{title}</Heading>
            <Spacer />
            <Link href="/">
                <Image
                    src="/assets/static/images/IconOpenGrey.png"
                    priority
                    alt={`${title} | Validnews.id`}
                    width="20px"
                    height="20px"
                    quality={5}
                />
            </Link>
        </Flex>
    )
}

export default RubrikTitle