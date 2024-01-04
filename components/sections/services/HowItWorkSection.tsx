import { getScopedI18n } from "@/locales/server"
import HowItWorkImage from "./HowItWorkImage"
import Image from "next/image"
import Triangle from '../../../public/assets/icons/services/triangles.svg'

const HowItWorkSection = async () => {

    const t = await getScopedI18n('services.howItWorks')

    const detailSectionContent = [
        {
            title: t('1.title'),
            description: t('1.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                <path d="M12.3451 14.0687H24.6003M12.3451 20.1963H21.5365M19.015 31.9092L18.4727 32.4515L13.877 27.8558H9.28125C8.06239 27.8558 6.89346 27.3716 6.0316 26.5097C5.16974 25.6479 4.68555 24.4789 4.68555 23.2601V11.0049C4.68555 9.78603 5.16974 8.61709 6.0316 7.75523C6.89346 6.89337 8.06239 6.40918 9.28125 6.40918H27.6641C28.8829 6.40918 30.0519 6.89337 30.9137 7.75523C31.7756 8.61709 32.2598 9.78603 32.2598 11.0049V19.4303M29.196 33.9834V24.792M29.196 24.792L33.7917 29.3877M29.196 24.792L24.6003 29.3877" stroke="url(#paint0_linear_384_61684)" strokeWidth="2.61602" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_384_61684" x1="4.68555" y1="20.1963" x2="33.7917" y2="20.1963" gradientUnits="userSpaceOnUse">
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
            title: t('2.title'),
            description: t('2.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                <g clipPath="url(#clip0_384_61675)">
                    <path d="M4.36133 35.538C4.37086 34.6234 4.6121 33.7262 5.0625 32.9302C5.53667 32.102 6.21986 31.4127 7.04381 30.9311C7.86777 30.4495 8.80366 30.1926 9.758 30.1859C10.7119 30.1931 11.6472 30.4502 12.4707 30.9318C13.2941 31.4133 13.9769 32.1024 14.4509 32.9302C14.9026 33.7259 15.1415 34.6241 15.152 35.538M22.8623 35.538C22.8719 34.6234 23.1131 33.7262 23.5635 32.9302C24.0374 32.1024 24.7202 31.4133 25.5437 30.9318C26.3671 30.4502 27.3025 30.1931 28.2564 30.1859C29.6789 30.1879 31.0432 30.7507 32.0535 31.7521C33.0638 32.7535 33.6385 34.1129 33.653 35.5353M13.7707 17.7828C13.7786 16.8978 14.0123 16.0285 14.4482 15.2565C14.908 14.4532 15.5705 13.7848 16.3697 13.3179C17.1688 12.8511 18.0765 12.6022 19.0019 12.5962C20.8665 12.5988 22.6338 13.6309 23.553 15.2565C23.9889 16.0285 24.2226 16.8978 24.2331 17.7828M9.758 27.8014C10.553 27.8014 11.3155 27.4856 11.8777 26.9234C12.4399 26.3612 12.7557 25.5988 12.7557 24.8037C12.7557 24.0087 12.4399 23.2462 11.8777 22.684C11.3155 22.1218 10.553 21.806 9.758 21.806C8.96295 21.806 8.20047 22.1218 7.63829 22.684C7.07611 23.2462 6.76029 24.0087 6.76029 24.8037C6.76029 25.5988 7.07611 26.3612 7.63829 26.9234C8.20047 27.4856 8.96295 27.8014 9.758 27.8014ZM28.259 27.8014C29.054 27.8014 29.8165 27.4856 30.3787 26.9234C30.9409 26.3612 31.2567 25.5988 31.2567 24.8037C31.2567 24.0087 30.9409 23.2462 30.3787 22.684C29.8165 22.1218 29.054 21.806 28.259 21.806C27.4639 21.806 26.7015 22.1218 26.1393 22.684C25.5771 23.2462 25.2613 24.0087 25.2613 24.8037C25.2613 25.5988 25.5771 26.3612 26.1393 26.9234C26.7015 27.4856 27.4639 27.8014 28.259 27.8014ZM18.9993 10.7684C19.7411 10.7684 20.4524 10.4738 20.9769 9.94926C21.5014 9.42476 21.7961 8.71338 21.7961 7.97162C21.7961 7.22986 21.5014 6.51848 20.9769 5.99397C20.4524 5.46947 19.7411 5.1748 18.9993 5.1748C18.2575 5.1748 17.5462 5.46947 17.0217 5.99397C16.4972 6.51848 16.2025 7.22986 16.2025 7.97162C16.2025 8.71338 16.4972 9.42476 17.0217 9.94926C17.5462 10.4738 18.2575 10.7684 18.9993 10.7684Z" stroke="url(#paint0_linear_384_61675)" strokeWidth="2.62612" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M31.5603 1.57227H6.44414C5.94407 1.57227 5.46447 1.77092 5.11086 2.12453C4.75725 2.47814 4.55859 2.95774 4.55859 3.45782V15.8977C4.55859 16.9403 5.4042 17.7833 6.44414 17.7833H31.5603C32.0604 17.7833 32.54 17.5846 32.8936 17.231C33.2472 16.8774 33.4459 16.3978 33.4459 15.8977V3.45782C33.4459 2.95774 33.2472 2.47814 32.8936 2.12453C32.54 1.77092 32.0604 1.57227 31.5603 1.57227Z" stroke="url(#paint1_linear_384_61675)" strokeWidth="2.62612" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_384_61675" x1="4.36133" y1="20.3564" x2="33.653" y2="20.3564" gradientUnits="userSpaceOnUse">
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
                    <linearGradient id="paint1_linear_384_61675" x1="4.55859" y1="9.67777" x2="33.4459" y2="9.67777" gradientUnits="userSpaceOnUse">
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
                    <clipPath id="clip0_384_61675">
                        <rect width="36.7656" height="36.7656" fill="white" transform="translate(0.617188 0.140625)" />
                    </clipPath>
                </defs>
            </svg>
        },
        {
            title: t('3.title'),
            description: t('3.description'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M31.8788 4.51539C30.9357 3.9857 29.931 3.93444 28.8699 4.06601C27.8618 4.19245 26.6333 4.51026 25.1587 4.89471L21.7089 5.79005C20.2343 6.1745 19.0075 6.49231 18.0695 6.87334C17.0802 7.27316 16.2258 7.80968 15.6722 8.7409C15.1152 9.67725 15.0605 10.6785 15.1989 11.7242C15.3305 12.7101 15.6603 13.9062 16.0532 15.3312L16.9811 18.687C17.374 20.1137 17.7055 21.3081 18.1002 22.2239C18.5188 23.1979 19.0776 24.0266 20.0276 24.5597C20.9708 25.0876 21.9755 25.1406 23.0382 25.0073C24.0464 24.8826 25.2749 24.5631 26.7495 24.1786L30.1992 23.2833C31.6738 22.9006 32.9006 22.581 33.8387 22.2C34.828 21.8002 35.6823 21.2637 36.2359 20.3324C36.7929 19.3961 36.8476 18.3948 36.7092 17.3508C36.5777 16.3649 36.2479 15.1672 35.8549 13.7421L34.9271 10.3863C34.5341 8.96132 34.2026 7.76526 33.8079 6.84942C33.3893 5.87548 32.8272 5.04678 31.8788 4.51539ZM25.7191 7.39619C27.2996 6.98611 28.3641 6.71272 29.1877 6.6102C29.9754 6.5111 30.353 6.59824 30.6281 6.75202C30.8964 6.90238 31.1544 7.16381 31.4534 7.86265C31.7695 8.59737 32.0565 9.62086 32.4803 11.1552L33.3585 14.3385C33.784 15.8728 34.0642 16.898 34.1684 17.6874C34.2676 18.4375 34.1787 18.7776 34.0318 19.0219C33.8831 19.2731 33.6131 19.5277 32.8784 19.825C32.1129 20.1342 31.0501 20.4145 29.4696 20.8245L26.189 21.6772C24.6085 22.0872 23.544 22.3606 22.7204 22.4631C21.931 22.5639 21.5551 22.4768 21.28 22.323C21.0118 22.1727 20.7538 21.9095 20.4548 21.2124C20.1387 20.4777 19.8516 19.4525 19.4279 17.9181L18.5496 14.7366C18.1241 13.1988 17.8439 12.1753 17.7397 11.3876C17.6406 10.6358 17.7294 10.2975 17.8764 10.0514C18.025 9.80027 18.295 9.54568 19.0297 9.24837C19.7952 8.93911 20.858 8.66059 22.4385 8.24881L25.7191 7.39619Z" fill="url(#paint0_linear_384_61691)" />
                <path fillRule="evenodd" clipRule="evenodd" d="M6.43625 8.23315C6.11253 8.15379 5.77064 8.20367 5.48309 8.37221C5.19555 8.54075 4.98498 8.81469 4.89606 9.13591C4.80714 9.45712 4.84687 9.80035 5.00681 10.0928C5.16676 10.3852 5.43434 10.6038 5.75278 10.7022L8.66263 11.5104C9.39052 11.712 9.93216 12.2622 10.1167 12.9303L13.452 24.9985C13.3229 25.0241 13.1947 25.0537 13.0676 25.0874C9.68953 25.9639 7.62547 29.3624 8.55157 32.7199C9.47424 36.0604 12.9838 37.986 16.3482 37.1112C19.2939 36.3474 21.2401 33.6665 21.076 30.7687L35.4629 27.0301C35.6258 26.9878 35.7788 26.9138 35.9131 26.8124C36.0475 26.711 36.1605 26.5841 36.2458 26.439C36.331 26.2939 36.3869 26.1335 36.4102 25.9668C36.4334 25.8001 36.4236 25.6304 36.3813 25.4675C36.3391 25.3046 36.2651 25.1517 36.1637 25.0173C36.0622 24.883 35.9354 24.77 35.7903 24.6847C35.6452 24.5994 35.4847 24.5436 35.318 24.5203C35.1513 24.497 34.9817 24.5068 34.8188 24.5491L20.4011 28.2962C19.9698 27.472 19.3627 26.7525 18.6229 26.1886C17.883 25.6247 17.0283 25.2301 16.1192 25.0327L12.5874 12.2468C12.3706 11.4776 11.9583 10.7778 11.3905 10.2154C10.8228 9.65305 10.119 9.24737 9.3478 9.03793L6.43796 8.23144L6.43625 8.23315ZM13.7134 27.5666C15.7843 27.0301 17.862 28.2313 18.3952 30.1621C18.9248 32.0758 17.7629 34.0971 15.7057 34.6319C13.6348 35.1702 11.5571 33.9673 11.024 32.0365C10.4943 30.1228 11.6562 28.1014 13.7134 27.5666Z" fill="url(#paint1_linear_384_61691)" />
                <defs>
                    <linearGradient id="paint0_linear_384_61691" x1="15.1348" y1="14.5371" x2="36.7734" y2="14.5371" gradientUnits="userSpaceOnUse">
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
                    <linearGradient id="paint1_linear_384_61691" x1="4.84961" y1="22.759" x2="36.4225" y2="22.759" gradientUnits="userSpaceOnUse">
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
                <h2 className="font-semibold text-5xl pt-20 lg:pt-0 pb-10 text-center">{t('title')}</h2>
            </div>
            <div className="flex  flex-col justify-center items-center gap-16">
                <HowItWorkImage sx="xl:absolute right-10 " />
                <Image src={Triangle} alt="Group of Triangles" width={172} height={146} className="hidden xl:block absolute top-[13%] left-14" />
                <svg className="hidden xl:block absolute bottom-[13%] left-10" xmlns="http://www.w3.org/2000/svg" width="208" height="32" viewBox="0 0 208 32" fill="none">
                    <path d="M206.768 30.6649L206.768 1.66797L177.896 1.66797L177.896 30.6649L206.768 30.6649Z" stroke="#81FDE9" strokeWidth="1.41406" strokeMiterlimit="10" />
                    <path d="M147.754 30.6649L147.754 1.66797L118.882 1.66797L118.882 30.6649L147.754 30.6649Z" fill="#81FDE9" stroke="#81FDE9" strokeWidth="1.41406" strokeMiterlimit="10" />
                    <path d="M88.7324 30.6649L88.7324 1.66797L59.8608 1.66797L59.8608 30.6649L88.7324 30.6649Z" stroke="#F174FE" strokeWidth="1.41406" strokeMiterlimit="10" />
                    <path d="M29.7168 30.6649L29.7168 1.66797L0.845247 1.66797L0.845246 30.6649L29.7168 30.6649Z" fill="#F174FE" stroke="#F174FE" strokeWidth="1.41406" strokeMiterlimit="10" />
                </svg>

                <div className="flex flex-col w-full items-center justify-center px-2">
                    {detailSectionContent.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center" >

                            <div className={`flex w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} sm:w-3/4 lg:w-fit`} >
                                <div>
                                    <div className="relative  p-1 inline-flex items-center justify-center  overflow-hidden group rounded-full">
                                        <span className={`absolute ${index % 2 === 0 ? "left-10" : "right-10"}  bg-gradient w-full h-full rounded-md`}></span>
                                        <span className="relative bg-light-primary dark:bg-dark-primary p-2 rounded-full ">
                                            <div className="relative p-1  inline-flex items-center justify-center  overflow-hidden group rounded-full">
                                                <span className="absolute bg-gradient w-full h-full rounded-full"></span>
                                                <span className="relative bg-light-primary dark:bg-dark-primary p-2 rounded-full ">
                                                    {item.icon}
                                                </span>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center  max-w-lg w-full md:w-9/12 xl:w-96 " >
                                    <div className="text-2xl font-semibold mx-2" >{item.title}</div>
                                    <div className={`bg-gradient h-1  ${index % 2 === 0 ? "rounded-r-full" : "rounded-l-full"} my-1`} />
                                    <div className="ml-2 mr-4">{item.description}</div>
                                </div>
                            </div>

                            {index + 1 !== detailSectionContent.length && <svg xmlns="http://www.w3.org/2000/svg" className="py-2" width="6" height="117" viewBox="0 0 6 117" fill="none">
                                <mask id="mask0_384_61695" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="6" height="117">
                                    <path d="M3 3L3 114.004" stroke="black" strokeWidth="4.94922" strokeLinecap="round" strokeDasharray="9.9 9.9" />
                                </mask>
                                <g mask="url(#mask0_384_61695)">
                                    <rect x="10.7773" y="-0.914062" width="123.812" height="14.1406" transform="rotate(90 10.7773 -0.914062)" fill="url(#paint0_linear_384_61695)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_384_61695" x1="10.7773" y1="6.15625" x2="134.589" y2="6.15625" gradientUnits="userSpaceOnUse">
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
                            </svg>}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HowItWorkSection