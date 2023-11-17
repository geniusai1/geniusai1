import React from 'react'

const Experts = () => {
  return (
    <div className="md:flex md:mt-[154px] mt-[80px] w-[90%] max-w-[1000px] mx-auto justify-start gap-[80px] mb-[120px] md:mb-[162px]">
      <img src="/experts.svg" className="object-contain md:ml-[-47px] mb-4 md:mb-0" />
      <div className="flex flex-col justify-center items-start gap-[19px]">
        <h1 className="md:text-[40px] text-[24px] font-[600]">From ML experts to ML experts</h1>
        <p>With highly skilled professionals, we augment existing teams or set up new ones for quick success.</p>
      </div>
    </div>
  )
}

export default Experts