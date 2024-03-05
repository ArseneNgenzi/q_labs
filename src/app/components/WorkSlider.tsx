import Image from "next/image";


// icons
import {
  BsArrowRight,

} from "react-icons/bs";

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination } from "swiper";



const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper  
    // breakpoints={{
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 15
    //   },
    //   646: {
    //     slidesPerView: 2,
    //     spaceBetween: 15,
    //   }
    // }}
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[ Pagination]}
    className=" h-[280px] sm:h-auto pb-12 w-full"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-4 cursor-pointer pb-12 w-full">
              {slide.images.map((image, index) => (
                <div className=" relative rounded-lg overflow-hidden flex items-center justify-center group " key={index}>
                  <div className=" flex items-center justify-center relative overflow-hidden group">
                    <Image src={image.path} width={500} height={300} alt=''/>
                    <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-accent to-secondary opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
                    <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-700">
                      <div className=" flex items-center gap-x-2  text-[13px] tracking-[0.2em]">
                        <div className=" delay-100">OPEN</div>
                        <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300">PROJECT</div>
                        <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-500"><BsArrowRight/></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
