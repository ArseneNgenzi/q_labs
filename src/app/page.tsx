'use client' 
import Team from "./components/main/Team";
import Nav from "./components/main/Nav";

// Components
import Landing from "./components/main/Landing";
import Services from "./components/main/Services";
import Work from "./components/main/Work";
import About from "./components/main/About";
import Contact from "./components/main/Contact";


export default function Home() {
	

	return (
		<div className=" text-gray-400">
			{/* HOME */}

			<Landing />

			{/* Services */}

			<Services />

			{/* Work */}

			<Work/>

			{/* About */}

			<About/>

			{/* TEAM */}

				<Team />

			{/* CONTACT */}
			
			<Contact />

			{/* NAV */}

			<div>
				<Nav />
			</div>
		</div>
	);
}
