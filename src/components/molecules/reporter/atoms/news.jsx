import { memo, useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { Box, Text, useMediaQuery, Grid, VStack, StackDivider, HStack, Button } from "@chakra-ui/react";

const News = memo(({data}) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
    const router = useRouter()
    const [newsData, setNewsData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        if(router.query.slug) {
            const dataFetch = async () => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/portal/category/newsByReporter/${router.query.slug}?page=${page}`)
                const data = await response.json()
                setNewsData(() => {
                    return [...newsData, ...data?.data?.news]
                })
            }
            dataFetch()
        }
    }, [])

    useEffect(() => {
        if (sessionStorage.getItem('page')) {
            setPage(parseInt(sessionStorage.getItem('page')))
        } else {
            sessionStorage.setItem('page', page.toString())
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('page', page.toString())
        
        if(router.query.slug) {
            const dataFetch = async () => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/portal/category/newsByReporter/${router.query.slug}?page=${page}`)
                const data = await response.json()
                setNewsData(() => {
                    return [...newsData, ...data?.data?.news]
                })
            }
            dataFetch()
        }
    }, [page])
    
    return (
        <VStack divider={<StackDivider />} alignItems="start" mt="15px">
            {
                newsData?.map((list, index) => (
                    <Grid key={index} templateColumns={isMobile ? "auto" : "auto 1fr"} gap={isMobile ? 0 : 5}>
                        <Box>
                            {
                                list.thumbnail && (
                                    <Image
                                        src={list.thumbnail}
                                        width={isMobile ? "380px" : "200px"}
                                        height={isMobile ? "228px" : "120px"}
                                    />
                                )
                            }
                        </Box>
                        <Box>
                            <HStack divider={<StackDivider />}>
                                <Text fontFamily="Montserrat" color="brown" fontSize="xs" fontWeight="500">{list.date}</Text>
                                <Text fontFamily="Montserrat" color="brown" fontSize="xs" fontWeight="500">{list.time}</Text>
                            </HStack>
                            <Link href={`/${list?.kanal?.toLowerCase()}/${list?.slug}`}>
                                <a>
                                    <Text as="h2"fontSize="xl">{list.title}</Text>
                                </a>
                            </Link>
                            <Text as="p">{list.lower_title}</Text>
                        </Box>
                    </Grid>
                ))
            }
            <p>{page}</p>
            <Button onClick={() => setPage(page + 1)} bg="orange" color="white">Selanjutnya</Button>
        </VStack>
    )
})

export default News