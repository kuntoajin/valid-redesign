import { memo } from "react";
import Head from 'next/head'

const Seo = memo((data) => {
    return (
        <Head>
            <title>{data.title}</title>
            <meta name="description" content={data.desc} />
            <meta name="keywords" content={data.keyword} />
        </Head>
    )
})

export default Seo