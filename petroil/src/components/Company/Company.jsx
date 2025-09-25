import React from 'react'
import Container from '../Layouts/Container'
import company from"../../assets/company.png"
const Company = () => {
  return (
    <div>
       <Container>

        


        <div className="flex justify-between">
          <div className="bg-red-500 w-[413px] h-[361px] flex items-center justify-center p-[35px]">
            <h2 className="font-primary text-[36px] font-bold text-white text-center">
              Learn more about our company.
            </h2>
          </div>
          <div>
            
            <div className='relative bg-[url(".")] py-[50px] px-[100px] md:py-[132px] md:px-[282px] w-fit md:w-full bg-no-repeat bg-cover'>
           <img src={company} alt="" />
        </div>
          </div>
        </div>
       </Container>
    </div>
  )
}

export default Company