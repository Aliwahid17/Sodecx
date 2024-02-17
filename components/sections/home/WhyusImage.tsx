'use client'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import LaptopLight from '../../../public/assets/icons/home/whyusLight.svg'
import LaptopDark from '../../../public/assets/icons/home/whyusdark.svg'

const WhyusImage = () => {
    const { theme } = useTheme()
    const [source, setSource] = useState(LaptopDark)

    useLayoutEffect(() => {
        setSource(theme === 'light' ? LaptopLight : LaptopDark)
    }, [theme])

    return (
        <Image src={source} alt="Laptop" width={359} height={326} className='animation animate' />
    )
}

export default WhyusImage