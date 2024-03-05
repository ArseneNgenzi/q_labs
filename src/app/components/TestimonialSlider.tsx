'use client'

import Image from "next/image";
// icons
import {
  FaQuoteLeft,

} from "react-icons/fa";

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from "swiper";


const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
  },
];
 
const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation={true}
    pagination={{
      clickable: true,
      
    }}
    modules={[Navigation, Pagination]}
    className=" h-auto  lg:w-[50%] text-gray-400 "
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index} className="">
            <div className=" flex flex-col items-center h-auto   pb-10 ">
              {/* avatar, name, position */}
              <div className=" w-full max-w-[300px] flex flex-col items-center relative mx-auto xl:mx-0 ">
                <div className=" flex items-center justify-center text-center mb-6 font-bold">
                  {/* avatar */}
                  <div className=" ">
                    <Image src={person.image} width={50} height={100} alt="" />
                  </div>
                  <div className=" ml-4">
                    {/* name */}
                  <div className=" text-lg">{person.name}</div>
                  {/* position */}
                  <div className=" text-[12px] uppercase text-accent">{person.position}</div>
                  </div>
                </div>
              </div>
              {/* quote and msg */}
              <div className="  flex-1 flex flex-col justify-center  xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* <div className=" mb-4">
                  <FaQuoteLeft className=" text-2xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
                </div> */}
                <div className=" text-sm  text-center md:text-left px-12">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
