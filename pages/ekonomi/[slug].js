import DetailComponents from "../../src/components/pages/detail"

const Detail = ({ data }) => {
    return <DetailComponents data={data} />
}

export async function getServerSideProps(ctx) {
    const slug = ctx.query.slug

    const response = await fetch(`${process.env.URL}/api/portal/news/detail/${slug}`)
    const data = await response.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Detail