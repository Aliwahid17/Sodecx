import Image from 'next/image'
import Heptagon from './Heptagon'
import Triangle from './Triangle'
import ComplexHexagon  from './ComplexHexagon'
import HalfPentagon from './HalfPentagon'

const HeroDecor = () => {
    return (
        <div>
            <Image className='absolute right-0 top-0 hidden lg:block' src={'../assets/decors/line.svg'} alt='Line' width={96} height={417} />
            <div className='absolute right-[10%] top-10'>
                <Heptagon />
            </div>
            <div className='absolute top-20 left-[30%]' >
                <Triangle />
            </div>
            <div className='absolute left-0 top-1/2 hidden sm:block'>
                <ComplexHexagon />
            </div>
            <div className='absolute left-0 top-10 '>
                <HalfPentagon />
            </div>
        </div>
    )
}

export default HeroDecor