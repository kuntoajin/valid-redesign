import { memo } from "react";
import { apiGet } from "../../utils/api";
import NewsWithChildren from "../atom/NewsWithChildren";

const Kultura = memo(() => {
    const data = apiGet('api/portal/home/kultura')
    return <NewsWithChildren title="KULTURA" data={data} />
})

export default Kultura