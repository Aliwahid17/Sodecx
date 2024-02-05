import { PricingTableTypes } from "./types"
import QuoteBtn from "@components/contact/QuoteBtn"
import { quoteForm } from "@/server/contactForm"

const PricingTable = ({ pricing, showMonth }: { pricing: PricingTableTypes[], showMonth?: boolean }) => {

    return (
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-2 xl:gap-10 justify-center items-center lg:items-stretch ">
            {pricing.map((value, key) => (
                <div key={key} className="relative p-1.5 mx-1.5 inline-flex items-center w-full sm:w-3/4  justify-center overflow-hidden group rounded-[46px]">
                    <div className="absolute bg-gradient w-full h-full"></div>
                    <div className="relative bg-light-primary dark:bg-dark-primary px-2 pt-6 pb-36 w-full h-full gap-10 rounded-[40px] flex flex-col items-center ">
                        <div className="flex flex-col gap-4 items-center text-center">
                            <div className="text-3xl font-semibold">{value.title}</div>
                            <div className="flex flex-col gap-3 w-7/12 items-center ">
                                <div className="">{value.description}</div>
                                <div className="bg-gradient w-fit text-3xl font-semibold text-dark-secondary py-1 px-6 rounded-3xl">{value.price}{showMonth && <span className="text-xs">/month</span>}</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            {value.table.map((item, index) => (
                                <div key={index} className="flex items-center w-full gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                        <path d="M1.11133 6.79279C1.11133 6.79279 2.18727 6.79279 3.62186 9.30332C3.62186 9.30332 7.60917 2.72812 11.1534 1.41309" className="dark:stroke-light-primary stroke-dark-primary" strokeWidth="1.07594" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-1 bg-gradient  w-full h-[102px] flex justify-center  items-center rounded-[40px]">
                        <QuoteBtn pricing={value.title} table={pricing} serverActions={quoteForm} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PricingTable