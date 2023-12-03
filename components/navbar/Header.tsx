'use client'

import { paths } from "@/config";
import { useChangeLocale, useCurrentLocale } from "@locales/client"
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { Button } from "@components/button";
import { usePathname } from "next/navigation";


const Header = () => {

  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  const { theme, setTheme } = useTheme()
  const pathName = usePathname()
  const currentPathName = pathName.split('/')[1] === 'nl' ? !pathName.split('/')[2] ? '/' : `/${pathName.split('/')[2]}` : pathName

  const [openNav, setOpenNav] = useState(false)
  const [logoSrc, setLogoSrc] = useState('../assets/Logo.svg');
  const [modeSrc, setModeSrc] = useState('../assets/icons/moon.svg')
  const [themeColor, setThemeColor] = useState('#19191A')

  const navScroll = () => {
    if (!openNav) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  const toggleNav = (status?: boolean) => {
    if (typeof status === 'undefined') {
      setOpenNav(!openNav)
      navScroll()
    }
  }

  useLayoutEffect(() => {
    setLogoSrc(theme === 'light' ? '../assets/Logo.svg' : '../assets/LogoDark.svg');
    setModeSrc(theme === 'light' ? '../assets/icons/moon.svg' : '../assets/icons/sun.svg')
    setThemeColor(theme === 'light' ? "#19191A" : "#F9FFFF")
  }, [theme]);

  const toggleButton = (
    <div className="flex justify-center items-center lg:hidden gap-2">
      <button className="flex text-gray-500 w-10 h-10 relative focus:outline-none" onClick={() => toggleNav()} title="menu">
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div style={{ position: 'relative', width: '34px', height: '34px' }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', transition: 'opacity 0.5s', opacity: openNav ? 0 : 1 }}>
              <path d="M28.334 7.08325L11.334 7.08325" stroke={themeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.334 17L5.66732 17" stroke={themeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28.334 26.9165L17.0007 26.9165" stroke={themeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', transition: 'opacity 0.5s', transform: openNav ? 'rotate(90deg)' : 'rotate(90deg)', opacity: openNav ? 1 : 0 }}>
              <path d="M22.9596 6.04199L6.04297 22.9587" stroke={themeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.04297 6.04199L22.9596 22.9587" stroke={themeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  )

  const miniNavMenu = (
    <div className={`${openNav ? 'block relative opacity-100 ' : ' opacity-0 hidden '} delay-75 transition-opacity duration-500 lg:hidden p-3 pt-5 min-h-screen`}>
      <div className="flex flex-col justify-center items-center gap-5 md:gap-10 font-medium text-xl">
        <Link href={paths.home} onClick={() => toggleNav()} >Home</Link>
        <Link href={paths.about} onClick={() => toggleNav()} >About Us</Link>
        <Link href={paths.services} onClick={() => toggleNav()} >Services</Link>
        <Button title="Contact Us" href={paths.contact} toggleNav={() => toggleNav()} />
        <div className="flex gap-6 justify-center items-center ">
          <button onClick={() => { setTheme(theme === 'light' ? "dark" : 'light'), toggleNav() }} ><Image src={modeSrc} alt="Light And Dark Mood Icons" width={20} height={21} /></button>
          <button onClick={() => { changeLocale(currentLocale === 'en' ? "nl" : 'en'), toggleNav() }}><Image src={currentLocale === 'en' ? '../assets/icons/nl.svg' : '../assets/icons/en.svg'} alt="English And Dutch Flags" width={25} height={18} /></button>
        </div>
      </div>
    </div>
  )



  return (
    <header>
      <nav className="w-full m-0 sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between py-4">

            <div className="flex justify-center items-center gap-12" >
              <Link href={paths.home} className="lg:flex justify-center items-center gap-5">
                <Image src={logoSrc} alt="Sodecx Logo" width={26} height={50} />
                <h1 className="hidden lg:flex text-2xl font-medium" >Sodecx</h1>
              </Link>
              <Image src={'../assets/icons/line.svg'} className="hidden lg:flex" alt="Line" width={50} height={13} />
            </div>

            <hr className={`${openNav ? 'opacity-0 delay-75' : 'opacity-100'} -z-20  transition-opacity duration-500 absolute bg-gradient w-[295px] h-[295px]  rounded-[295px] lg:w-[389px] lg:h-[389px] lg:rounded-[389px] xl:w-[519px] xl:h-[519px] xl:rounded-[519px] -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />

            {toggleButton}

            <div className="hidden lg:flex items-center justify-between w-2/3">
              <div className="flex items-center justify-between  w-1/2 text-[#19191A]">
                <Link href={paths.home} className="relative" >Home<span className={` ${currentPathName !== paths.home ? "hidden" : ""} absolute -bottom-1 left-1/2 w-1 h-1 bg-[#19191A] rounded-full `} /></Link>
                <Link href={paths.about} className="relative" >About Us<span className={` ${currentPathName !== paths.about ? "hidden" : ""} absolute -bottom-1 left-1/2 w-1 h-1 bg-[#19191A] rounded-full `} /></Link>
                <Link href={paths.services} className="relative" >Services<span className={` ${currentPathName !== paths.services ? "hidden" : ""} absolute -bottom-1 left-1/2 w-1 h-1 bg-[#19191A] rounded-full `} /></Link>
              </div>
              <div className="flex justify-center items-center gap-2" >
                <Button title="Contact Us" href={paths.contact} toggleNav={toggleNav} />
                <div className="flex justify-center items-center gap-3" >
                  <button onClick={() => { setTheme(theme === 'light' ? "dark" : 'light'), toggleNav(false) }} ><Image src={modeSrc} alt="Light And Dark Mood Icons" width={20} height={21} /></button>
                  <button onClick={() => { changeLocale(currentLocale === 'en' ? "nl" : 'en'), toggleNav() }}><Image src={currentLocale === 'en' ? '../assets/icons/nl.svg' : '../assets/icons/en.svg'} alt="English And Dutch Flags" width={25} height={18} /></button>
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