import React from 'react'
import Container from '../Layouts/Container'
import logo from"../../assets/logo.png"
import Flex from '../Layouts/Flex'
const Navbar = () => {
  return <div className='bg-[#F40404] py-[30px]'>
    <Container>
       <div className='flex justify-between items-center'>
        <div>
            <img src={logo} alt="" />
        </div>
       <div> 
         <Flex className='items-center space-x-[47px] font-primary font-semibol text-white  list-none'>
           <li><a href="">Home</a></li>
           <li><a href="">About</a></li>
           <li><a href="">Services</a></li>
           <li><a href="">Gallery</a></li>
           <li><a href="">Blog</a></li>
           
           <li className='border-2 py-[13px] px-[32px]'><a href="">CONTACT</a></li>
           </Flex>
       </div>
       </div>
    </Container>
  </div>
}

export default Navbar
