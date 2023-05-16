import { Icon } from "@iconify/react/dist/iconify.js"
import PlanLabel from "./PlanLabel"
import { useAppSelector } from "../../redux/store";
import {motion} from 'framer-motion'

const PackageSelector = () => {

    const {plan} = useAppSelector(state => state);

    const plan_price = parseInt(plan.permonth.split('').filter((item) => item !== '₹' && item !== ' ').join(''));

    // 99 is dicounted price + 17 is 18% GST for 99 + plan_price is the monthly price of the plan
    const discounted_price = (99 + 17 + plan_price);

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 1, ease: 'easeInOut' ,delay:0.5}}}
    className="z-20">
        <div className="w-[430px] h-[670px] bg-[#fff] rounded-md flex flex-col gap-2">
            
            <div className="w-full h-auto flex flex-row justify-between px-[102px] pt-5 items-center">
                <div className="flex flex-col items-center gap-1">
                    <p className="py-1 px-[13px] bg-[#0096FF] rounded-full font-sans text-[#fff] font-semibold text-md">1</p>
                    <p className="text-sm font-sans font-light">Sign Up</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <p className="py-1 px-[12px] bg-[#0096FF] rounded-full font-sans text-[#fff] font-semibold text-md">2</p>
                    <p className="text-sm font-sans font-light">Subscribe</p>
                </div>
            </div>

            <p className="text-center font-sans font-medium text-[18px] pb-2">Select your subcription plan</p>

            <div className="flex flex-col w-full px-6 pb-7 gap-[17px] font-Roboto">

                <div className="flex flex-col w-full gap-3">
                    <PlanLabel id="1" tag="Offer expired" tagColor="#F77171" title="12 Months Subscription" price="₹ 99" permonth="₹ 8" expired={true} />
                    <PlanLabel id="2" tag="Recommended" tagColor="#47ba68" title="12 Months Subscription" price="₹ 179" permonth="₹ 15" />
                    <PlanLabel id="3" title="6 Months Subscription" price="₹ 149" permonth="₹ 25" />
                    <PlanLabel id="4" title="3 Months Subscription" price="₹ 99" permonth="₹ 33" />
                </div>

                <hr style={{height:'2px'}} className="bg-[#64646433]"/>

                <div className="flex flex-col gap-2 mt-[-4px]">

                    <div className="flex flex-row justify-between w-full items-center px-5">
                        <p className="font-light text-sm">Subscription Fee</p>
                        <p className="text-sm">₹18,500</p>
                    </div>

                    <div className="w-full bg-gradient-to-br from-[#DE4313] to-[#FEC163] p-[2px] rounded-md ">
                        <div className="w-full h-[60px] bg-[#ffffffc7] rounded-[4px] flex flex-col py-2 px-4 gap-[4px]">
                            <div className="w-full flex flex-row justify-between items-center">
                                <p className="text-sm text-[#DE4313] font-medium">Limited time offer</p>
                                <p className="text-sm"> - ₹18,401 </p>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <Icon icon="mdi:clock-alert-outline" fontSize={18} color="#DE4313"/>
                                <p className="text-xs font-extralight text-[#DE4313]">Offer valid till 25th March 2023 </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between w-full items-center px-5">
                        <p className="font-light text-sm"><span className="font-medium">Total</span> (Incl. of 18&#37; GST)</p>
                        <p className="text-xl font-semibold">₹{discounted_price}</p>
                    </div>

                    <div className="flex flex-row justify-between w-full gap-2 mt-[20px]">
                        <button className="w-full border-2 p-3 text-xs font-medium rounded-md border-[#DE4313] text-[#DE4313] active:scale-95">CANCEL</button>
                        <button className="w-full border-2 text-xs font-medium rounded-md border-[#47BA68] bg-[#47BA68] text-[#fff] active:scale-95">PROCEED TO PAY</button>
                    </div>

                    <img src="images/razorpay.png" className="w-[100px] mt-[15px]"/>

                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default PackageSelector