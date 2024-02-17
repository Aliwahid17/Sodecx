import { getScopedI18n } from "@/locales/server"

const AllStartedSection = async () => {

    const t = await getScopedI18n('about.allStarted')

    const allStarted = [
        {
            title: t('founded.title'),
            description: t('founded.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                <g clipPath="url(#clip0_227_38366)">
                    <path d="M6.08442 2C5.81183 2 5.55042 2.10536 5.35767 2.29289C5.16492 2.48043 5.05664 2.73478 5.05664 3V33C5.05664 33.2652 5.16492 33.5196 5.35767 33.7071C5.55042 33.8946 5.81183 34 6.08442 34C6.357 34 6.61842 33.8946 6.81117 33.7071C7.00391 33.5196 7.1122 33.2652 7.1122 33V3C7.1122 2.73478 7.00391 2.48043 6.81117 2.29289C6.61842 2.10536 6.357 2 6.08442 2Z" fill="url(#paint0_linear_227_38366)" />
                    <path d="M31.3472 3.82C31.191 3.73223 31.0137 3.68603 30.8333 3.68603C30.6529 3.68603 30.4757 3.73223 30.3194 3.82C28.327 4.63491 26.1799 5.03024 24.0192 4.98C22.1576 4.84748 20.3447 4.34009 18.6953 3.49C17.109 2.65611 15.3632 2.14892 13.5667 2C12.5339 2.0011 11.5085 2.14164 10.5194 2.41593C9.73699 2.6329 9.25 3.3804 9.25 4.19233V16.6695C9.25 18.1787 10.9097 19.1882 12.4065 18.9958C12.8069 18.9443 13.2117 18.9188 13.6181 18.92C15.1295 19.0659 16.5965 19.5009 17.9347 20.2C19.8465 21.1713 21.9483 21.7371 24.1014 21.86C26.5727 21.91 29.0262 21.4427 31.2958 20.49C31.4653 20.4069 31.6079 20.2798 31.7076 20.1227C31.8074 19.9656 31.8605 19.7847 31.8611 19.6V4.67C31.8583 4.49719 31.8094 4.32805 31.7193 4.17908C31.6293 4.03011 31.5011 3.90639 31.3472 3.82Z" fill="url(#paint1_linear_227_38366)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_227_38366" x1="5.05664" y1="18" x2="7.1122" y2="18" gradientUnits="userSpaceOnUse">
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
                    <linearGradient id="paint1_linear_227_38366" x1="9.25" y1="11.9318" x2="31.8611" y2="11.9318" gradientUnits="userSpaceOnUse">
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
                    <clipPath id="clip0_227_38366">
                        <rect width="37" height="36" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        },
        {
            title: t('impact.title'),
            description: t('impact.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <path d="M5.75 35.1517C5.75 35.1517 7.66667 13.5892 13.4167 5.75L23 7.66667L21.0833 13.5892H17.25V27.3125H19.1667C23 21.4283 30.935 19.2817 35.7267 21.4283C42.0517 24.3608 41.4767 33.1967 35.7267 37.1067C31.1267 40.25 17.25 42.9908 5.75 35.1517Z" fill="url(#paint0_linear_227_38371)" />
                <defs>
                    <linearGradient id="paint0_linear_227_38371" x1="5.75" y1="23.0014" x2="40.2574" y2="23.0014" gradientUnits="userSpaceOnUse">
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
            title: t('clients.title'),
            description: t('clients.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <path d="M30.667 21.083C33.8487 21.083 36.3978 18.5147 36.3978 15.333C36.3978 12.1513 33.8487 9.58301 30.667 9.58301C27.4853 9.58301 24.917 12.1513 24.917 15.333C24.917 18.5147 27.4853 21.083 30.667 21.083ZM15.3337 21.083C18.5153 21.083 21.0645 18.5147 21.0645 15.333C21.0645 12.1513 18.5153 9.58301 15.3337 9.58301C12.152 9.58301 9.58366 12.1513 9.58366 15.333C9.58366 18.5147 12.152 21.083 15.3337 21.083ZM15.3337 24.9163C10.8678 24.9163 1.91699 27.1588 1.91699 31.6247V34.4997C1.91699 35.5538 2.77949 36.4163 3.83366 36.4163H26.8337C27.8878 36.4163 28.7503 35.5538 28.7503 34.4997V31.6247C28.7503 27.1588 19.7995 24.9163 15.3337 24.9163ZM30.667 24.9163C30.1112 24.9163 29.4787 24.9547 28.8078 25.0122C28.8462 25.0313 28.8653 25.0697 28.8845 25.0888C31.0695 26.6797 32.5837 28.8072 32.5837 31.6247V34.4997C32.5837 35.1705 32.4495 35.8222 32.2387 36.4163H42.167C43.2212 36.4163 44.0837 35.5538 44.0837 34.4997V31.6247C44.0837 27.1588 35.1328 24.9163 30.667 24.9163Z" fill="url(#paint0_linear_227_38373)" />
                <defs>
                    <linearGradient id="paint0_linear_227_38373" x1="1.91699" y1="22.9997" x2="44.0837" y2="22.9997" gradientUnits="userSpaceOnUse">
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
        <section className=" lg:h-[calc(100vh-82px)] flex flex-col justify-center items-center relative ">
            <div className="container px-5 mx-auto xl:px-24">
                <h2 className="font-semibold text-5xl pt-20 pb-10 text-center animation animate">{t('title')}</h2>
                <div className="flex flex-col gap-7 justify-center items-center lg:flex-row lg:items-stretch">
                    {allStarted.map((value, key) => (
                        <div key={key} className="relative p-1.5  inline-flex items-center w-full sm:w-3/4  justify-center overflow-hidden group rounded-[46px] animation animate">
                            <div className="absolute bg-gradient w-full h-full"></div>
                            <div className="relative bg-light-primary dark:bg-dark-primary p-5 w-full h-full gap-5 rounded-[40px] flex items-center ">
                                <div className="flex flex-col gap-5 h-full">
                                    <div className="font-semibold text-2xl flex justify-between items-center">
                                        <h3>
                                            {value.title}
                                        </h3>
                                        {value.icon}
                                    </div>
                                    <p className="text-lg">{value.description}</p>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>
    )
}

export default AllStartedSection