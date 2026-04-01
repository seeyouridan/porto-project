// import { useState } from "react";

// component
import NavItem from "./components/NavItem";

// images
import HeaderImg from "./assets/images/header.jpg";
import Avatar from "./assets/images/image-me3.png";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "#", label: "About" },
	{ href: "#", label: "Project" },
	{ href: "#", label: "Contact" },
];

function App() {
	return (
		<>
			<nav className="bg-[#121212] text-[#edede4]">
				<div className="grid grid-cols-2 py-10 px-50">
					<img src="/Icon.png" className="h-7 rounded-2xl" alt="" />
					<div className="col-end-4">
						<ul className="flex gap-6 text-sm font-medium">
							{navItems.map((item) => (
								<NavItem key={item.href} href={item.href} label={item.label} />
							))}
						</ul>
					</div>
				</div>
			</nav>

			<header className="bg-[#121212] text-[#edede4]">
				<div className="hero m-auto max-w-full pt-5 pb-5">
					<div className="flex flex-col items-center gap-4">
						<div className="h-72 w-6xl overflow-hidden rounded-sm">
							<img
								src={HeaderImg}
								className="h-full w-full object-cover object-[center_48%] scale-125"
								alt="header"
							/>
						</div>

						<div className="absolute translate-y-44">
							<h1 className="text-[150px] opacity-80 font-tall">
								INTRODUCTION
							</h1>
						</div>

						<div className="max-w-xl text-center text-md pt-18 text-shadow-md text-shadow-white/50">
							<p>
								Information Technology graduate focusing on front-end
								development, building clean, responsive, and user-friendly web
								interfaces. Also experienced in basic video editing.
							</p>
						</div>
					</div>
				</div>

				<div className="content -mt-20">
					<div className="grid grid-cols-2 gap-2 pt-20 pb-10 max-w-7xl m-auto px-20">
						<div className="m-auto w-2xl">
							<h1 className="text-[28px] font-bold">
								Hi <span className="wave">👋</span>
							</h1>
							<h2 className="text-[28px] font-bold text-base/13">
								I am{" "}
								<span className="text-white text-[30px] text-shadow-md text-shadow-white/50">
									Muhammad Rafly Maulidan Nico Tenges
								</span>
							</h2>
							<br /> <hr className="w-15 py-1" />
							<p className="text-md max-w-md leading-relaxed text-justify">
								I'm passionate about building high-quality, responsive web
								interfaces focused on delivering seamless user experiences,
								clean design, and optimal performance across all devices.
							</p>
							<br />
							<a
								href="https://drive.google.com/file/d/1OkFwXgMW1Q4mmLP749UJxpkIIEzsioTa/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="btn">
									Download CV <i className="fa fa-solid fa-file"></i>
								</button>
							</a>
						</div>

						<div className="col-end-4 opacity-75">
							<img src={Avatar} className="h-120" alt="image-me" />
						</div>
					</div>
				</div>
			</header>

			<section>
				<div className="tech"></div>
			</section>

			<footer></footer>
		</>
	);
}

export default App;
