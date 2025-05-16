import { type ImgHTMLAttributes } from 'react'

const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} className={`${props.className ?? ''}`} />
}

export default Image
