import dynamic from "next/dynamic";
import { memo } from "react";
import { apiGet } from "../../utils/api";

const NewsWithChildren = dynamic(() => import("../atom/NewsWithChildren"))

const Nasional = memo(() => {
    const data = apiGet('api/portal/home/nasional')
    return <NewsWithChildren title="NASIONAL" data={data} />
})

export default Nasional