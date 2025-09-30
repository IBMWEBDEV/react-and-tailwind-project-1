import React from 'react'
import mapImg from "../../assets/map.png" 
import Container from '../Layouts/Container'
const Map = () => {
  return (
    <div>
      <div className='bg-[url()]py-[50px] bg-cover bg-no-repeat w-full md:py-[225px]" '></div>
        <div v className=" bg-[#F40404] py-[20px] md:py-[45px] border-b-4 border-[#FFB800">
          <Container>
            {/* <img src={mapImg} alt="" /> */}
          <div className="md:flex md:items-center md:justify-between font-poppins text-center px-5 md:px-0">
          <h3 className="font-bold font-popins text-[20px]   md:text-[36px] text-white">Want to join as member branch in your area?</h3>
        <button className="border-2 border-solid border-white text-white md:py-[14px] py-[7px] md:px-[32px] px-[16px]  mt-[15px] md:mt-0"><a href="">CONTACT</a></button>
        </div>
          </Container>
        </div>
    </div>
  )
}

export default Map