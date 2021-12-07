import { memo } from "react";
import Link from 'next/link'
import dynamic from "next/dynamic";
import { apiGet } from "../../utils/api";
import { Box, HStack, Text, StackDivider } from "@chakra-ui/react";

const RubrikTitle = dynamic(() => import('../atom/RubrikTitle'))
const Slider = dynamic(() => import('react-slick'))
const ImageComponent = dynamic(() => import('../atom/TopStories/image'))

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
                            <Link href={`/${list.kanal.toLowerCase()}/${list.slug}`}>
                                <a>
                                    <Box>
                                        <HStack divider={<StackDivider orientation="horizontal" borderColor="gray.200" />}>
                                            <Text textDecoration="unset" fontFamily="Montserrat" fontSize="sm">{list.date}</Text>
                                            <Text textDecoration="unset" fontFamily="Montserrat" fontSize="sm">{list.time}</Text>
                                        </HStack>
                                        <Text as="h2" fontSize="3xl" dangerouslySetInnerHTML={{__html: list.title}} />
                                        <Text dangerouslySetInnerHTML={{__html: list.lower_title}} my="10px" fontWeight="500" />
                                        <ImageComponent data={list} index={index} />
                                        <Text fontSize="xs" dangerouslySetInnerHTML={{__html: list.caption_photo}} />
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    )
})

export default TopStories