'use client'

import React from 'react'

import { motion } from "framer-motion";
import { fadeIn, scrolltoHash } from "../../../../variants";
import ProjectsBtn from "../ProjectsBtn";
import ParticlesContainer from "../ParticlesContainer";
import { BsArrowDown } from "react-icons/bs";

const Landing = () => {
  return (
    <div className="  h-screen relative  " id="top">
				{/* text */}
				<div className="w-[90%] mx-auto flex pt-12 lg:pt-0 items-start relative h-full  md:flex md:items-center lg:flex">
					<div className="text-center flex flex-col justify-center bg-transparent md:bg-accent/50 lg:bg-transparent items-center xl:text-left  container mx-auto lg:w-1/2 order-2 lg:h-full z-50 ">
						{/* title */}
						<motion.h1
							variants={fadeIn("down", 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className=" text-[2rem] font-bold mb-4 lg:mb-0 lg:h2 "
						>
							Transforming Ideas <br /> Into{" "}
							<span className="text-accent">Digital Reality</span>
						</motion.h1>
						{/* Subtitle */}
						<motion.p
							variants={fadeIn("down", 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="w-full xl:max-w-xl lg:mx-auto xl:mx-0 mb-10 xl:mb-16   lg:px-4 text-justify py-2 "
						>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
							vel nostrum, totam minus distinctio autem quisquam repellendus
							modi atque rem.
						</motion.p>
						{/* btn */}
						<motion.div 
						variants={fadeIn("down", 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="flex justify-center xl:hidden relative ">
							<ProjectsBtn />
						</motion.div>
						<motion.div
							variants={fadeIn("down", 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className=" hidden xl:flex z-10"
						>
							<ProjectsBtn />
						</motion.div>
					</div>
					<div className=" w-1/2  lg:h-full z-50 lg:order-1 hidden lg:flex">
						<motion.img
							variants={fadeIn("up", 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							src="/banner1.png"
							alt=""
							className=" object-cover"
						/>
					</div>
					<ParticlesContainer />
					<div className=" absolute hidden md:block lg:hidden top-0 bottom-0 left-0 right-0">
						<motion.img
							variants={fadeIn("up", 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							src="/banner1.png"
							alt=""
							className=" object-cover"
						/>
					</div>
				</div>
				{/* image */}
				<div className=" w-[50%] h-full absolute left-40 bottom-0">
					{/* bg-image */}
					{/* <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg- xl:bg-no-repeat w-full h-full absolute  bg-accent/10 "></div> */}
					{/* particles */}
					{/* <ParticlesContainer /> */}
					{/* avatar img */}
					{/* <motion.div 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{duration: 1, ease: 'easeInOut'}}
        className=" w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] xl:right-[15%]">
          <Avatar/>
        </motion.div> */}
				</div>
				<motion.div 
				variants={fadeIn("down", 0.4)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className=" absolute left-[45%] lg:left-[50%] bottom-[20%] lg:bottom-[15%] z-50">
					<button onClick={() => scrolltoHash("team")}>
						<BsArrowDown className=" text-4xl" />
					</button>
				</motion.div>
			</div>
  )
}

export default Landing