import { HeroDecor, Hexagon } from "@/components/decors"
import { getScopedI18n } from "@/locales/server"
import DetailSection from "./DetailSection"

const AboutSection = async () => {

    const t = await getScopedI18n('about')

    const detailSectionContent = [
        {
            title : t('whyUs.connectivity.title'),
            description : t('whyUs.connectivity.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M14.5846 8.33366C14.5846 6.02116 12.7305 4.16699 10.418 4.16699C8.10547 4.16699 6.2513 6.02116 6.2513 8.33366C6.2513 10.6462 8.10547 12.5003 10.418 12.5003C12.7305 12.5003 14.5846 10.6462 14.5846 8.33366ZM21.2305 9.37533C20.3763 9.37533 19.6471 9.89616 19.3138 10.6878C18.8532 11.8408 18.0567 12.8287 17.0276 13.5234C15.9986 14.2181 14.7845 14.5875 13.543 14.5837H7.29297C5.5638 14.5837 4.16797 15.9795 4.16797 17.7087V22.917H16.668V18.2087C18.1346 17.7461 19.4793 16.9617 20.6039 15.9128C21.7285 14.8639 22.6045 13.577 23.168 12.1462C23.7096 10.8128 22.668 9.37533 21.2305 9.37533ZM39.5846 35.417C41.8971 35.417 43.7513 33.5628 43.7513 31.2503C43.7513 28.9378 41.8971 27.0837 39.5846 27.0837C37.2721 27.0837 35.418 28.9378 35.418 31.2503C35.418 33.5628 37.2721 35.417 39.5846 35.417ZM42.7096 37.5003H36.4596C33.8346 37.5003 31.6055 35.8962 30.6888 33.6045C30.5391 33.2178 30.2759 32.8855 29.9338 32.6513C29.5917 32.417 29.1867 32.2918 28.7721 32.292C27.3346 32.292 26.293 33.7295 26.8138 35.0628C27.3805 36.4918 28.2576 37.7769 29.3817 38.8254C30.5058 39.8739 31.8489 40.6594 33.3138 41.1253V45.8337H45.8138V40.6253C45.8346 38.8962 44.4388 37.5003 42.7096 37.5003ZM35.9388 23.1045C35.9388 23.1045 35.9388 23.0837 35.9596 23.1045C34.8709 23.3853 33.8773 23.9528 33.0822 24.7479C32.2871 25.5429 31.7196 26.5366 31.4388 27.6253V27.6045C31.2096 28.5003 30.3763 29.167 29.3971 29.167C28.2513 29.167 27.3138 28.2295 27.3138 27.0837C27.3138 26.9795 27.3555 26.792 27.3555 26.792C27.7987 24.8948 28.7661 23.1603 30.1474 21.7863C31.5288 20.4124 33.2684 19.4542 35.168 19.0212C35.2513 19.0212 35.3346 19.0003 35.418 19.0003C36.5638 19.0003 37.5013 19.9378 37.5013 21.0837C37.5013 22.042 36.8346 22.8753 35.9388 23.1045ZM37.5013 12.6253C37.5013 13.6878 36.7305 14.542 35.7096 14.6878C29.0638 15.5003 23.8346 20.7503 23.0221 27.3962C22.9358 27.9096 22.6607 28.3723 22.2508 28.6934C21.8409 29.0145 21.3258 29.1708 20.8066 29.1316C20.2874 29.0925 19.8016 28.8607 19.4445 28.4818C19.0873 28.1029 18.8847 27.6043 18.8763 27.0837V26.8962C19.918 18.3128 26.7721 11.5212 35.3763 10.542H35.3971C36.5638 10.542 37.5013 11.4795 37.5013 12.6253Z" fill="url(#paint0_linear_384_61050)" />
                <defs>
                    <linearGradient id="paint0_linear_384_61050" x1="4.16797" y1="25.0003" x2="45.814" y2="25.0003" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#81FEE9" />
                        <stop offset="0.0625" stopColor="#88F5EA" />
                        <stop offset="0.125" stopColor="#90ECEC" />
                        <stop offset="0.1875" stopColor="#97E3ED" />
                        <stop offset="0.25" stopColor="#9EDAEF" />
                        <stop offset="0.3125" stopColor="#A6D1F0" />
                        <stop offset="0.375" stopColor="#ADC8F1" />
                        <stop offset="0.4375" stopColor="#B4BFF3" />
                        <stop offset="0.5" stopColor="#BCB6F4" />
                        <stop offset="0.5625" stopColor="#C3ADF5" />
                        <stop offset="0.625" stopColor="#CAA4F7" />
                        <stop offset="0.6875" stopColor="#D19BF8" />
                        <stop offset="0.75" stopColor="#D992FA" />
                        <stop offset="0.8125" stopColor="#E089FB" />
                        <stop offset="0.875" stopColor="#E780FC" />
                        <stop offset="0.9375" stopColor="#EF77FE" />
                        <stop offset="1" stopColor="#F66EFF" />
                    </linearGradient>
                </defs>
            </svg>
        },
        {
            title : t('whyUs.creativeIdeas.title'),
            description : t('whyUs.creativeIdeas.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <path d="M6.5 26H8.66667M26 6.5V8.66667M43.3333 26H45.5M12.1333 12.1333L13.65 13.65M39.8667 12.1333L38.35 13.65M21.0167 36.8333H30.9833M19.5 34.6667C17.681 33.3024 16.3374 31.4005 15.6594 29.2301C14.9815 27.0598 15.0036 24.7312 15.7226 22.5742C16.4416 20.4172 17.8211 18.541 19.6656 17.2115C21.5102 15.8821 23.7263 15.1667 26 15.1667C28.2737 15.1667 30.4898 15.8821 32.3344 17.2115C34.1789 18.541 35.5584 20.4172 36.2774 22.5742C36.9964 24.7312 37.0185 27.0598 36.3406 29.2301C35.6626 31.4005 34.319 33.3024 32.5 34.6667C31.6541 35.504 31.0171 36.5288 30.6407 37.658C30.2643 38.7872 30.159 39.9892 30.3333 41.1667C30.3333 42.3159 29.8768 43.4181 29.0641 44.2308C28.2515 45.0435 27.1493 45.5 26 45.5C24.8507 45.5 23.7485 45.0435 22.9359 44.2308C22.1232 43.4181 21.6667 42.3159 21.6667 41.1667C21.841 39.9892 21.7357 38.7872 21.3593 37.658C20.9829 36.5288 20.3459 35.504 19.5 34.6667Z" stroke="url(#paint0_linear_384_61037)" strokeWidth="4.33333" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_384_61037" x1="6.5" y1="26" x2="45.5" y2="26" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#81FEE9" />
                        <stop offset="0.0625" stopColor="#88F5EA" />
                        <stop offset="0.125" stopColor="#90ECEC" />
                        <stop offset="0.1875" stopColor="#97E3ED" />
                        <stop offset="0.25" stopColor="#9EDAEF" />
                        <stop offset="0.3125" stopColor="#A6D1F0" />
                        <stop offset="0.375" stopColor="#ADC8F1" />
                        <stop offset="0.4375" stopColor="#B4BFF3" />
                        <stop offset="0.5" stopColor="#BCB6F4" />
                        <stop offset="0.5625" stopColor="#C3ADF5" />
                        <stop offset="0.625" stopColor="#CAA4F7" />
                        <stop offset="0.6875" stopColor="#D19BF8" />
                        <stop offset="0.75" stopColor="#D992FA" />
                        <stop offset="0.8125" stopColor="#E089FB" />
                        <stop offset="0.875" stopColor="#E780FC" />
                        <stop offset="0.9375" stopColor="#EF77FE" />
                        <stop offset="1" stopColor="#F66EFF" />
                    </linearGradient>
                </defs>
            </svg>
        },
        {
            title : t('whyUs.onTimeDelivery.title'),
            description : t('whyUs.onTimeDelivery.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44" fill="none">
                <path d="M21.5 12.8337V22.0003H30.4583M37.6322 8.38049L32.1407 3.66699M10.8647 3.66699L5.375 8.38049M21.5 36.667C17.6986 36.667 14.0528 35.1218 11.3648 32.3712C8.67678 29.6207 7.16667 25.8902 7.16667 22.0003C7.16667 18.1105 8.67678 14.38 11.3648 11.6294C14.0528 8.87889 17.6986 7.33366 21.5 7.33366C25.3014 7.33366 28.9472 8.87889 31.6352 11.6294C34.3232 14.38 35.8333 18.1105 35.8333 22.0003C35.8333 25.8902 34.3232 29.6207 31.6352 32.3712C28.9472 35.1218 25.3014 36.667 21.5 36.667Z" stroke="url(#paint0_linear_384_61043)" strokeWidth="4.33333" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_384_61043" x1="5.375" y1="20.167" x2="37.6322" y2="20.167" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#81FEE9" />
                        <stop offset="0.0625" stopColor="#88F5EA" />
                        <stop offset="0.125" stopColor="#90ECEC" />
                        <stop offset="0.1875" stopColor="#97E3ED" />
                        <stop offset="0.25" stopColor="#9EDAEF" />
                        <stop offset="0.3125" stopColor="#A6D1F0" />
                        <stop offset="0.375" stopColor="#ADC8F1" />
                        <stop offset="0.4375" stopColor="#B4BFF3" />
                        <stop offset="0.5" stopColor="#BCB6F4" />
                        <stop offset="0.5625" stopColor="#C3ADF5" />
                        <stop offset="0.625" stopColor="#CAA4F7" />
                        <stop offset="0.6875" stopColor="#D19BF8" />
                        <stop offset="0.75" stopColor="#D992FA" />
                        <stop offset="0.8125" stopColor="#E089FB" />
                        <stop offset="0.875" stopColor="#E780FC" />
                        <stop offset="0.9375" stopColor="#EF77FE" />
                        <stop offset="1" stopColor="#F66EFF" />
                    </linearGradient>
                </defs>
            </svg>
        }
    ]

    return (
        <section className="h-screen lg:h-[calc(100vh-82px)] flex flex-col gap-2 justify-center items-center relative ">
            <HeroDecor />
            <h1 className="font-extrabold text-8xl text-center z-20">{t('title')}</h1>
            <Hexagon />
            <DetailSection data={detailSectionContent} />
        </section>
    )
}

export default AboutSection