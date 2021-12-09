import { Box } from "@chakra-ui/react"
import axios from "axios"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { memo, useEffect, useState } from "react"

const Search = dynamic(() => import("../../molecules/search"))

const SearchPage = memo(() => {
    const [results, setResults] = useState({})
    const router = useRouter()
    const keyword = router.query.keyword

    useEffect(() => {
        if(keyword) {
            const dataFetch = async () => {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/portal/news/search?page=1`, {
                    search: router.query.keyword
                })
                setResults(response.data.data)
            }
            dataFetch()
        }
    }, [keyword])

    return (
        <Box>
            <Search data={results} keyword={keyword} />
        </Box>
    )
})

export default SearchPage