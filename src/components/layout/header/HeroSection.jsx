import HeaderImg from "@/assets/images/hero-image.jpg";

function HeroSection() {
	return (
		<>
			<div className="hero m-auto max-w-full py-10">
				<div className="gap-4 max-w-full relative w-full md:w-auto">
					<div className="md:h-72 lg:w-6xl md:w-4xl w-full h-48 overflow-hidden md:rounded-sm">
						<img
							src={HeaderImg}
							className="h-full w-full object-cover object-[center_48%] md:scale-125 scale-200"
							alt="header"
						/>
					</div>

					<div className="absolute left-1/2 -translate-x-1/2 lg:-translate-y-30 md:-translate-y-20 hidden md:hidden lg:block">
						<h1 className="lg:text-[140px] md:text-[100px] text-center w-full opacity-90 font-bold">
							INTRODUCTION
						</h1>
					</div>

					<div className="absolute left-1/2 -translate-x-1/2 -translate-y-20 md:block lg:hidden">
						<h1 className="text-[105px] text-center w-full opacity-90 font-extrabold">
							INTRO
						</h1>
					</div>

					<div className="w-full max-w-[320px] md:max-w-xl m-auto pt-15 md:pt-18 text-shadow-md text-shadow-white/50">
						<p className="font-[Montserrat] text-[12px] md:text-[16px] text-center">
							Information Technology graduate focusing on front-end development,
							building clean, responsive, and user-friendly web interfaces. Also
							experienced in basic video editing.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
