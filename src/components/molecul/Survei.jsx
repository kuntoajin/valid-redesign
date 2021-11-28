import dynamic from "next/dynamic";
import { memo } from "react";
import { apiGet } from "../../utils/api";

const NewsWithChildren = dynamic(() => import("../atom/NewsWithChildren"))

const Survei = memo(() => {
    const data = apiGet('api/portal/home/paradigma')
    return <NewsWithChildren title="SURVEI" data={data} />
})

export default Survei