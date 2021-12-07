import { memo } from "react";
import { apiGet } from "../../../utils/api"
import IndeksVideo from "../../molecules/indeksvideo";

const IndeksVideoPage = memo(({subKanal}) => {
    const data = apiGet(`api/portal/category/subcanalvideo/${subKanal}`)
    return <IndeksVideo data={data} />
})

export default IndeksVideoPage