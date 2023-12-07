'use client'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'

const Triangle = () => {
    const { theme } = useTheme()
    const [source, setSource] = useState('../../assets/decors/triangle-dark.svg')

    useLayoutEffect(() => {
        setSource(theme === 'light' ? '../../assets/decors/triangle-light.svg' : '../../assets/decors/triangle-dark.svg')
    }, [theme])

    return (
        <Image src={source} alt="Triangle" width={35} height={65} />
    )
}

export default Triangle