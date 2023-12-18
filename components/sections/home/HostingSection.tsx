import Image from "next/image"
import { getCurrentLocale, getScopedI18n } from "@/locales/server"
import HostingImage from "./HostingImage"
import { Button } from "@/components/button"
import { paths } from "@/config"

const HostingSection = async () => {

    const t = await getScopedI18n('home.hosting')
    const currentLocale = getCurrentLocale()

    return (
        <section className='h-[calc(100vh-82px)] flex justify-between '>
            <div className="container px-5  mx-auto xl:px-24">
                <div className="flex flex-col lg:flex-row items-center justify-around lg:gap-3 xl:gap-5 h-full">
                    <div className="flex flex-row-reverse w-full justify-around ">
                        <div className="hidden sm:flex flex-col justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="18" viewBox="0 0 70 18" fill="none">
                                <path d="M53.2706 2.06764C53.2803 1.80128 53.3656 1.54323 53.5166 1.32365C53.6675 1.10407 53.8778 0.932053 54.1228 0.827797C54.3679 0.723542 54.6375 0.691361 54.9002 0.734977C55.1629 0.778592 55.4077 0.896211 55.606 1.07408L69.1279 14.6102C69.2585 14.7405 69.3622 14.8954 69.4329 15.0659C69.5036 15.2364 69.54 15.4192 69.54 15.6038C69.54 15.7884 69.5036 15.9712 69.4329 16.1417C69.3622 16.3122 69.2585 16.4671 69.1279 16.5974C68.9987 16.7278 68.845 16.8313 68.6757 16.902C68.5063 16.9726 68.3247 17.009 68.1412 17.009C67.9577 17.009 67.7761 16.9726 67.6067 16.902C67.4374 16.8313 67.2837 16.7278 67.1545 16.5974L53.6793 3.0612C53.4209 2.79465 53.2747 2.43902 53.2706 2.06764Z" className="fill-dark-primary dark:fill-light-primary " />
                                <path d="M53.2698 15.6039C53.2715 15.2321 53.4181 14.8755 53.6785 14.6103L67.2121 1.07419C67.3413 0.943777 67.495 0.840257 67.6643 0.769616C67.8337 0.698975 68.0154 0.662598 68.1988 0.662598C68.3823 0.662598 68.5639 0.698975 68.7333 0.769616C68.9026 0.840257 69.0563 0.943777 69.1855 1.07419C69.3162 1.20451 69.4198 1.3593 69.4905 1.5298C69.5613 1.70031 69.5977 1.88313 69.5977 2.06775C69.5977 2.25237 69.5613 2.43519 69.4905 2.6057C69.4198 2.7762 69.3162 2.93099 69.1855 3.06131L55.6636 16.5975C55.4653 16.7754 55.2205 16.893 54.9578 16.9366C54.6951 16.9802 54.4255 16.948 54.1805 16.8438C53.9354 16.7395 53.7251 16.5675 53.5742 16.3479C53.4232 16.1283 53.3379 15.8703 53.3282 15.6039L53.2698 15.6039Z" className="fill-dark-primary dark:fill-light-primary " />
                                <path d="M26.725 2.06875C26.7219 1.884 26.7565 1.70059 26.8268 1.52973C26.8971 1.35887 27.0015 1.20419 27.1336 1.07519C27.2638 0.944419 27.4185 0.840627 27.5888 0.769829C27.7592 0.699032 27.9418 0.662597 28.1262 0.662597C28.3106 0.662597 28.4932 0.699032 28.6635 0.769829C28.8339 0.840627 28.9886 0.944419 29.1187 1.07519L42.6406 14.6113C42.771 14.7418 42.8744 14.8967 42.9449 15.0672C43.0155 15.2377 43.0518 15.4204 43.0518 15.6049C43.0518 15.7895 43.0155 15.9722 42.9449 16.1427C42.8744 16.3131 42.771 16.468 42.6406 16.5985C42.5103 16.729 42.3556 16.8325 42.1853 16.9031C42.015 16.9738 41.8324 17.0101 41.6481 17.0101C41.4638 17.0101 41.2812 16.9738 41.1109 16.9031C40.9406 16.8325 40.7859 16.729 40.6556 16.5985L27.1336 3.06231C27.0036 2.93171 26.9006 2.77675 26.8305 2.60627C26.7604 2.43578 26.7245 2.25312 26.725 2.06875Z" className="fill-dark-primary dark:fill-light-primary " />
                                <path d="M26.7258 15.6049C26.7241 15.4204 26.7594 15.2373 26.8296 15.0666C26.8998 14.8959 27.0035 14.7411 27.1345 14.6113L40.6331 1.07517C40.8963 0.811651 41.2534 0.663574 41.6256 0.663574C41.9979 0.663574 42.3549 0.811651 42.6182 1.07517C42.8814 1.33868 43.0293 1.69606 43.0293 2.06873C43.0293 2.44139 42.8814 2.79877 42.6182 3.06228L29.0612 16.5985C28.9311 16.7292 28.7764 16.833 28.606 16.9038C28.4357 16.9746 28.2531 17.0111 28.0687 17.0111C27.8843 17.0111 27.7017 16.9746 27.5313 16.9038C27.361 16.833 27.2063 16.7292 27.0762 16.5985C26.9545 16.4646 26.8608 16.3078 26.8007 16.1372C26.7405 15.9665 26.7151 15.7855 26.7258 15.6049Z" className="fill-dark-primary dark:fill-light-primary " />
                                <path d="M0.000377594 2.06799C-0.000526481 1.8825 0.0362815 1.69879 0.108549 1.52798C0.180817 1.35717 0.287031 1.20285 0.420749 1.07443C0.549931 0.94402 0.703635 0.840501 0.872987 0.76986C1.04234 0.699218 1.22399 0.662841 1.40745 0.662841C1.59092 0.662841 1.77257 0.699218 1.94192 0.76986C2.11127 0.840501 2.26497 0.94402 2.39416 1.07443L15.9277 14.6106C16.0581 14.741 16.1615 14.896 16.232 15.0664C16.3026 15.2369 16.3389 15.4197 16.3389 15.6042C16.3389 15.7887 16.3026 15.9714 16.232 16.1419C16.1615 16.3124 16.0581 16.4673 15.9277 16.5977C15.7974 16.7282 15.6427 16.8318 15.4724 16.9024C15.3021 16.973 15.1195 17.0093 14.9352 17.0093C14.7509 17.0093 14.5683 16.973 14.398 16.9024C14.2277 16.8318 14.073 16.7282 13.9427 16.5977L0.420749 3.06155C0.154974 2.79898 0.00383942 2.44178 0.000377594 2.06799Z" className="fill-dark-primary dark:fill-light-primary " />
                                <path d="M0.000377003 15.6042C0.000808071 15.4189 0.0382226 15.2355 0.11041 15.0649C0.182597 14.8943 0.288104 14.7398 0.420748 14.6106L13.9427 1.07443C14.073 0.943955 14.2277 0.840404 14.398 0.769789C14.5683 0.699174 14.7509 0.662842 14.9352 0.662842C15.1195 0.662842 15.3021 0.699174 15.4724 0.769789C15.6427 0.840404 15.7974 0.943955 15.9277 1.07443C16.0581 1.20491 16.1615 1.35978 16.232 1.53026C16.3026 1.70074 16.3389 1.88347 16.3389 2.06799C16.3389 2.25252 16.3026 2.43525 16.232 2.60573C16.1615 2.77621 16.0581 2.93107 15.9277 3.06155L2.39416 16.5977C2.26497 16.7282 2.11127 16.8317 1.94192 16.9023C1.77257 16.973 1.59092 17.0093 1.40745 17.0093C1.22399 17.0093 1.04234 16.973 0.872986 16.9023C0.703635 16.8317 0.54993 16.7282 0.420748 16.5977C0.28703 16.4693 0.180816 16.315 0.108548 16.1442C0.0362809 15.9734 -0.000527089 15.7897 0.000377003 15.6042Z" className="fill-dark-primary dark:fill-light-primary " />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="79" viewBox="0 0 19 79" fill="none">
                                <path d="M18.2451 15.6529L0.307458 15.6529L9.2138 0.312011L18.2451 15.6529Z" fill="#81FDE9" />
                                <path d="M18.2451 36.228L0.307458 36.228L9.2138 20.8984L18.2451 36.228Z" fill="#F174FE" />
                                <path d="M18.2451 56.8037L0.307458 56.8037L9.2138 41.4741L18.2451 56.8037Z" fill="#81FDE9" />
                                <path d="M18.2451 78.6028L0.307458 78.6028L9.2138 63.262L18.2451 78.6028Z" fill="#F174FE" />
                            </svg>
                        </div>
                        <HostingImage />
                    </div>
                    <div className="flex flex-col w-full gap-5 lg:gap-9 " >
                        <div className="text-5xl font-semibold flex w-full justify-between" >
                            {t('title')}
                            <Image src={'../../assets/icons/home/lines.svg'} alt="Vector Line" width={110} height={18} />
                        </div>
                        <p>{t('description')}</p>
                        <div className="flex justify-between items-center " >
                            <Button title={currentLocale === 'en' ? "Contact Us" : 'Contact'} href={paths.contact} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="14" viewBox="0 0 56 14" fill="none">
                                <path d="M11.3582 0.0976562V13.0977L0.478516 6.64294L11.3582 0.0976562Z" fill="#81FDE9" />
                                <path d="M25.9498 0.0976562V13.0977L15.0781 6.64294L25.9498 0.0976562Z" fill="#F174FE" />
                                <path d="M40.5415 0.0976562V13.0977L29.6699 6.64294L40.5415 0.0976562Z" fill="#81FDE9" />
                                <path d="M56.0007 0.0976562V13.0977L45.1211 6.64294L56.0007 0.0976562Z" fill="#F174FE" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HostingSection