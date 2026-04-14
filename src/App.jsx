// import { useState } from "react";

// component
import NavItem from "./components/NavItem";
import InfiniteScroll from "./components/InfiniteScroll";

// images
import HeaderImg from "./assets/images/hero-image.jpg";
import Avatar from "./assets/images/about-image-dark.png";

// gif
import SchoolGif from "./assets/gif/school-animate-light.gif";

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#project", label: "Project" },
	{ href: "#contact", label: "Contact" },
];

const linkCv =
	"https://drive.google.com/file/d/1OkFwXgMW1Q4mmLP749UJxpkIIEzsioTa/view?usp=sharing";

function App() {
	return (
		<>
			<nav className="bg-[#121212]/30 text-[#edede4] fixed top-0 left-0 w-full z-50">
				<div className="grid grid-cols-2 py-10 px-50">
					<a href="/">
						<img src="/Icon.png" className="h-7 rounded-2xl" alt="" />
					</a>
					<div className="col-end-4">
						<ul className="flex gap-6 text-sm font-medium font-[Montserrat]">
							{navItems.map((item) => (
								<NavItem key={item.href} href={item.href} label={item.label} />
							))}
						</ul>
					</div>
				</div>
			</nav>

			<header className="bg-[#121212] text-[#edede4] pt-27" id="home">
				<div className="hero m-auto max-w-full pt-5 pb-5">
					<div className="flex flex-col items-center gap-4">
						<div className="h-72 w-6xl overflow-hidden rounded-sm">
							<img
								src={HeaderImg}
								className="h-full w-full object-cover object-[center_48%] scale-125"
								alt="header"
							/>
						</div>

						<div className="absolute translate-y-45">
							<h1 className="text-[140px] opacity-90 font-bold">
								INTRODUCTION
							</h1>
						</div>

						<div className="max-w-xl text-center text-md pt-18 text-shadow-md text-shadow-white/50">
							<p className="font-[Montserrat]">
								Information Technology graduate focusing on front-end
								development, building clean, responsive, and user-friendly web
								interfaces. Also experienced in basic video editing.
							</p>
						</div>
					</div>
				</div>

				<div className="about" id="about">
					<div className="grid grid-cols-2 gap-2 py-10 max-w-7xl m-auto px-20">
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
							<p className="text-md max-w-md leading-relaxed text-justify font-[Montserrat]">
								I'm particularly interested in front-end development,
								specifically building responsive, clean, and user-friendly
								website interfaces across devices.
							</p>
							<br />
							<a href={linkCv} target="_blank" rel="noopener noreferrer">
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
				<div className="tech m-auto max-w-7xl px-20 py-10">
					<h2 className="text-center pb-10 text-4xl font-bold text-shadow-md text-shadow-white/50">
						TOOLS & SKILLS
					</h2>
					<p className="w-full max-w-xl m-auto pb-4 font-[Montserrat]">
						Based on Learning :
					</p>
					<div className="overflow-hidden w-full max-w-xl m-auto flex">
						<InfiniteScroll />
					</div>
				</div>

				<br />

				<div className="education grid grid-cols-2 gap-2 py-10 pb-10 max-w-6xl m-auto px-20">
					<div className="m-auto w-md">
						<h2 className="pb-6 text-6xl font-bold text-shadow-md text-shadow-white/50">
							EDUCATIONS
						</h2>
						<div className="school-grade font-[Montserrat]">
							<div className="flex gap-2 pt-4">
								<div className="badge h-10">
									<i className="fa-solid fa-graduation-cap m-1"></i>
								</div>
								<div>
									<h3 className="text-lg font-semibold">
										SMK Negeri 1 Cianjur
									</h3>
									<p className="text-sm opacity-70">Software Engineering</p>
									<span className="text-xs opacity-50">2019 - 2021</span>
								</div>
							</div>
							<div className="flex gap-2 pt-4">
								<div className="badge h-10">
									<i className="fa-solid fa-graduation-cap m-1"></i>
								</div>
								<div>
									<h3 className="text-lg font-semibold">
										Suryakancana University
									</h3>
									<p className="text-sm opacity-70">Informatics Engineering</p>
									<span className="text-xs opacity-50">2021 - 2025</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-xs m-auto">
						<img src={SchoolGif} alt="school-animate" className="float-right" />
					</div>
				</div>
			</section>

			<footer></footer>
		</>
	);
}

export default App;
