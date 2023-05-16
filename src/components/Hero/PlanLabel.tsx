import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { deselectPlan, selectPlan } from '../../redux/PlanSlice'

interface PlanLabelProps {
    id : string,
    tag ?: string,
    tagColor ?: string,
    title : string,
    price : string,
    permonth : string,
    expired ?: boolean
}

const PlanLabel : React.FC<PlanLabelProps> = ({id,tag,title,permonth,price, expired,tagColor}) => {

    const dispatch = useAppDispatch();

    const [selected, setSelected] = React.useState(false);

    const handleSelect = () => {
        if(selected){
            dispatch(deselectPlan());
        }else{
            dispatch(selectPlan({id,permonth}));
        }
    }

    const {plan} = useAppSelector(state => state);
    
    useEffect(()=> {
        if(plan.id === id){
            setSelected(true);
        }else{
            setSelected(false);
        }

        return () => {
            setSelected(false);
        }

    },[plan.id])


    return (
    <div
    onClick={handleSelect} 
    style={{backgroundColor : expired ? '#E7E7E7' : selected ? '#D7EDDD' : '#fff'}}
    className= {` ${ expired ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'} w-full active:scale-105 transition-all h-[50px] rounded-md border-[1.5px] ${selected ? 'border-[#47BA68]' : 'border-[#BEBEBE]'} relative flex flex-row items-center justify-between px-2 font-Roboto`}>

        {tag && <div className="absolute text-[9px] w-[100px] text-center font-Roboto text-[#fff] top-0 left-12 rounded-b-[5px]" style={{backgroundColor:tagColor}}>{tag}</div> }
        <div className='flex flex-row items-center gap-3'>
        {
            expired ? (
                <div>
                  <Icon icon="ph:radio-button-fill" fontSize={26} className={`${expired ? 'text-[#BEBEBE]' : 'text-black'}`}/>  
                </div>
            ) : 
            selected ? (
                <div>
                   <Icon icon="mdi:tick-circle" fontSize={26} className={`${selected ? 'text-[#47ba68]' : 'text-black'}`}/>
                </div>
            ) : 
            (
                <div>
                    <Icon icon="ic:outline-radio-button-unchecked" fontSize={26} className={`${selected ? 'text-[#47ba68]' : 'text-[#BEBEBE]'}`}/>
                </div>
            )
        }
        <p className={`font-normal ${expired ? 'text-[#BEBEBE]' : 'text-black'} text-[13px]`}>{title}</p>
        </div>
        <div className='flex flex-col items-end'>
            <p className={`font-medium ${expired ? 'text-[#BEBEBE]' : 'text-black'} flex flex-row gap-2 items-end text-sm`}><span className='text-[10px] font-normal'>Total </span>{price}</p>
            <p className={`font-light ${expired ? 'text-[#BEBEBE]' : 'text-black'} flex flex-row gap-2 items-center text-xs`}>{permonth} <span className='text-gray-400 text-[9px]'>/mo</span></p>
        </div>

    </div>
  )
}

export default PlanLabel