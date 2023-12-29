'use client'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import LaptopLight from '../../../public/assets/icons/about/whatwedoLight.svg'
import LaptopDark from '../../../public/assets/icons/about/whatwedoDark.svg'

const WhatWeDoImage = () => {
    const { theme } = useTheme()
    const [source, setSource] = useState(LaptopDark)

    useLayoutEffect(() => {
        setSource(theme === 'light' ? LaptopLight : LaptopDark)
    }, [theme])

    return (
        <Image src={source} alt="Laptop" width={469} height={264} />
    )
}

export default WhatWeDoImage