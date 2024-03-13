"use client";
import React, { useState, useEffect } from "react";
import Socials from "../Socials";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import Link from "next/link";
import { scrolltoHash } from "../../../../variants";
import {
	RiFacebookLine,
	RiInstagramLine,
	RiLinkedinLine,
	RiMailLine,
	RiTwitterLine,
} from "react-icons/ri";

const Footer = () => {

	const [windowSize, setWindowSize] = useState(
		{
			width: typeof window !== 'undefined' ? window.innerWidth : 0,
		}
	)


	useEffect(() => {
		const handleResize = () => {
		  setWindowSize({
			width: window.innerWidth,
		  });
		  console.log(windowSize);
		};
	
		// event listener to window resize
		window.addEventListener('resize', handleResize);
	
		// Remove event listener on component unmount
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	  }, [windowSize]); 


	let yearr = new Date().getFullYear();

	return (
		<div className="pb-12 xl:pb-0">
			<div className=" flex flex-col sm:flex-row justify-center items-center pt-8 pb-6  px-4 md:px-8 lg:px-0">
				<div className=" flex  items-center  w-1/2 sm:border-r sm:border-secondary/50">
					<div className="  w-full flex flex-col items-center">
						<h1 className=" text-[2rem] sm:text-[2rem] font-bold mb-2 lg:mb-0 lg:text-[3rem] ">
							Q-<span className=" text-secondary">Labs</span>
						</h1>
						<div className="flex items-center gap-x-[0.6rem] sm:gap-x-4 text-sm mb-3">
							<Link
								href={""}
								className=" hover:text-secondary transition-all duration-300"
							>
								<RiLinkedinLine />
							</Link>
							<Link
								href={""}
								className=" hover:text-accent transition-all duration-300"
							>
								<RiMailLine />
							</Link>
							<Link
								href={""}
								className=" hover:text-secondary transition-all duration-300"
							>
								<RiTwitterLine />
							</Link>
							<Link
								href={""}
								className=" hover:text-secondary transition-all duration-300"
							>
								<RiInstagramLine />
							</Link>
							<Link
								href={""}
								className=" hover:text-secondary transition-all duration-300"
							>
								<RiFacebookLine />
							</Link>
						</div>
					</div>
					{/* <div className=" border-l border-secondary/20 pl-2 sm:pl-8  text-sm md:py-4">
				<Link href={""} className=" text-secondary font-semibold">
						+250 788 888 888
					</Link>
					
					<div>
						<p className=" text-xs text-secondary">
							&copy; Q-Labs {yearr}. All rights reserved.
						</p>
					</div>
				</div> */}
				</div>
				{/* <div className=" text-sm hidden sm:block "> */}
				<div className=" flex flex-col items-center w-1/2">
					<div className="hidden sm:flex  items-center justify-start mb-2 text-secondary  text-sm font-semibold">
						<button
							onClick={() => scrolltoHash("about")}
							className="hover:text-secondary mr-4"
						>
							About
						</button>
						<button
							onClick={() => scrolltoHash(windowSize.width < 1280 ? 'Sservices' : 'Bservices')}
							className="hover:text-secondary mr-4"
						>
							Services
						</button>
						<button
							onClick={() => scrolltoHash("work")}
							className="hover:text-secondary mr-4"
						>
							Work
						</button>
						<button
							onClick={() => scrolltoHash("team")}
							className="hover:text-secondary mr-4"
						>
							Team
						</button>
					</div>
					<Link href={""} className=" text-secondary font-semibold text-sm mb-2">
						+250 788 888 888
					</Link>
					<Link href={""} className=" text-white/70  font-semibold text-sm">
						yahruuuuzo@gmail.com
					</Link>
				</div>
				{/* </div> */}
			</div>
			<div className=" flex justify-center border-t border-accent/50 pb-6 pt-4">
				<p className=" text-xs text-white/70 ">
					&copy; Q-Labs {yearr}. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
