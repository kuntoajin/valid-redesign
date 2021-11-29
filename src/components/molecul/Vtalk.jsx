import { memo } from "react";
import dynamic from "next/dynamic";
import { apiGet } from "../../utils/api";

const NewsModal = dynamic(() => import("../atom/NewsModal"))

const Vtalk = memo(() => {
    const data = apiGet('api/portal/home/vtalk')
    return <NewsModal title="VTALK" data={data} />

})

export default Vtalk