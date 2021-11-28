import dynamic from "next/dynamic";
import { memo } from "react";
import { apiGet } from "../../utils/api";

const NewsWithChildren = dynamic(() => import("../atom/NewsWithChildren"))

const Fokus = memo(() => {
    const data = apiGet('api/portal/home/fokus')
    return <NewsWithChildren title="FOKUS" data={data} />
})

export default Fokus