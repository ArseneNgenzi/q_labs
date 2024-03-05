'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../../../../variants'
import Link from 'next/link';
import { RxArrowTopRight } from 'react-icons/rx';


// Data

const workSlides = {
	slides: [
		{
			title: "Yahruuzo",
			path: "/thumb1.jpg",
			href: "https://www.google.com/",
		},
		{
			title: "Mubi Cyane",
			path: "/thumb2.jpg",
			href: "https://www.google.com/",
		},
		{
			title: "Pussy ass nigga",
			path: "/thumb3.jpg",
			href: "https://www.google.com/",
		},
		{
			title: "Methode",
			path: "/thumb4.jpg",
			href: "https://www.google.com/",
		},
		{
			title: "Akabi",
			path: "/thumb1.jpg",
			href: "https://www.google.com/",
		},
		{
			title: "Mu rw'intare",
			path: "/thumb2.jpg",
			href: "https://www.google.com/",
		},
		{
			title: "Gatsata",
			path: "/thumb3.jpg",
			href: "https://www.google.com/",
		},
		{
			title: "Karongi",
			path: "/thumb4.jpg",
			href: "https://www.google.com/",
		},
	],
};

const Work = () => {
  return (
    <div className="h-auto lg:h-screen bg-secondary xl:px-4 " id="work">
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
									<span className=" text-accent pr-2">Our</span> work.
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
									{workSlides.slides.map((slide, index) => (
										<div className=" relative group rounded-md" key={index}>
											<img src={slide.path} className=" rounded-md h-[280px] object-cover" />
											<div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 top-0 flex flex-col justify-center items-center text-xl bg-secondary/90 text-accent font-semibold ">
												<p>{slide.title}</p>
												<Link
													href={slide.href}
													target="_blank"
													className=" flex items-center text-white"
												>
													<span className=" text-xs">Open project</span>
													<span className=" ml-2">
														<RxArrowTopRight className="group-hover:rotate-45 transition-all duration-300 text-sm" />
													</span>
												</Link>
											</div>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</div>
					{/* <Bulb /> */}
				</div>
			</div>
  )
}

export default Work