import dynamic from "next/dynamic";
import { memo } from "react";
import { apiGet } from "../../utils/api";

const NewsWithChildren = dynamic(() => import("../atom/NewsWithChildren"))

const Vistory = memo(() => {
    const data = apiGet('api/portal/home/vistory')
    return <NewsWithChildren title="VISTORY" data={data} />
})

export default Vistory