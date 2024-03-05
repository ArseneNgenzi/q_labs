import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

//Swiper classes
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

// icons
import {
	FaLinkedin,
	FaEnvelope,
} from "react-icons/fa";

//Swipper modules
import { Grid, Navigation, Pagination } from "swiper";

const teamData = [
		{
			image: "/dannyeli1.jpg",
			position: "Software Engineer",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli2.jpg",
			position: "CEO",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli1.jpg",
			position: "CTO",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli2.jpg",
			position: "Frontend Engineer Lead",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli1.jpg",
			position: "Backend Engineer",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli2.jpg",
			position: "Backend Engineer Lead",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli1.jpg",
			position: "Database Administrator",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli2.jpg",
			position: "Business Analyst",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli1.jpg",
			position: "DevOps Engineer",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
		{
			image: "/dannyeli2.jpg",
			position: "Product Manager",
			socials: [<FaLinkedin />, <FaEnvelope />],
		},
	]


const Testimonials = () => {
	return (
		<div className=" h-screen bg-secondary px-4" id="team">
		<div className=" flex items-center justify-center h-full">
			{/* <Circles /> */}
			<div className="container flex flex-col justify-center mx-auto lg:h-[60vh] xl:h-[70vh] ">
				<div className=" flex flex-col xl:items-center  xl:flex-row xl:justify-between  xl:px-8 gap-x-8 ">
					<div className=" text-center flex xl:w- flex-col xl:text-left items-center md:mb-4 lg:mb-12 xl:mb-0 ">
						<motion.h2
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="text-[2rem] font-bold lg:h2 xl:mt-12 flex   justify-center lg:justify-start"
						>
							Our{" "} <span className=" text-accent pl-2">team.</span>
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
						className=" w-full xl:max-w-[65%]"
					>
						{/* <WorkSlider /> */}

						<div className=" mt-8 flex items-center text-center h-full lg:h-[60vh] xl:h-[70vh]">
							<div className="w-full  lg:w-full h-full  flex items-center ">
								<Swiper
									navigation={true}
									slidesPerView={2}
									spaceBetween={20}
									grid={{
										rows: 2,
										fill: "row",
									}}
									pagination={{
										clickable: true,
									}}
									modules={[Navigation, Pagination, Grid]}
									className=" "
								>
									{teamData.map((employee, index) => (
										<SwiperSlide key={index} className=" ">
											<div className=" lg:px-16 pb-10 ">
												<div className=" flex flex-col items-center text-center">
													<div className=" relative flex justify-center items-center ">
														<img
															src={employee.image}
															alt=""
															className=" w-[100px] sm:w-[130px] md:w-[150px] lg:w-[200px] rounded-md"
														/>
														<div className=" flex absolute -bottom-4 bg-secondary/70 rounded-md">
															{employee.socials.map((social, index) => (
																<span className=" m-2 text-accent/70 cursor-pointer" key={index}>{social}</span>
															))}
														</div>
													</div>
													<div className=" mt-4">
														<p className=" font-semibold ">{employee.position}</p>
													</div>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			{/* <Bulb /> */}
		</div>
		</div>
	);
};

export default Testimonials;
