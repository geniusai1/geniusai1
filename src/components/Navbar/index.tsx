import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button'
import { Link as ScrollLink } from 'react-scroll'

const NavItems = [
  {
    title: 'Home',
    link: '/?to=services',
    query: 'services',
  },
  {
    title: 'Services',
    link: '/case-study',
    query: '',
  },
  {
    title: 'Team',
    link: '/',
    query: '',
  },
  {
    title: 'Ai Blog',
    link: '/',
    query: '',
  },
  {
    title: 'Content',
    link: '/',
    query: '',
  },
]

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div className=" lg:px-0 px-[20px] font-exo2 sticky md:static top-0 lg:py-[0px] z-50 bg-white">
      <nav className="flex lg:w-[90%] mx-auto flex-wrap items-center justify-between w-full md:py-0 text-gray-700">
        <>
          <div className="lg:pl-0 md:pl-0 z-50  py-[15px] ">
            <Link href="/">
              <img src="/logo.svg" alt="Phyniks AI Logo" className="object-contain h-[34px] my-auto" />
            </Link>
          </div>
          <div className="ml-auto md:flex hidden w-max justify-center items-center gap-[12px] mr-[24px] ">
            {NavItems.map((item, index) => {
              return (
                <ScrollLink key={index} to="" href={item.link} className="px-2 text-[16px] font-exo2">
                  {item.title}
                </ScrollLink>
              )
            })}
          </div>
          <div className="md:flex hidden flex-col justify-center h-full ">
            <Button name="Let's Talk" customClass="my-auto border-black text-black bg-primary" />
          </div>
          <div
            className="md:hidden flex flex-col justify-center gap-[5px] z-50 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            {!isNavOpen ? (
              <>
                <span className="block h-0.5 w-6 bg-black"></span>
                <span className="block h-0.5 w-6 bg-black"></span>
                <span className="block h-0.5 w-6 bg-black"></span>
              </>
            ) : (
              <span className="text-black w-6 text-center font-[900] text-[24px]">X</span>
            )}
          </div>
        </>
        <div
          className={`fixed ${
            isNavOpen ? 'mt-0' : 'mt-[-100vh]'
          } bg-white min-h-[100vh] w-screen left-0 top-0 transition-all duration-700 ease-in-out`}
        >
          <div className="flex flex-col w-max justify-center items-center gap-[12px] mx-auto mt-[100px]">
            {NavItems.map((item, index) => {
              return (
                <ScrollLink key={index} to="" href={item.link} className="px-2 text-[16px] font-exo2">
                  {item.title}
                </ScrollLink>
              )
            })}
          </div>
          <div className="flex flex-col justify-center h-full w-[90%] mx-auto mt-12 ">
            <Button name="Let's Talk" customClass="my-auto border-black text-black bg-primary" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
