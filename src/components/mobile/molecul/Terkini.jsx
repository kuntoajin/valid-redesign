import { memo } from 'react'
import Image from 'next/image'
import { Box, Text, Flex, Link } from "@chakra-ui/react"
import RubrikTitle from "../../atom/RubrikTitle"
import { apiGet } from '../../../utils/api'
import dynamic from 'next/dynamic'

const Slider = dynamic(() => import('react-slick'))

const TerkiniMobile = memo(() => {
    const data = apiGet('api/portal/home/terkini')
    console.log(data)
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Box>
            <RubrikTitle title="TERKINI" />
            <Box>
                <Slider {...settings}>
                    {data?.data?.map((list, index) => (
                        <Link key={index} href={`/${list.kanal.toLowerCase()}/${list.slug}`}>
                            <Flex>
                                <Image
                                    src={list.main_photo}
                                    alt={list.title}
                                    width={100}
                                    height={60}
                                />
                                <Text dangerouslySetInnerHTML={{__html: list.title}} />
                            </Flex>
                        </Link>
                    ))}
                </Slider>
            </Box>
        </Box>
    )
})

export default TerkiniMobile