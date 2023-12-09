'use client'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'

const WhyusImage = () => {
    const { theme } = useTheme()
    const [source, setSource] = useState('../../assets/icons/home/whyusDark.svg')

    useLayoutEffect(() => {
        setSource(theme === 'light' ? '../../assets/icons/home/whyusLight.svg' : '../../assets/icons/home/whyusDark.svg')
    }, [theme])

    return (
        <Image src={source} alt="Laptop" width={359} height={326} />
    )
}

export default WhyusImage