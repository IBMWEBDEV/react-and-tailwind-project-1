import React from 'react'
import Container from '../Layouts/Container'

const Banner = () => {
  return ( 
  <div className='z-[1] relative bg-[url(./assets/banner.png)] bg-no-repeat bg-cover bg-center
  md:py-[257px] py-[50px]'
  >
    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60 '>{" "}
    </div>
 <Container> 
  <h1 className=' w-[842px]font-primary md:text-[64px] text-[30px] font-bold text-white'>We exist since 1975 on the oil and gas industry.{" "}

  </h1>
  <button className='py-[13px] md:px-[40px] px-[20px] bg-[#F40404] text-white font-semibold mt-[31px]'>LEARN MORE</button>
 </Container>
    
   
  </div>
  )
}

export default Banner 
 