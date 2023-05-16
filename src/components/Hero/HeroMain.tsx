import PackageSelector from "./PackageSelector"
import Values from "./Values"

const HeroMain = () => {
  return (
    <div className="w-[full] h-auto bg-slate-950 flex flex-col items-center lg:items-start md:flex-col lg:flex-row justify-between px-16 lg:px-24 py-10 relative overflow-x-hidden">
      <div className="w-[1200px] h-[800px] bg-gradient-radial to-slate-950 to-80% from-[#5a7dfecd] blur-xl opacity-40 from-1% absolute right-[-230px] top-[-100px]"></div>
      <Values/>
      <PackageSelector/>
    </div>
  )
}

export default HeroMain





// bg-gradient-radial to-slate-950 to-80% from-[#97adff89] from-1%