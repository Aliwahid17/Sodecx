'use client'

import { useState } from "react"

const FAQSection = ({ faq }: { faq: { title: string, description: string }[] }) => {

    const [openIndex, setOpenIndex] = useState<{ index: number | null, status: boolean }>({
        index: null,
        status: false
    })


    return (
        <div className="mt-8 space-y-8">
            {faq.map((value, key) => (
                <div key={key} className="relative p-1.5 inline-flex items-center w-full  justify-center overflow-hidden group rounded-[46px] animation animate">
                    <div className="absolute bg-gradient w-full h-full"></div>
                    <div className="relative bg-light-primary dark:bg-dark-primary px-3 py-5 w-full h-full gap-5 rounded-[40px] flex items-center ">
                        <div className="rounded-lg px-4 w-full">
                            <button className="flex items-center justify-between w-full" onClick={() => setOpenIndex({
                                index: key,
                                status: openIndex.index === key ? !openIndex.status : true
                            })} >
                                <h1 className="font-semibold  text-xl ">{value.title}</h1>

                                <span className="dark:text-light-primary text-dark-primary rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${key === openIndex.index && openIndex.status ? 'rotate-45' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </span>
                            </button>

                            <div className={`wrapper ${key === openIndex.index && openIndex.status ? 'open' : 'hidden'} `}>
                                <p className={`${key === openIndex.index && openIndex.status && 'mt-6'} text-base text-dark-secondary dark:text-light-primary expandable `}>
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default FAQSection