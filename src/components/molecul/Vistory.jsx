import { memo } from "react";
import dynamic from "next/dynamic";
import { apiGet } from "../../utils/api";

const NewsModal = dynamic(() => import("../atom/NewsModal"))

const Vistory = memo(() => {
    const data = apiGet('api/portal/home/vistory')
    return <NewsModal title="VISTORY" data={data} />

})

export default Vistory