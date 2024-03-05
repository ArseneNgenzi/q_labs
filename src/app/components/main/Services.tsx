'use client'

import React from 'react'

import { motion } from "framer-motion";
import { fadeIn, scrolltoHash } from "../../../../variants";
import ServiceSlider from '../ServiceSlider';
import {
	RxArrowTopRight, RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket
  } from "react-icons/rx";


//   Data

const serviceData = [
	{
	  icon: <RxCrop />,
	  title: 'Branding',
	  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
	  icon: <RxPencil2 />,
	  title: 'Design',
	  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
	  icon: <RxDesktop />,
	  title: 'Development',
	  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
	  icon: <RxReader />,
	  title: 'Copywriting',
	  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
	  icon: <RxRocket />,
	  title: 'SEO',
	  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
  ];

const Services = () => {
  return (
    <div>
			{/* BIG SCREENS */}
			<div className=" mt-8 hidden xl:flex items-center px-4 " id="services">
				{/* <Circles /> */}
				<div className="container mx-auto flex flex-col justify-center  ">
					<div className=" flex flex-col lg:flex-row lg:items-center gap-x-8 px-4">
						<div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
							<motion.h2
								variants={fadeIn("up", 0.3)}
								initial="hidden"
								animate="show"
								exit="hidden"
								className="text-[2rem] font-bold mb-8 lg:mb-0 lg:h2 xl:mt-8 flex   justify-center lg:justify-start"
							>
								Our <span className=" text-accent pl-2"> services.</span>
							</motion.h2>
							<motion.p
								variants={fadeIn("up", 0.4)}
								initial="hidden"
								animate="show"
								exit="hidden"
								className=" mb-4 max-w-[400px] mx-auto lg:mx-0"
							>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores iste ex tempora aut quia itaque.
							</motion.p>
						</div>
						<motion.div
							variants={fadeIn("down", 0.6)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className=" w-full xl:max-w-[65%] "
						>
							<ServiceSlider />
						</motion.div>
					</div>
				</div>
				{/* <Bulb /> */}
			</div>


			{/* SMALL SCREENS */}

			<div className="h-auto block  xl:hidden bg-secondary/30 sm:px-4 " id="services">
				<div className="  ">
					{/* <Circles /> */}
					<div className="container mx-auto h-full">
						<div className="  gap-x-8  flex flex-col items-center  pb-12  h-full">
							<div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 lg:mb-8 items-center">
								<motion.h2
									variants={fadeIn("up", 0.3)}
									initial="hidden"
									animate="show"
									exit="hidden"
									className=" text-[2rem] font-bold my-8 lg:my-0 lg:h2 xl:mt-12 flex   justify-center lg:justify-start"
								>
									<span className=" text-accent pr-2">Our</span> services.
								</motion.h2>
								<motion.p
									variants={fadeIn("up", 0.4)}
									initial="hidden"
									animate="show"
									exit="hidden"
									className=" mb-4 max-w-[400px] mx-auto lg:mx-0 text-center"
								>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Asperiores iste ex tempora aut quia itaque.
								</motion.p>
							</div>
							<motion.div
								variants={fadeIn("down", 0.6)}
								initial="hidden"
								animate="show"
								exit="hidden"
								className=" w-full   pb-10 h-full px-8"
							>
								{/* <WorkSlider /> */}
								<div className=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{serviceData.map((item, index) => {
          return (
            // <SwiperSlide key={index}>
              <div key={index} className=" bg-secondary  h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-secondary/40 transition-all duration-300">
                <div className=" text-4xl text-accent mb-4">{item.icon}</div>
                <div className=" mb-8">
                  <div className=" mb-2 text-lg">{item.title}</div>
                  <div className=" max-w-[350px] leading-normal text-gray-400">{item.description}</div>
                </div>
                {/* <div className=" text-3xl">
                  <RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div> */}
              </div>
            // </SwiperSlide>
          )
        })}
								</div>
							</motion.div>
						</div>
					</div>
					{/* <Bulb /> */}
				</div>
			</div>




				
			</div>
  )
}

export default Services