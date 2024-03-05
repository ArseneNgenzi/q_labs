"use client";

import React from "react";
import { fadeIn } from "../../../../variants";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { ContactSchema } from "../../../../ContactSchema";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Contact = () => {
	return (
		<div className=" h-screen flex bg-secondary/70 px-4 lg:px-0" id="contact">
			<div className=" container mx-auto  text-center xl:text-left flex items-center justify-center ">
				<div className=" flex flex-col w-full max-w-[700px] ">
					<motion.h2
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-[2rem] lg:h2 text-center mb-6"
					>
						Get in <span className=" text-accent pl-2">touch.</span>
					</motion.h2>

					<Formik
						initialValues={{
							name: "",
							email: "",
							subject: "",
							message: "",
						}}
						validationSchema={ContactSchema}
						onSubmit={(values: any) => {
							console.log(values);
						}}
					>
						<Form className=" flex-1 flex flex-col gap-4 w-full mx-auto">
							<div className=" flex justify-between gap-x-4 w-full">
								<div className=" flex-1">
									<Field
										type="text"
										name="name"
										placeholder="name"
										className="input "
									/>
									<ErrorMessage
										component="a"
										name="name"
										className=" text-accent text-xs"
									/>
								</div>

								<div className=" flex-1">
									<Field
										type="text"
										name="email"
										placeholder="email"
										className="input "
									/>
									<ErrorMessage
										component="a"
										name="email"
										className=" text-accent text-xs"
									/>
								</div>
							</div>
							<div>
								<Field
									type="text"
									name="subject"
									placeholder="subject"
									className="input"
								/>
								<ErrorMessage
									component="a"
									name="subject"
									className=" text-accent text-xs"
								/>
							</div>
							<div>
								<Field
									as="textarea"
									name="message"
									placeholder="message"
									className=" textarea"
								/>
								<ErrorMessage
									component="a"
									name="message"
									className=" text-accent text-xs"
								/>
							</div>
							<input
								type="submit"
								value={"Send"}
								className=" btn rounded-full hover:cursor-pointer hover:text-accent border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
							/>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Contact;
