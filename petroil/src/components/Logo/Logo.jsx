import React from 'react'
import Container from '../Layouts/Container'
// import Flex from '../Layouts/Flex'
import pe from '../../assets/pe.png'
import th from '../../assets/th.png'
import ba from '../../assets/ba.png'
import bi from '../../assets/bi.png'
const Logo = () => {
  return (
    <div>
        <Container>
            <div>
                <div className=" md:flex md:gap-[26px] ">
          <img className="w-[150px] h-[50px] ml-30 " src={pe} alt="" />
          <img className="w-[150px] h-[50px] ml-30 mt-5" src={th} alt="" />
          <img className="w-[150px] h-[50px] ml-30 mt-5" src={ba} alt="" />
          <img className="w-[150px] h-[50px] ml-30 mt-5" src={bi} alt="" />
        </div>
            </div>
        </Container>
    </div>
  )
}

export default Logo