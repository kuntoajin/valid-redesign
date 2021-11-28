import { memo } from "react";
import Image from 'next/image'

const ImageComponent = memo(({data, index}) => {
    return (
        <Image 
            placeholder="blur"
            blurDataURL
            src={data.main_photo} 
            alt={data.title} 
            index={index} 
            height={297} 
            width={496} 
            priority 
            quality={3} 
        />
    )
})

export default ImageComponent