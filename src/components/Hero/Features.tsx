import React from 'react'

interface FeaturesProps {
    icon : string,
    stringToColor : string,
    title : string
}

const Features : React.FC<FeaturesProps> = ({icon,stringToColor,title}) => {
    
    const coloring_the_string = (stringToColor : string, title : string) => {

        const index = title.indexOf(stringToColor);
        const firstPart = title.slice(0, index);
        const secondPart = title.slice(index + stringToColor.length);
        return (
            <p>
                {firstPart}
                <span className="text-blue-500 font-sans font-medium">{stringToColor}</span>
                {secondPart}
            </p>
        )
    
    }

    const text = coloring_the_string(stringToColor,title);
    
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10'>
        <img src={icon} className='w-[28px] h-[29px] lg:w-[48px] lg:h-[48px]'/>
        <div className='text-[#fff] text-xs lg:text-2xl text-center'>{text}</div>
    </div>
  )
}

export default Features