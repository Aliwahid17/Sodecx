'use client'

import { paths } from "@/config";
import { useChangeLocale, useCurrentLocale } from "@locales/client"
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@components/button";
import { usePathname } from "next/navigation";

const Header = () => {

  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  const { theme, setTheme } = useTheme()
  const pathName = usePathname()
  const currentPathName = pathName.split('/')[1] === 'nl' ? !pathName.split('/')[2] ? '/' : `/${pathName.split('/')[2]}` : pathName
  const [openNav, setOpenNav] = useState(false)
  const [modeSrc, setModeSrc] = useState('../assets/icons/sun.svg')
  const [isVisible, setIsVisible] = useState(true);
  const oldScrollPosition = useRef(0);

  const navScroll = () => {
    if (!openNav) {
      oldScrollPosition.current = window.scrollY || document.documentElement.scrollTop;
      document.body.classList.add('overflow-hidden')
      window.top?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.classList.remove('overflow-hidden')
      setTimeout(() => {
        window.scrollTo({ top: oldScrollPosition.current, behavior: 'smooth' });
      }, 0);
    }
  }

  const toggleNav = (status?: boolean) => {
    if (typeof status === 'undefined') {
      setOpenNav(!openNav)
      navScroll()
    }
  }


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = currentScrollPos === 0;

      setIsVisible(visible);
    };
    handleScroll()
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    setModeSrc(theme === 'light' ? '../assets/icons/moon.svg' : '../assets/icons/sun.svg')
  }, [theme]);

  const toggleButton = (
    <button className="flex justify-center items-center lg:hidden gap-2" onClick={() => toggleNav()} title="menu">
      <div className="flex text-gray-500 w-10 h-10 relative focus:outline-none" >
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div style={{ position: 'relative', width: '34px', height: '34px' }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', transition: 'opacity 0.5s', opacity: openNav ? 0 : 1 }}>
              <path d="M28.334 7.08325L11.334 7.08325" className="stroke-dark-primary dark:stroke-light-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.334 17L5.66732 17" className="stroke-dark-primary dark:stroke-light-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.334 26.9165L17.0007 26.9165" className="stroke-dark-primary dark:stroke-light-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', transition: 'opacity 0.5s', transform: openNav ? 'rotate(90deg)' : 'rotate(90deg)', opacity: openNav ? 1 : 0 }}>
              <path d="M22.9596 6.04199L6.04297 22.9587" className="stroke-dark-primary dark:stroke-light-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.04297 6.04199L22.9596 22.9587" className="stroke-dark-primary dark:stroke-light-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  )

  const miniNavMenu = (
    <div className={`${openNav ? 'block relative opacity-100 ' : ' opacity-0 hidden '} delay-75 transition-opacity duration-500 lg:hidden p-3 pt-5 min-h-screen z-50`}>
      <div className="flex flex-col justify-center items-center gap-5 md:gap-10 font-medium text-xl">
        <Link href={paths.home} onClick={() => toggleNav()} >{currentLocale === 'en' ? 'Home' : 'Thuis'}</Link>
        <Link href={paths.about} onClick={() => toggleNav()} >{currentLocale === 'en' ? 'About Us' : 'Over ons'}</Link>
        <Link href={paths.services} onClick={() => toggleNav()} >{currentLocale === 'en' ? 'Services' : 'Diensten'}</Link>
        <Button title={currentLocale === 'en' ? "Contact Us" : 'Contact'} href={paths.contact} toggleNav={() => toggleNav()} />
        <div className="flex gap-6 justify-center items-center ">
          <button onClick={() => { setTheme(theme === 'light' ? "dark" : 'light'), toggleNav() }} ><Image src={modeSrc} alt="Light And Dark Mood Icons" width={20} height={21} /></button>
          <button onClick={() => { changeLocale(currentLocale === 'en' ? "nl" : 'en'), toggleNav() }}><Image src={currentLocale === 'en' ? '../assets/icons/nl.svg' : '../assets/icons/en.svg'} alt="English And Dutch Flags" width={25} height={18} /></button>
        </div>
      </div>
    </div>
  )



  return (
    <header className={`w-full m-0 sticky top-0 z-50 ${openNav ? "dark:bg-dark-primary bg-light-primary" : "backdrop-blur dark:bg-dark-primary/40 bg-light-primary/40 "} `}>
      <nav>
        <div className="container mx-auto px-4 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between py-4">

            <div className="flex justify-center items-center gap-12" >
              <Link href={paths.home} className="lg:flex justify-center items-center gap-5">

                <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.063 48.219C20.6811 50.5937 16.8192 50.5937 14.4373 48.219L1.78643 35.6063C-0.595474 33.2316 -0.595477 29.3814 1.78642 27.0067C2.51337 26.2819 3.37815 25.7784 4.29665 25.496L2.07399 23.2801C-0.4667 20.7471 -0.466704 16.6402 2.07399 14.1072C2.91204 13.2717 3.92183 12.7118 4.99008 12.4274L2.93704 10.3806C0.555138 8.0059 0.555137 4.15574 2.93704 1.78103C5.31894 -0.593676 9.18076 -0.593677 11.5627 1.78103L24.2136 14.3937C26.5955 16.7684 26.5955 20.6186 24.2136 22.9933C23.4865 23.7181 22.6216 24.2217 21.703 24.5041L23.9256 26.7199C26.4663 29.2529 26.4663 33.3598 23.9256 35.8928C23.0876 36.7282 22.0779 37.2881 21.0098 37.5725L23.063 39.6194C25.4449 41.9941 25.4449 45.8443 23.063 48.219Z" className=' fill-dark-primary dark:fill-light-primary' />
                  <path d="M9.69767 34.439L9.71202 34.4454C10.8174 34.9219 12.0664 35.151 13.4447 35.151C15.1798 35.151 16.6807 34.5933 17.903 33.4661L17.9035 33.4656C19.1742 32.2915 19.7951 30.746 19.7951 28.8988C19.7951 27.4621 19.4412 26.2283 18.6691 25.2636C17.941 24.3277 16.8399 23.4639 15.4156 22.6564L15.4156 22.6564L15.4117 22.6542C14.0625 21.9009 13.1033 21.3428 12.524 20.9756C12.0112 20.634 11.6318 20.2844 11.366 19.9336C11.1328 19.6008 11.0122 19.2191 11.0122 18.7642C11.0122 18.732 11.01 18.6999 11.0055 18.6681C10.9023 17.9245 11.2083 17.463 11.6844 17.1331C12.1913 16.7818 12.8698 16.6097 13.3501 16.5687C14.695 16.5752 15.604 17.0642 16.3039 17.987C16.4334 18.1578 16.5766 18.3118 16.737 18.4263C16.89 18.5356 17.1282 18.6572 17.4202 18.6302C17.7479 18.5999 17.9732 18.4005 18.0943 18.1969C18.2045 18.0116 18.2401 17.8128 18.2488 17.6564C18.2822 17.0612 17.9667 16.2351 17.2505 15.7526C16.1078 14.9829 14.7168 14.62 13.1195 14.62C11.7716 14.62 10.6093 14.9811 9.69745 15.7604C8.76918 16.5536 8.31426 17.6196 8.31426 18.8858C8.31426 19.6785 8.50676 20.4057 8.91061 21.0432L8.92003 21.0577C9.29564 21.6194 9.78772 22.1211 10.3835 22.5666C10.3939 22.5743 10.4044 22.5817 10.4152 22.5889C10.9964 22.9752 11.8463 23.508 12.96 24.185L12.9736 24.1931L14.5128 25.0815C15.5004 25.6781 16.159 26.2425 16.5433 26.7608L16.5523 26.7727C16.8826 27.1989 17.0972 27.8753 17.0972 28.8988C17.0972 30.0342 16.7481 30.919 16.0786 31.6109C15.4173 32.268 14.5358 32.6192 13.3634 32.6192C12.0727 32.6192 11.0717 32.3675 10.3168 31.9137C10.2205 31.8508 10.095 31.7182 9.93877 31.4795C9.80822 31.28 9.6882 31.0586 9.55519 30.8132C9.52846 30.7638 9.50121 30.7136 9.47324 30.6623C9.31922 30.3799 9.13394 30.0493 8.91667 29.7897C8.70699 29.5391 8.35103 29.2139 7.83345 29.2139C7.62627 29.2139 7.41167 29.261 7.21667 29.3807C7.02095 29.5009 6.88755 29.6683 6.80259 29.8412C6.64475 30.1624 6.64235 30.522 6.67132 30.7964C6.73117 31.3632 6.97484 31.9995 7.23916 32.4277C7.76598 33.2812 8.61055 33.941 9.69767 34.439ZM16.8536 17.585C16.8536 17.585 16.8537 17.5835 16.8541 17.5808C16.8539 17.5837 16.8537 17.5851 16.8536 17.585Z" className="dark:fill-dark-primary dark:stroke-dark-primary fill-light-primary stroke-light-primary" strokeWidth="1.39675" strokeLinejoin="round" />
                </svg>

                <h1 className="hidden lg:flex text-2xl font-medium" >Sodecx</h1>
              </Link>
              <Image src={'../assets/icons/line.svg'} className="hidden lg:flex" alt="Line" width={50} height={13} />
            </div>

            <span className={`${openNav || !isVisible ? `opacity-0 delay-75` : 'opacity-100'} -z-20  transition-opacity duration-500 absolute bg-gradient w-[295px] h-[295px]  rounded-[295px] lg:w-[389px] lg:h-[389px] lg:rounded-[389px] xl:w-[519px] xl:h-[519px] xl:rounded-[519px] -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />

            {toggleButton}

            <div className="hidden lg:flex items-center justify-between w-2/3">
              <div className={`flex items-center justify-between  w-1/2 ${isVisible && 'text-dark-primary'} `}>
                <Link href={paths.home} className="relative" >{currentLocale === 'en' ? 'Home' : 'Thuis'}<span className={` ${currentPathName !== paths.home ? "hidden" : ""} absolute -bottom-1 left-1/2 w-1 h-1  ${isVisible || "dark:bg-light-primary"} bg-dark-primary rounded-full `} /></Link>
                <Link href={paths.about} className="relative" >{currentLocale === 'en' ? 'About Us' : 'Over ons'}<span className={` ${currentPathName !== paths.about ? "hidden" : ""} absolute -bottom-1 left-1/2 w-1 h-1  ${isVisible || "dark:bg-light-primary"} bg-dark-primary rounded-full `} /></Link>
                <Link href={paths.services} className="relative" >{currentLocale === 'en' ? 'Services' : 'Diensten'}<span className={` ${currentPathName !== paths.services ? "hidden" : ""} absolute -bottom-1 left-1/2 w-1 h-1  ${isVisible || "dark:bg-light-primary"} bg-dark-primary rounded-full `} /></Link>
              </div>
              <div className="flex justify-center items-center gap-2" >
                <Button title={currentLocale === 'en' ? "Contact Us" : 'Contact'} href={paths.contact} toggleNav={toggleNav} />
                <div className="flex justify-center items-center gap-3" >
                  <button onClick={() => { setTheme(theme === 'light' ? "dark" : 'light'), toggleNav(false) }} ><Image src={modeSrc} alt="Light And Dark Mood Icons" width={20} height={21} /></button>
                  <button onClick={() => { changeLocale(currentLocale === 'en' ? "nl" : 'en'), toggleNav(false) }}><Image src={currentLocale === 'en' ? '../assets/icons/nl.svg' : '../assets/icons/en.svg'} alt="English And Dutch Flags" width={25} height={18} /></button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {miniNavMenu}

      </nav>
    </header >
  )
}

export default Header