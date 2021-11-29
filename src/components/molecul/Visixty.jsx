import { memo } from "react";
import dynamic from "next/dynamic";
import { apiGet } from "../../utils/api";

const NewsModal = dynamic(() => import("../atom/NewsModal"))

const Visixty = memo(() => {
    const data = apiGet('api/portal/home/visixty')
    return <NewsModal title="VISIXTY" data={data} />

})

export default Visixty