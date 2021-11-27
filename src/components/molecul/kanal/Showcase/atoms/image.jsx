import { memo } from "react";
import Image from 'next/image'

const ImageComponent = memo(({data}) => {
    return (
        <>
            {
                data?.largeYard && 
                <Image 
                    src={data?.largeYard?.main_photo}
                    priority
                    quality={5}
                    width="500"
                    height="300"
                />
            
            }
        </>
    )
})

export default ImageComponent