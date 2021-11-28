import dynamic from "next/dynamic";
import { memo } from "react";
import { apiGet } from "../../utils/api";

const NewsWithChildren = dynamic(() => import("../atom/NewsWithChildren"))

const Visixty = memo(() => {
    const data = apiGet('api/portal/home/visixty')
    return <NewsWithChildren title="VISIXTY" data={data} />
})

export default Visixty