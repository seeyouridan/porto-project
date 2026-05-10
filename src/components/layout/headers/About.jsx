import Avatar from "@/assets/images/about-image-dark.png";

const linkCv =
	"https://drive.google.com/file/d/1bBeIVDfVWl_k-H9Is8K7L2qHj4l0Fvef/view?usp=sharing";

function About() {
	return (
		<>
			<div className="about" id="about">
				<div className="flex flex-col md:flex-row gap-10 py-10 max-w-7xl m-auto md:px-20 px-5 items-center">
					<div className="w-full md:w-1/2 order-2 md:order-1">
						<h1 className="md:text-[28px] text-[24px] font-bold md:text-left text-center">
							Hi <span className="wave">👋</span>
						</h1>

						<h2 className="md:text-[28px] text-[18px] font-bold md:max-w-3xl max-w-full leading-snug md:text-left text-center">
							I am,{" "}
							<span className="text-[#edede4] md:text-[30px] text-[18px] text-shadow-md text-shadow-white/50">
								MUHAMMAD RAFLY MAULIDAN NICO TENGES
							</span>
						</h2>

						<br />
						<hr className="md:w-16 w-40 py-1 m-auto md:m-0" />

						<p className="md:text-[14px] text-[12px] md:max-w-md max-w-full leading-relaxed md:text-justify text-center font-[Montserrat] mt-3">
							I'm particularly interested in front-end development, specifically
							building responsive, clean, and user-friendly website interfaces
							across devices.
						</p>

						<br />

						<div className="text-center md:text-left">
							<a href={linkCv} target="_blank" rel="noopener noreferrer">
								<button className="btn">
									Download CV <i className="fa fa-solid fa-file"></i>
								</button>
							</a>
						</div>
					</div>

					<div className="flex justify-center md:justify-end items-center w-full md:w-1/2 order-1 md:order-2 -mb-6 md:mb-0">
						<img
							src={Avatar}
							alt="image-me"
							className="w-50 sm:w-62.5 md:w-87.5 lg:w-105 object-contain opacity-80 drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
