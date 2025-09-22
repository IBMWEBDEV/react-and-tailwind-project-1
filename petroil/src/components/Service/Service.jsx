import React from 'react'
// import service from "../../assets/service1.png";

const Service = () => {
  return (
    <div className='pt-[28px]'>
        <div className='flex items-center'>
            <div className='w-[50%]'>
               <div className='flex justify-end mr-[60px]'>
                <div>
                 <h3 className='font-bold text-[64px]'>Our Services</h3>
                <p className='w-[405px] font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
               </div>
               </div>
            </div>
            <div className='w-[50%]'>
               <div className='z-[1] relative bg-[url(./assets/service1.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px]'
  >
    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60 '>{" "}
    </div> 
  <div className='ml-[116px]'>
    <h1 className=' font-primary text-[36px] font-bold  text-white'>Modern natural oil and gas refineries.{" "}

  </h1>
  <button className='py-[13px] px-[40px] bg-[#F40404]  text -white font-semibold mt-[31px]'>LEARN MORE</button>
  </div>
 
    
   
  </div> 
            </div>
        </div>
        <div className='flex'>
                     <div className='w-[50%]'>
               <div className='z-[1] relative bg-[url(./assets/service2.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px]'
  >
    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60 '>{" "}
    </div> 
  <div className='ml-[116px]'>
    <h1 className=' font-primary text-[36px] font-bold text-white'>Supply of national industries.{" "}

  </h1>
  <button className='py-[13px] px-[40px] bg-[#F40404] text -white font-semibold mt-[31px]'>LEARN MORE</button>
  </div>
 
    
   
  </div> 
            </div>
                     <div className='w-[50%]'>
               <div className='z-[1] relative bg-[url(./assets/service3.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px]'
  >
    <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60 '>{" "}
    </div> 
  <div className='ml-[116px]'>
    <h1 className=' font-primary text-[36px] font-bold text-white'>National fuel distribution and supply.{" "}

  </h1>
  <button className='py-[13px] px-[40px] bg-[#F40404] text -white font-semibold mt-[31px]'>LEARN MORE</button>
  </div>
 
    
   
  </div> 
            </div>
        </div>
    </div>
  )
}

export default Service