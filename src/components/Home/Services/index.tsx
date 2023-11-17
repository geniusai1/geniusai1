import React from 'react'

const Services = () => {
  return (
    <div className="mt-[81px] w-[90%] max-w-[1000px] mx-auto">
      <h1 className="text-[24px] md:text-[40px] font-[600] mb-[12px]">What We Offer</h1>
      <p className="max-w-[570px]">
        GeniusAI can accompany your entire AI/ML lifecycle. We provide 4 unique packages that can be mixed and combined.
      </p>
      <div className="grid md:grid-cols-4 mt-[82px] w-full gap-x-[24px] gap-y-[50px]">
        <div className="flex flex-col">
          <img src="/assessment.svg" className="object-contain h-[330px]" />
          <h1 className="font-[600] text-[24px] mt-[18px] mb-[12px] text-center md:text-start">AI Assessment</h1>
          <p className="text-[16px] font-[400] text-center md:text-start">
            Quickly estimate the state of your AI in your organization and the potential business impact of working with
            TensorOps
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/consult.svg" className="object-contain h-[330px]" />
          <h1 className="font-[600] text-[23px] mt-[18px] mb-[12px] text-center md:text-start">Consult</h1>
          <p className="text-[16px] font-[400] text-center md:text-start">
            Get access to our trusted advisors for consulting sessions whether they are one-offs or ongoing
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/ai-project.svg" className="object-contain h-[330px]" />
          <h1 className="font-[600] text-[23px] mt-[18px] mb-[12px] text-center md:text-start">AI Project</h1>
          <p className="text-[16px] font-[400] text-center md:text-start">
            Trust our combination of AI experts and project managers to deliver end-to-end projects
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/stuff.svg" className="object-contain h-[330px] rounded-[10px]" />
          <h1 className="font-[600] text-[23px] mt-[18px] mb-[12px] text-center md:text-start">Staff Augmentation</h1>
          <p className="text-[16px] font-[400] text-center md:text-start">
            Extend your existing team with AI experts for a defined period of time
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
