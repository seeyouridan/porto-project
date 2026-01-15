import { useState } from "react";

import NavItem from "./components/NavItem";
import Span from "./components/SpanHighlight";
import Icon from "./components/IconLink";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "#", label: "Project" },
	{ href: "#", label: "Contact" },
];

const span = [
	{ icon: "fa-react", label: "React.js", href: "https://react.dev/" },
	{ icon: "fa-css", label: "Tailwind CSS", href: "https://tailwindcss.com/" },
];

const icon = [
	{ icon: "fa-github", href: "https://github.com/seeyouridan" },
	{ icon: "fa-whatsapp", href: "https://wa.me/6288212797825" },
];

function App() {
	return (
		<>
			<nav className="bg-[#121212] text-[#edede4]">
				<div className="grid grid-cols-2 py-10 px-35">
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
						<div className="h-72 w-full max-w-6xl overflow-hidden rounded-sm">
							<img
								src="./img/header.jpg"
								className="h-full w-full object-cover object-[center_48%] scale-125"
								alt="header"
							/>
						</div>

						<div className="absolute translate-y-44">
							<h1 className="text-[150px] font-tall">INTRODUCTION</h1>
						</div>

						<div className="max-w-xl text-center text-md pt-18 opacity-90">
							<p>
								A Frontend Developer focused on building clean UI, responsive,
								and user-friendly web interfaces. Also experienced in graphic
								design and basic video editing.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4 pt-10 px-16">
						<div className="col-start-1 col-end-3">
							<span className="font-bold text-2xl">&nbsp;</span>
						</div>
					</div>
				</div>

				<div className="content -mt-30">
					<div className="grid grid-cols-2 gap-4 max-w-350 m-auto px-20">
						<div className="m-auto pt-20 w-2xl">
							<h2 className="text-[55px] font-bold text-base/13">
								MUHAMMAD RAFLY MAULIDAN NICO TENGES
							</h2>
							<br />
							<p className="text-sm opacity-90 max-w-xl leading-relaxed">
								A fresh graduate with a strong interest in frontend development.
								I build responsive web interfaces using <Span {...span[0]} />{" "}
								and <Span {...span[1]} />, focusing on clarity, usability, <br /> and
								visual balance across devices.
							</p>
						</div>
						<div className="col-end-4">
							<img
								src="./img/image-me.png"
								className="h-140 opacity-70"
								alt="image-me"
							/>
						</div>
					</div>
				</div>
			</header>

			<section>
				<div className="controller px-8 py-16 w-full bg-[#f6f6ee] text-[#121212]">
					<div className="heading font-custom text-center text-[70px]">
						<h1>EDUCATION BACKGROUND</h1>
					</div>
					<div className="relative max-w-6xl m-auto border border-[#121212]/30 rounded-md p-8 bg-white text-center px-12 py-10">
						<div className="absolute top-21.5 left-12 right-12 h-px bg-[#121212]"></div>

						<div className="grid grid-cols-2 gap-16 text-center">
							<div className="relative">
								<p className="font-semibold">2018 - 2021</p>

								<div className="absolute left-1/2 -translate-x-1/2 top-9.5 w-4 h-4 rounded-full bg-[#121212]"></div>

								<h3 className="font-bold text-lg mt-10">
									SMK NEGERI 1 CIANJUR
								</h3>
								<p className="italic text-sm mt-1">Software Engineering</p>
								<p className="text-sm mt-4 text-[#121212]/70">
									This final project creates a web-based public complaint system
									using Laravel, implementing the MVC architecture to create a
									well-structured, maintainable, and efficient application
								</p>
							</div>

							<div className="relative">
								<p className="font-semibold">2021 - 2025</p>

								<div className="absolute left-1/2 -translate-x-1/2 top-9.5 w-4 h-4 rounded-full bg-[#121212]"></div>

								<h3 className="font-bold text-lg mt-10">
									UNIVERSITAS SURYAKANCANA
								</h3>
								<p className="italic text-sm mt-1">Informatics Engineering</p>
								<p className="text-sm mt-4 text-[#121212]/70">
									This final project involves creates a Discord bot using
									Discord.js with a music player feature using Distube and a
									chatbot feature using the DeepSeek-R1 model
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer></footer>
		</>
	);
}

export default App;
