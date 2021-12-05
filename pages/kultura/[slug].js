import DetailComponents from "../../src/components/pages/detail"

const Detail = ({ data, infografis, terpopuler }) => {
    return <DetailComponents data={data} infografis={infografis} terpopuler={terpopuler} />
}

export async function getServerSideProps(ctx) {
    const slug = ctx.query.slug

    const response = await fetch(`${process.env.URL}/api/portal/news/detail/${slug}`)
    const responseInfografis = await fetch(`${process.env.URL}/api/portal/news/infografis`)
    const responseTerpopuler = await fetch(`${process.env.URL}/api/portal/news/populer`)
  
    const data = await response.json()
    const infografis = await responseInfografis.json()
    const terpopuler = await responseTerpopuler.json()

    if(!data.data) {
      return {
        notFound: true,
      }
    }  
    
    return { props: { data, infografis, terpopuler } }
  }

export default Detail