import { memo } from "react";
import { apiGet } from "../../utils/api";
import NewsWithChildren from "../atom/NewsWithChildren";

const Ekonomi = memo(() => {
    const data = apiGet('api/portal/home/ekonomi')
    return <NewsWithChildren title="EKONOMI" data={data} />
})

export default Ekonomi