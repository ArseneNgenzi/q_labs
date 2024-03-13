'use client'

import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { fadeIn } from '../../../../variants';
import { FaCss3, FaFigma, FaHtml5, FaJava, FaJs, FaNode, FaPython, FaReact } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd, SiNextdotjs } from 'react-icons/si';
import CountUp from "react-countup";
import TestimonialSlider from '../TestimonialSlider';

const aboutData = [
	{
		title: "Core values",
		info: [
			{
				title: "Web Development - ABC University, LA, CA",
				stage: "2011",
			},
			{
				title: "Computer Science Diploma - AV Technical Institute",
				stage: "2009",
			},
			{
				title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
				stage: "2006",
			},
		],
	},
	{
		title: "Technologies",
		info: [
			{
				title: "Web Development",
				icons: [
					<FaHtml5 key="" />,
					<FaCss3 key="" />,
					<FaJs key="" />,
					<FaReact key="" />,
					<SiNextdotjs key="" />,
					<FaJava key="" />,
					<FaPython key="" />,
					<FaNode key="" />,
				],
			},
			{
				title: "UI/UX Design",
				icons: [
					<FaFigma key="" />,
					<SiAdobexd key="" />,
					<SiAdobephotoshop key="" />,
				],
			},
		],
	},

	
];

const About = () => {

    const [index, setIndex] = useState(0);

  return (
    <div
				className=" h-auto xl:h-screen bg-secondary  pb-8 px-4"
				id="about"
			>
				<div className="  text-center xl:text-left h-full flex flex-col ">
					{/* <Circles /> */}
					{/* Avatar img */}
					{/* <motion.div
				className=" hidden xl:flex absolute bottom-0 -left-[370px]"
				variants={fadeIn("right")}
				initial="hidden"
				animate="show"
				exit="hidden"
			>
				<Avatar />
			</motion.div> */}
					<div className=" flex flex-col items-center justify-center">
						<motion.h2
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className=" text-[2rem] font-bold my-8 lg:my-0 lg:h2 xl:mt-12 flex   justify-center lg:justify-start"
						>
							<span className=" text-accent pr-2">About</span> us.
						</motion.h2>
						<motion.p
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className=" mb-4 max-w-[400px] mx-auto lg:mx-0 text-center"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dignissimos recusandae ducimus odio mollitia, corrupti a quasi
							minima commodi earum, neque ipsa obcaecati suscipit ea
							necessitatibus?
						</motion.p>
					</div>
					<div className=" container mx-auto  flex flex-col lg:flex-row items-center justify-center gap-x-6 flex-1 py-4">
						<div className="  flex flex-col justify-center items-center w-full lg:w-1/2 lg:border-r lg:border-accent/30">
							<motion.h2
								className=" text-[1.5rem] md:text-[2rem] lg:text-5xl text-center mb-8  font-bold"
								variants={fadeIn("up", 0.2)}
								initial="hidden"
								animate="show"
								exit="hidden"
							>
								Creating data driven{" "}
								<span className=" text-accent">designs </span>
							</motion.h2>
							{/* <motion.p
						className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
						variants={fadeIn("down", 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						10 years ago, I began freelancing as a developer. Since then,
						I&apos;ve done remote work for agencies, consulted for startups, and
						collaborated on digital products for business and consumer use.
					</motion.p> */}
							{/* counters */}
							<motion.div
								className=" flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
								variants={fadeIn("right", 0.6)}
								initial="hidden"
								animate="show"
								exit="hidden"
							>
								<div className=" flex flex-1 xl:gap-x-6">
									{/* experience counts */}
									<div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/30 after:absolute after:top-0 after:right-0">
										<div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
											<CountUp start={0} end={10} duration={5} />+
										</div>
										<div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold">
											Years of Experience
										</div>
									</div>
									{/* Clients counts */}
									<div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/30 after:absolute after:top-0 after:right-0">
										<div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
											<CountUp start={0} end={250} duration={5} />+
										</div>
										<div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold">
											Satisfied clients
										</div>
									</div>
									{/* Projects Counts */}
									<div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/30 after:absolute after:top-0 after:right-0">
										<div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
											<CountUp start={0} end={650} duration={5} />+
										</div>
										<div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold">
											Finished projects
										</div>
									</div>
									{/* Awards */}
									<div className=" relative flex-1  after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
										<div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
											<CountUp start={0} end={8} duration={5} />+
										</div>
										<div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold">
											Winning awards
										</div>
									</div>
								</div>
							</motion.div>
						</div>
						<motion.div
							className=" flex flex-col lg:w-1/2 items-center justify-center "
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
						>
							<div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-8">
								{aboutData.map((item, itemIndex) => {
									return (
										<div
											key={itemIndex}
											className={` ${
												index === itemIndex &&
												"text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 font-[900]"
											} cursor-pointer uppercase text-xs md:text-sm lg:text-base font-semibold xl:text-lg relative after:w-8 after:h-[2px]  after:bg-accent after:absolute after:-bottom-1 after:left-0`}
											onClick={() => setIndex(itemIndex)}
										>
											{item.title}
										</div>
									);
								})}
							</div>
							<div className="  py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-center  w-full ">
								{/* {index !== 2 ? ( */}
								<div className=" ">
									{aboutData[index].info.map((item, itemIndex) => (
										<div
											key={itemIndex}
											className="  flex text-center flex-col md:flex-row max-w-max gap-x-2 items-center "
										>
											{/* Title */}
											<div className=" font-light mb-4 md:mb-0">
												{item.title}
											</div>
											<div className=" hidden md:flex">-</div>
											<div className="">{item.stage}</div>
											<div className=" flex gap-x-4">
												{/* icons */}
												{item.icons?.map((icon, iconIndex) => {
													return (
														<div
															key={iconIndex}
															className=" text-2xl "
														>
															{icon}
														</div>
													);
												})}
											</div>
										</div>
									))}
								</div>
								{/* ) : (
							<div className=" w-full">
								<TestimonialSlider/>
							</div>
							

							
						)} */}
							</div>
						</motion.div>
					</div>
					<motion.div
						className=" w-full"
						variants={fadeIn("up", 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						<h1 className=' text-[2rem] lg:text-[3rem] py-8 text-accent/50 uppercase text-center'>Testimonials</h1>
						<TestimonialSlider />
					</motion.div>
				</div>
			</div>
  )
}

export default About