import { Icon } from '@iconify/react';
import { useState } from 'react';
import {motion} from 'framer-motion'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <motion.div
    initial={{y: -40}}
    animate={{y: 0, transition: {duration: 0.5, ease: 'easeInOut'}}}
    className="w-full border-b-[1px] h-[55px] flex flex-row justify-between bg-white px-[20px] lg:px-[80px] py-[24px] items-center">
       
        <div className='flex flex-row basis-auto items-center gap-[64px] relative'>
            <div className={` ${open ? 'flex' : 'hidden'} flex-col py-3 gap-2 absolute rounded-lg bg-white/10 backdrop-blur-xl h-[160px] w-[130px] bottom-[-160px] shadow-xl z-40`}>
              <p className='text-white hover:bg-[#1f1f1f8e] py-2 text-center cursor-pointer'>Courses</p>
              <p className='text-white hover:bg-[#1f1f1f8e] py-2 text-center cursor-pointer'>Programs</p>
              <p className='text-white hover:bg-[#1f1f1f8e] py-2 text-center cursor-pointer'>Login</p>
            </div>
            <p
            onClick={() => setOpen(!open)}
            className='font-[800] text-xl lg:text-3xl bg-clip-text cursor-pointer text-transparent bg-gradient-to-l from-[#0048FF] to-[#0096FF]'>EDYODA</p>
            <div className='hidden lg:flex flex-row items-center gap-4'>
                <p>Courses</p>
                <Icon icon="material-symbols:keyboard-arrow-down" className='mt-[2.5px]' />
            </div>
            <div className='hidden lg:flex flex-row items-center gap-4'>
                <p>Programs</p>
                <Icon icon="material-symbols:keyboard-arrow-down" className='mt-[2.5px]'/>
            </div>

        </div>

        <div className='flex flex-row basis-auto justify-end items-center gap-10 lg:gap-[64px]'>
        <Icon icon="material-symbols:search" className='text-2xl'/>
        <p className='text-base hover:cursor-pointer hidden lg:block'>Login</p>
        <button
        className='active:scale-95 w-[146px] h-[35px] py-[4px] px-[2px] bg-blue-500 rounded-full bg-gradient-to-l from-[#0048FF] to-[#0096FF] text-white font-[500] text-sm'
        >JOIN NOW</button>
        </div>
    </motion.div>
  )
}

export default Navbar