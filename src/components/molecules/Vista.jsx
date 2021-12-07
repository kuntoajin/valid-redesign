import dynamic from "next/dynamic";
import { memo } from "react";
import { apiGet } from "../../utils/api";

const NewsWithChildren = dynamic(() => import("../atom/NewsWithChildren"))

const Vista = memo(() => {
    const data = apiGet('api/portal/home/vista')
    return <NewsWithChildren title="VISTA" data={data} />
})

export default Vista