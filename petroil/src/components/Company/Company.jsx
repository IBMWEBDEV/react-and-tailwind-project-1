import React from 'react'
import Container from '../Layouts/Container'
import company from"../../assets/company.png"
const Company = () => {
  return (
    <div>
       <Container>

        


        <div className="flex">
          <div className="bg-[#F40404] w-full text-center h-full text-white font-poppins font-bold md:text-[36px]">
            <h4 className="md:w-[262px] md:text-center py-[20px] md:py-[100px] md:ml-[74px]">
              Learn more about our company.
            </h4>
          </div>
          <div>
            <div className=" relative py-[50px]  md:py-[132px] md:px-[282px] w-full md:w-full bg-no-repeat bg-cover ">
            <button className=" bg-white font-bold transition duration-500  flex m-auto px-[20px] md:py-3 py-2  ">
              LEARN MORE
            </button>
          </div>
          </div>
        </div>
       </Container>
    </div>
  )
}

export default Company