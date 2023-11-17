import Button from '@/components/Button'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-[90%] mx-auto min-h-[calc(100vh-150px)] flex md:flex-row flex-col justify-center items-center gap-[24px]">
      <div className="font-exo2 md:w-[45%] flex flex-col justify-center max-w-[416px] ml-auto order-last md:order-first">
        <h1 className=" text-[30px] md:text-[48px] font-[700] font-exo2 md:text-start text-center">At GeniusAI</h1>
        <p className="text-[16px] md:text-[18px] font-exo2 font-[500] mt-[16px] mb-[48px] md:text-start text-center">
          we specialize in creating cutting-edge Al solutions tailored to meet the unique needs of our clients. Our team
          of experts excels in developing innovative and effective Al systems that cover a wide range of applications,
          including Computer Vision (CV), Natural Language Processing (NLP), Large Language Models (LLMs), Explainable
          AI (XAI), Knowledge Graphs (KG), and many more.
        </p>
        <div className="flex gap-[20px] md:mx-0 mx-auto">
          <Button name="Services" customClass="bg-black text-white border-black" />
          <Button name="Clients" customClass="bg-black text-white border-black" />
        </div>
      </div>
      <img src="hero-image.svg" className="md:w-[55%]" />
    </div>
  )
}

export default Hero
