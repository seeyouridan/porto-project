// component
import NavItem from "./components/NavItem";
import InfiniteScroll from "./components/InfiniteScroll";

// images
import HeaderImg from "./assets/images/hero-image.jpg";
import Avatar from "./assets/images/about-image-dark.png";

// gif
import SchoolGif from "./assets/gif/school-animate-light.gif";

const linkCv =
	"https://drive.google.com/file/d/1mWOdy1WDvYnFW1coIC-HMehRo26dhD0L/view?usp=sharing";

function App() {
	return (
		<>
			<nav className="bg-[#121212]/30 text-[#edede4] fixed top-0 left-0 w-full z-999 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)] will-change-transform">
				<div className="flex justify-between items-center md:py-10 py-6 px-6 md:px-50">
					<a href="/">
						<img src="/Icon.png" className="h-7 rounded-2xl" alt="" />
					</a>

					<div className="hidden md:block">
						<NavItem />
					</div>

					<div className="md:hidden">
						<i className="fa-solid fa-bars text-xl"></i>
					</div>
				</div>
			</nav>

			<main>
				<header className="md:pt-27 pt-15" id="home">
					<div className="hero m-auto max-w-full pt-5 pb-5">
						<div className="gap-4 max-w-full relative w-full md:w-auto">
							<div className="md:h-72 md:w-6xl w-full h-48 overflow-hidden md:rounded-sm">
								<img
									src={HeaderImg}
									className="h-full w-full object-cover object-[center_48%] md:scale-125 scale-200"
									alt="header"
								/>
							</div>

							<div className="absolute left-1/2 -translate-x-1/2 -translate-y-30 hidden md:block">
								<h1 className="text-[140px] text-center w-full opacity-90 font-bold">
									INTRODUCTION
								</h1>
							</div>

							<div className="absolute left-1/2 -translate-x-1/2 -translate-y-20 md:hidden">
								<h1 className="text-[105px] text-center w-full opacity-90 font-extrabold">
									INTRO
								</h1>
							</div>

							<div className="w-full max-w-[320px] md:max-w-xl m-auto pt-15 md:pt-18 text-shadow-md text-shadow-white/50">
								<p className="font-[Montserrat] text-[12px] md:text-[16px] text-center">
									Information Technology graduate focusing on front-end
									development, building clean, responsive, and user-friendly web
									interfaces. Also experienced in basic video editing.
								</p>
							</div>
						</div>
					</div>

					<div className="about" id="about">
						<div className="md:flex block gap-2 py-10 max-w-7xl m-auto md:px-20 px-5">
							<div className="m-auto w-2xl">
								<h1 className="md:text-[28px] text-[24px] font-bold">
									Hi <span className="wave">👋</span>
								</h1>
								<h2 className="md:text-[28px] text-[14px] font-bold md:max-w-3xl max-w-sm">
									I am,{" "}
									<span className="text-[#edede4] md:text-[30px] text-[20px] text-shadow-md text-shadow-white/50">
										Muhammad Rafly Maulidan Nico Tenges
									</span>
								</h2>
								<br /> <hr className="w-15 py-1" />
								<p className="md:text-[14px] text-[12px] md:max-w-md max-w-xs leading-relaxed text-justify font-[Montserrat]">
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
					<div className="tech m-auto max-w-7xl px-4 sm:px-10 md:px-20 py-10">
						<h2 className="text-center pb-10 text-4xl font-bold text-shadow-md text-shadow-white/50">
							TOOLS & SKILLS
						</h2>
						<p className="w-full max-w-xl m-auto pb-4 font-[Montserrat]">
							Based on Learning :
						</p>
						<div className="overflow-hidden w-full max-w-xl m-auto flex scroll-fade">
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
										<p className="text-sm opacity-70">
											Informatics Engineering
										</p>
										<span className="text-xs opacity-50">2021 - 2025</span>
									</div>
								</div>
							</div>
						</div>
						<div className="w-xs m-auto">
							<img
								src={SchoolGif}
								alt="school-animate"
								className="float-right"
							/>
						</div>
					</div>
				</section>

				<div>
					<center>
						<h1 className="font-[Montserrat] text-lg font-bold text-shadow-md text-shadow-white/50">
							<span className="wave">🛠️</span> Work in Progress...
						</h1>
					</center>
				</div>
			</main>

			<footer className="footer sm:footer-horizontal footer-center p-4">
				<aside>
					<div className="text-[#edede4] opacity-35 font-xs font-[Montserrat] text-shadow-md text-shadow-white/50">
						<p>
							Copyright © {new Date().getFullYear()} Rafly. All rights reserved.
						</p>
						<p>
							Animated icons by{" "}
							<a
								href="https://lordicon.com"
								target="_blank"
								rel="noopener noreferrer"
								className="underline"
							>
								Lordicon
							</a>
						</p>
					</div>
				</aside>
			</footer>
		</>
	);
}

export default App;
