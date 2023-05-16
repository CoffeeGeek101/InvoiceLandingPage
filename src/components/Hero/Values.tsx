import Features from "./Features"
import {motion} from 'framer-motion'

const Values = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1, ease: 'easeInOut'}}}
    className="w-auto h-auto py-5 flex flex-col gap-10 items-center lg:items-start z-10">
        <div className="flex flex-col gap-2">
            <p className="text-[#fff] font-normal text-3xl lg:text-[45px]">Access curated courses worth</p>
            <div className="text-[#fff] font-normal text-3xl lg:text-[45px] flex flex-row gap-4 flex-nowrap whitespace-nowrap">
                <span className="relative">
                    <p className="font-sans font-medium">₹ 18,500</p>
                    <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0, transition: {duration: 0.5, ease: 'easeInOut', delay: 0.5}}}
                    className="absolute z-20 h-[3px] lg:h-[6px] w-[100px] lg:w-[140px] bg-[#FF0000] top-[19px] left-[27px] lg:left-[42px]"></motion.div>
                </span>
                <p>at just </p>
                <span className="font-sans font-medium text-[#0096FF]"> ₹ 99</span>
                <p>per year!</p>
            </div>
        </div>
        <div
        className="flex flex-row lg:flex-col gap-8 items-start">
           <Features icon="images/icon.png" stringToColor="100+" title="100+ Job relevant courses" />
           <Features icon="images/icontwo.png" stringToColor="20,000+" title="20,000+ Hours of content" />
           <Features icon="images/iconthree.png" stringToColor="Exclusive" title="Exclusive webinar access" />
           <Features icon="images/iconfour.png" stringToColor="₹94,500" title="Scholarship worth ₹94,500" />
           <Features icon="images/iconfive.png" stringToColor="Ad Free" title="Ad Free learning experience" />
        </div>
    </motion.div>
  )
}

export default Values

