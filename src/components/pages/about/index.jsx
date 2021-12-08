import { memo } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"

const About = dynamic(() => import("../../molecules/about"))

const AboutPage = memo(() => {
    return (
        <>
            <Head>
                <title>Tentang Kami | Validnews.id</title>
                <meta name="description" content="Informasi tentang validnews.id, tim redaksi dan pendukungnya, pedoman media siber, disclaimer, kebijakan privasi dan kontak" />
                <meta name="keywords" content="Tentang validnes , validnews, media online, jurnalisme data, berita riset, berita daya" />
            </Head>
            <About />
        </>
    )
})

export default AboutPage