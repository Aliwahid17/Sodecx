'use client'

import { intersection } from "@/lib/intersection"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

type PropsTypes = {
    children: React.ReactNode
}

const Animation = ({ children }: PropsTypes) => {

    const path = usePathname()

    useEffect(() => {
        intersection()
        return () => {
            intersection()
        }
    }, [path])


    return (
        <>
            {children}
        </>
    )
}

export default Animation