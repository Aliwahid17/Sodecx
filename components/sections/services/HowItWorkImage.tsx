'use client'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import LaptopLight from '../../../public/assets/icons/services/howitworkLight.svg'
import LaptopDark from '../../../public/assets/icons/services/howitworkDark.svg'

const HowItWorkImage = ({ sx }: { sx?: string }) => {
    const { theme } = useTheme()
    const [source, setSource] = useState(LaptopDark)

    useLayoutEffect(() => {
        setSource(theme === 'light' ? LaptopLight : LaptopDark)
    }, [theme])

    return (
        <Image src={source} alt="Laptop" width={280} height={265} className={sx} />
    )
}

export default HowItWorkImage