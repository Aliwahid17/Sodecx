'use client'
import Link from "next/link"

type PropsTypes = {
    title: string
    href: string
    toggleNav?: (status?: boolean) => void
}

const Button = ({ title , href , toggleNav }: PropsTypes) => {
    return (
        <Link href={href} onClick={() => toggleNav!()} >
            <div className="w-40 h-10 justify-center items-center inline-flex">
                <div className="px-8 py-2.5 bg-gradient rounded-3xl justify-center items-center gap-2.5 inline-flex">
                    <div className="text-dark-secondary hover:text-light-primary text-lg font-semibold">{title}</div>
                </div>
            </div>
        </Link>
    )
}

export default Button