import React from 'react'
import Button from '../Button'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white min-h-[240px] flex flex-col items-center">
      <Button name="Let's Talk" customClass="w-[347px] border-white text-white" />
      <div className="flex md:flex-row flex-col gap-[12px] items-center md:gap-[40px] py-[16px] font-[500] ">
        <a
          href="mailto:research4gai@gmailcom"
          target="_blank"
          rel="noreferrer"
          className="flex gap-[8px] flex justify-start items-center"
        >
          <img src="/email.svg" className="object-contain" />
          <p>research4gai@gmailcom</p>
        </a>
        <a
          href="tel:+351921462444"
          target="_blank"
          rel="noreferrer"
          className="flex gap-[8px] flex justify-start items-center"
        >
          <img src="/phone.svg" className="object-contain" />
          <p>+351921462444</p>
        </a>
        <a href="/" target="_blank" rel="noreferrer" className="flex gap-[8px] flex justify-start items-center">
          <img src="/linkedin.svg" className="object-contain" />
          <p>Genius AI</p>
        </a>
      </div>
    </footer>
  )
}

export default Footer