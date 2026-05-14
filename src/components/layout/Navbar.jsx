import { useState } from "react";

import NavItem from "@/components/ui/NavItem";

const links = [
	{ name: "Home", path: "#home" },
	{ name: "About", path: "#about" },
	{ name: "Project", path: "#project" },
	{ name: "Contact", path: "#contact" },
];

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className="bg-[#121212]/30 text-[#edede4] font-[Montserrat] fixed top-0 left-0 w-full z-999 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)] will-change-transform">
				<div className="flex justify-between items-center md:py-15 py-10 px-6 md:px-50">
					<a href="/">
						<img src="/Icon.png" className="md:h-10 h-8 rounded-full" alt="icon" />
					</a>

					<div className="hidden md:block">
						<NavItem />
					</div>

					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-2xl"
					>
						{isOpen ? (
							<i className="fa-solid fa-xmark"></i>
						) : (
							<i className="fa-solid fa-bars"></i>
						)}
					</button>
				</div>

				<div
					className={`md:hidden overflow-hidden z-20 transition-all duration-700 ease-in-out
						${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
				>
					<ul className="flex flex-col items-center gap-6 py-6 bg-[#121212]/30 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
						{links.map((link, index) => {
							return (
								<li key={index}>
									<a href={link.path} onClick={() => setIsOpen(false)}>
										{link.name}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
