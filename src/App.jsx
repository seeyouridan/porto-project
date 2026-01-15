import { useState } from "react";

import NavItem from "./components/NavItem";
import Span from "./components/SpanHighlight";
import Icon from "./components/IconLink";

const navItems = [
	{ href: "#", label: "Home" },
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
				<div className="grid grid-cols-2 py-10 px-35 m-auto">
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

						<div className="absolute translate-y-48">
							<h1 className="text-[125px] font-custom tracking-tighter">
								INTRODUCTION
							</h1>
						</div>

						<div className="max-w-md text-center text-sm pt-20 opacity-90">
							<p>
								A Frontend Developer focused on building clean UI, responsive,
								and user-friendly web interfaces
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
								I am a fresh graduate focusing on Frontend Development with
								experience building responsive web interfaces using{" "}
								<Span {...span[0]} /> and <Span {...span[1]} />. I enjoy
								creating clean, user-friendly designs and continuously improving
								my skills through hands-on projects.
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

			<section></section>

			<footer></footer>
		</>
	);
}

export default App;
