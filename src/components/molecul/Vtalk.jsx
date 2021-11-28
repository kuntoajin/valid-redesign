import dynamic from "next/dynamic";
import { memo } from "react";
import { apiGet } from "../../utils/api";

const NewsWithChildren = dynamic(() => import("../atom/NewsWithChildren"))

const Vtalk = memo(() => {
    const data = apiGet('api/portal/home/vtalk')
    return <NewsWithChildren title="VTALK" data={data} />
})

export default Vtalk