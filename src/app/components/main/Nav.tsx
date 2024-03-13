// icons
import {
	HiHome,
	HiEnvelope,
	HiUsers,
	HiBookOpen,
	HiBriefcase,
	HiWrenchScrewdriver,
} from "react-icons/hi2";

import { scrolltoHash } from "../../../../variants";

// nav data
export const navData = [
	{ name: "home", path: "top", icon: <HiHome /> },
	{ name: "services", path: "services", icon: <HiWrenchScrewdriver/> },
	{ name: "about", path: "about", icon: <HiBookOpen /> },
	{ name: "work", path: "work", icon: <HiBriefcase /> },
	{
		name: "team",
		path: "team",
		icon: <HiUsers />,
	},
	{ name: "contact", path: "contact", icon: <HiEnvelope /> },
];


const Nav = () => {

	// const router = useRouter()
	// const pathname = router.pathname

	return (
		<nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max  mt-auto xl:right-[1%] z-50 bottom-0 w-full xl:w-10 xl:max-w-md xl:h-screen">
			{/* Inner */}
			<div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-4 xl:px-0 h-auto xl:h-max py-4 bg-black/70 xl:bg-black/50 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
				{navData.map((link, index) => {
					return (
						<button 
							key={index}  
							className={`   relative flex items-center group hover:text-accent transition-all duration-300` }
							onClick={() => scrolltoHash(link.path)}
						>
							
							{/* tooltip */}
							<div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
								<div className="bg-white relative flex text-primary items-center p-[6px] rounded-[4px] leading-none font-semibold capitalize">
								<div className="text-[12px]">{link.name}</div>
								{/* triangle */}
								<div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
								</div>
							</div>
							{/* icon */}
							<div className=" text-[18px] xl:text-base">{link.icon}</div>
						</button>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
