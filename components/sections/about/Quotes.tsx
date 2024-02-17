import { getScopedI18n } from "@/locales/server"
import Image from "next/image"

const Quotes = async () => {

    const quotes = await getScopedI18n('about')

    return (
        <section className="flex mt-16 flex-col bg-gradient justify-center items-center relative ">
            <div className="container px-5 mx-auto xl:px-24">
                <div className='flex flex-col gap-10 justify-center items-center py-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="animation animate" width="71" height="72" viewBox="0 0 71 72" fill="none">
                        <path d="M53.2498 53.458C54.4267 53.458 55.5554 52.9905 56.3876 52.1583C57.2198 51.3261 57.6873 50.1974 57.6873 49.0205V38.1841C57.6873 37.0072 57.2198 35.8785 56.3876 35.0463C55.5554 34.2142 54.4267 33.7466 53.2498 33.7466H47.0905C47.0905 32.1891 47.1837 30.6271 47.3657 29.0695C47.6408 27.4188 48.1023 25.9499 48.7413 24.6675C49.3847 23.3806 50.2101 22.3733 51.2219 21.6367C52.2292 20.8113 53.5116 20.3986 55.0736 20.3986V13.5205C52.5043 13.5205 50.2589 14.0708 48.3286 15.1713C46.4151 16.2606 44.7699 17.7648 43.5139 19.5733C42.2533 21.5671 41.3242 23.752 40.7627 26.0431C40.1968 28.5714 39.9199 31.1558 39.9373 33.7466V49.0205C39.9373 50.1974 40.4048 51.3261 41.237 52.1583C42.0692 52.9905 43.1979 53.458 44.3748 53.458H53.2498ZM26.6248 53.458C27.8017 53.458 28.9304 52.9905 29.7626 52.1583C30.5948 51.3261 31.0623 50.1974 31.0623 49.0205V38.1841C31.0623 37.0072 30.5948 35.8785 29.7626 35.0463C28.9304 34.2142 27.8017 33.7466 26.6248 33.7466H20.4655C20.4655 32.1891 20.5587 30.6271 20.7407 29.0695C21.0158 27.4188 21.4773 25.9499 22.1163 24.6675C22.7597 23.3806 23.5851 22.3733 24.5969 21.6367C25.6042 20.8113 26.8866 20.3986 28.4486 20.3986V13.5205C25.8793 13.5205 23.6339 14.0708 21.7036 15.1713C19.7901 16.2606 18.1449 17.7648 16.8889 19.5733C15.6283 21.5671 14.6992 23.752 14.1377 26.0431C13.5718 28.5714 13.2949 31.1558 13.3123 33.7466V49.0205C13.3123 50.1974 13.7798 51.3261 14.612 52.1583C15.4442 52.9905 16.5729 53.458 17.7498 53.458H26.6248Z" className='fill-light-primary dark:fill-dark-primary' />
                    </svg>
                    <q className='text-dark-primary text-3xl font-semibold animation animate'>{quotes('quotes')}</q>
                    <div className="flex text-light-primary items-center gap-7 w-auto">
                        <Image src={'/founderImage.webp'} alt="Founder Image" className="rounded-full animation animate" width={50} height={50} />
                        <div className="text-lg flex  sm:gap-5 flex-col sm:flex-row justify-between items-center w-full">
                            <span className="font-semibold animation animate">Jort Groenendijk</span>
                            <svg className="hidden sm:block animation animate" xmlns="http://www.w3.org/2000/svg" width="2" height="24" viewBox="0 0 2 24" fill="none">
                                <path d="M1 1.20801V22.708" stroke="#F9FFFF" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span className="font-normal animation animate">{quotes('positon')} Sodecx</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quotes