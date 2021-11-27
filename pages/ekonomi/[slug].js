import DetailComponents from "../../src/components/pages/detail"

const Detail = ({ data, infografis }) => {
    return <DetailComponents data={data} infografis={infografis} />
}

export async function getServerSideProps(ctx) {
    const slug = ctx.query.slug

    const response = await fetch(`${process.env.URL}/api/portal/news/detail/${slug}`)
    const responseInfografis = await fetch(`${process.env.URL}/api/portal/news/infografis`)

    const data = await response.json()
    const infografis = await responseInfografis.json()

    // Pass data to the page via props
    return { props: { data, infografis } }
  }

export default Detail