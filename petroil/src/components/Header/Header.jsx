
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import Container from '../Layouts/Container';
const Header = () => {
  return (
  <div className=' bg-[#282828] border-b-2 border-[#FFB800]'>
    <Container>
        <div className='w-[1144px] mx-auto font-primary py-[15px] text-white'>
      <div className='md:flex justify-between'>
          <div className='md:flex space-x-[49px]'>
            <div className='flex items-center space-x-[5px]'>
                <IoMailUnreadOutline size={20} />
            <p className='text-[12px]'>mail@yourcompany.com</p>
            </div>
            <div className="relative after:content-[''] after:absolute after:top-1 after:left-[-27px] py-2 md:py-0 after:h-[16px] after:w-[2px] after:bg-red-500 flex items-center space-x-[5px]">
                <MdPhoneInTalk size={20} />
            <p className='text-[12px]'>+896 120 5889 (Toll free)</p>
            </div>
          </div>
        <div>
            <div className='flex space-x-[19px] py-2 md:py-0'>
                <FaFacebookF size={16}/>
                <FaTwitter size={16}/>
                <FaLinkedinIn size={16}/>
                <FaInstagram size={16}/>
            </div>
        </div>
      </div>
    
    </div>
    </Container>
      
  </div>
    
  )
}

export default Header