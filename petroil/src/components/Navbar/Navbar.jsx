import React, { useState } from 'react'
import Container from '../Layouts/Container'
import logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [show,setShow] = useState (false)
  return <div className='bg-[#F40404] py-[30px]'>
    <Container>
      <div className='md:flex justify-between items-center'>
        <div className='md:block hidden'>
          <img src={logo} alt="" />
        </div>
        <div>
          <div className='md:flex items-center  justify-between space-x-[47px] font-primary font-semibol text-white  list-none hidden '>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Blog</a></li>

            <li className='border-2 py-[13px] px-[32px]'><a href="">CONTACT</a></li>
          </div>
        </div>


    <div className='flex items-center justify-between'>
          <div className='md:hidden block'>
          <img src={logo} alt="" />
        </div>
<div className=''>
  
        {
          show ? <div className='md:hidden block items-center space-x-[47px] font-primary  font-semibol text-white absolute top-[220px] left-0 z-10 bg-green-600 w-full list-none py-8'>
          <ul className='ml-5 '>
            <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Blog</a></li>

          <li className='border-2 py-[7px] w-fit px-[32px]'><a href="">CONTACT</a></li>
          </ul>
        </div> : ""
        }

        {
         show ?  <RxCross2 onClick={()=> setShow(!show)} className='text-2xl text-white'/> : <FaBars onClick={()=> setShow(!show)} className='text-2xl text-white'/>
        }
</div>
    </div>

      </div>
    </Container>
  </div>
}

export default Navbar
