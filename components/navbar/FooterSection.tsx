import Link from "next/link"

type PropsTypes = {
    title: string
    section: {
        name: string,
        link: string,
        target?: '_blank'
    }[]
}

const FooterSection = async ({ title, section }: PropsTypes) => {
    return (
        <div className="text-light-primary">
            <h3 className="font-bold pb-2">{title}</h3>
            <div className="flex justify-center flex-col gap-1">
                {section.map((value, key) => (
                    <Link href={value.link} className="gradientText" target={value.target} key={key}>{value.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default FooterSection