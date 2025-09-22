import sliderOne from "../../assets/sliderOne.png";
import sliderTwo from "../../assets/sliderTwo.png";
import sliderThree from "../../assets/sliderThree.png";
import sliderFour from "../../assets/sliderFour.png";
import Flex from "../Layouts/Flex";


const Slider = () => {var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Flex className="justify-between gap-x-[5px] ">
      
         <img className="w-[24%] " src={sliderOne} alt="" />
         <img className="w-[24%]" src={sliderTwo} alt="" />
         <img className="w-[24%] " src={sliderThree} alt="" />
         <img className="W-[24%] " src={sliderFour} alt="" />
   
    </Flex>
  )
}
export default Slider 