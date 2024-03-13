'use client' 
import Team from "./components/main/Team";
import Nav from "./components/main/Nav";

// Components
import Landing from "./components/main/Landing";
import Services from "./components/main/Services";
import Work from "./components/main/Work";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import { Suspense } from "react";


export default function Home() {
	

	return (
		<Suspense fallback={'Loading...'}>
		<div className=" text-gray-400">
			{/* HOME */}

			<Landing />

			{/* Services */}

			<Services />

			{/* About */}

			<About/>

			{/* Work */}

			<Work/>

			{/* TEAM */}

				<Team />

			{/* CONTACT */}
			
			<Contact />

			{/* NAV */}

			<div>
				<Nav />
			</div>
		</div>
		</Suspense>
	);
}
