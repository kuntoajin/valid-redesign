import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const apiGet = (params) => {
    const { data, error } = useSWR(`https://dot-portal.validvisi.com/${params}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return data
}