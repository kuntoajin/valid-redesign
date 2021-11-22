import { memo } from "react";
import Image from 'next/image'
// import Slider from "react-slick";
import { apiGet } from "../../utils/api";
import { Box, HStack, Heading, Text, StackDivider } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const RubrikTitle = dynamic(() => import('../atom/RubrikTitle'))
const Slider = dynamic(() => import('react-slick'))

const TopStories = memo(() => {
    const data = apiGet('api/portal/home/topStories')
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    
    return (
        <Box>
            <RubrikTitle title="TOP STORIES" />
            <Slider {...settings}>
                {
                    data?.data?.top_stories.map((list, index) => (
                        <Box key={index}>
                            <Box>
                                <HStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />}>
                                    <Text fontFamily="Montserrat" fontSize="sm">{list.date}</Text>
                                    <Text fontFamily="Montserrat" fontSize="sm">{list.time}</Text>
                                </HStack>
                                <Text as="h2" fontSize="3xl" isTruncated dangerouslySetInnerHTML={{__html: list.title}} />
                                <Text dangerouslySetInnerHTML={{__html: list.lower_title}} my="10px" fontWeight="500" />
                                <Image src={list.main_photo} alt={list.title} index={index} height={297} width={496} priority quality={3} />
                                <Text fontSize="xs" dangerouslySetInnerHTML={{__html: list.caption_photo}} />
                            </Box>
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    )
})

export default TopStories