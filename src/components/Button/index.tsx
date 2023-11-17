import React from 'react'
import styles from './Button.module.css'
type IButton = {
  name: string
  customClass?: string
  onClick?: () => void
}

const Button = ({ name, customClass, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={` rounded-[8px] border-[2px] ${customClass} font-open border-[2px] border-[#D4D4D4] h-[44px] lg:h-[44px] my-auto px-[24px] lg:px-[32px] text-[14px] lg:text-[16px] leading-[24px] font-exo2`}
    >
      <p>{name}</p>
    </button>
  )
}

export default Button
