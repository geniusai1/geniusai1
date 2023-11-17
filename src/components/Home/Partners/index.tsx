import React from 'react'

const partners = [
  '/logos/jbs.png',
  '/logos/aritex.png',
  '/logos/experian.png',
  '/logos/bot-supply.png',
  '/logos/tif.png',
  '/logos/data-robot.png',
  '/logos/quacks.png',
]

const Partners = () => {
  return (
    <div className="w-full min-h-[783px] bg-[url('/bg-partners.svg')] bg-no-repeat flex flex-col pt-[127px] pb-[49px] mb-[16px] sm:bg-right bg-cover">
      <div className="w-[90%] max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <h1 className=" text-[24px] md:text-[40px] font-[600] mb-2">Our Work Partners</h1>
        <div className="h-max bg-white/90 flex flex-wrap justify-center gap-8 shadow-[inset_0px_0px_40px_rgba(0,0,0,0.2)] rounded border-[2px] border-black ">
          {partners.map((partner, index) => {
            return (
              <div key={index} className="w-max h-max flex justify-center items-center">
                <img src={partner} className="object-contain w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
              </div>
            )
          })}
        </div>
      </div>
      <div className="md:w-[50%] md:mt-8 mt-4 px-4 md:px-0 max-w-[840px] mx-auto mt-auto flex justify-center h-[56px] bg-black text-white rounded-[8px] items-center gap-[10px] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)]">
        <h1 className="font-exo2 font-[700]">Engineering Partner </h1>
        <img src="/phyniks.svg" className="object-contain" />
      </div>
    </div>
  )
}

export default Partners
