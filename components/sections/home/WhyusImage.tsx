'use client'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import LaptopLight from '@assets/home/whyusLight.svg'
import LaptopDark from '@assets/home/whyusDark.svg'

const WhyusImage = () => {
    const { theme } = useTheme()
    const [source, setSource] = useState(LaptopDark)

    useLayoutEffect(() => {
        setSource(theme === 'light' ? LaptopLight : LaptopDark)
    }, [theme])

    return (
        <Image src={source} alt="Laptop" width={359} height={326} />
    )
}

export default WhyusImage