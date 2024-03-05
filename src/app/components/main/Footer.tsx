'use client'
import React from "react";
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
  
  let yearr = new Date().getFullYear()

	return (
		<div className=" flex flex-col md:flex-row justify-between items-center pt-8 pb-16 lg:pb-8 px-4 md:px-8 lg:px-0">
			<div className=" flex items-center">
				<h1 className="text-[1.5rem] font-bold mb-4 lg:mb-0 lg:text-[3rem] mr-8">
					Q-<span className=" text-secondary">Labs</span>
				</h1>
				<div className=" border-l border-secondary/20 pl-8  text-sm md:py-4">
					<div className=" flex items-center justify-between mb-2 text-secondary/70  font-semibold">
						<button onClick={() => scrolltoHash('about')} className="hover:text-secondary">About</button>
						<button onClick={() => scrolltoHash('services')} className="hover:text-secondary">Services</button>
						<button onClick={() => scrolltoHash('work')} className="hover:text-secondary">Work</button>
						<button onClick={() => scrolltoHash('team')} className="hover:text-secondary">Team</button>
					</div>
					<div>
						<p className=" text-xs">&copy; Q-Labs { yearr }. All rights reserved.</p>
					</div>
				</div>
			</div>
			<div className=" text-sm hidden md:block">
				<div className="flex items-center gap-x-5 text-lg mb-2">
					<Link
						href={""}
						className=" hover:text-secondary transition-all duration-300"
					>
						<RiLinkedinLine />
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
				{/* <span>Email:</span>  */}
        <div className=" flex flex-col">
		<Link href={""} className=" text-secondary font-semibold">+250 788 888 888</Link>
        <Link href={""} className=" text-secondary font-semibold">yahruuuuzo@gmail.com</Link>
		</div>
			</div>
		</div>
	);
};

export default Footer;
