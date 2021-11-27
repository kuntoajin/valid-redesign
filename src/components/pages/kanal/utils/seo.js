import { memo } from "react";

const Seo = memo(data => {
    return (
        <>
            <title>{data.title}</title>
            <meta name="describtion" content={data.desc} />
        </>
    )
})

export default Seo