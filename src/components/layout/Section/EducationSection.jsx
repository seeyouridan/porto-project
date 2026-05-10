function EducationSection() {
	return (
		<>
			<div className="education py-10 max-w-5xl mx-auto px-5">
				<h2 className="text-center text-4xl font-[Montserrat] font-extrabold mb-12 text-shadow-md text-shadow-white/50">
					EDUCATIONS
				</h2>

				<div className="relative">
					<div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/20 -translate-x-1/2"></div>

					<div className="mb-12 flex flex-row items-center justify-between">
						<div className="w-1/2 md:pr-10 pr-5 text-right">
							<h3 className="text-lg md:text-xl font-semibold font-[Montserrat]">
								SMK Negeri 1 Cianjur
							</h3>
							<p className="text-sm opacity-70">Software Engineering</p>
							<span className="text-xs opacity-50">2019 - 2021</span>
						</div>

						<div className="md:w-6 md:h-6 w-4 h-4 bg-white rounded-full border-4 border-[#121212] z-10"></div>

						<div className="block w-1/2"></div>
					</div>

					<div className="mb-12 flex flex-row items-center justify-between">
						<div className="block w-1/2"></div>

						<div className="md:w-6 md:h-6 w-4 h-4 bg-white rounded-full border-4 border-[#121212] z-10"></div>

						<div className="w-1/2 md:pl-10 pl-5 text-left">
							<h3 className="text-lg md:text-xl font-semibold font-[Montserrat]">
								Suryakancana University
							</h3>
							<p className="text-sm opacity-70">Informatics Engineering</p>
							<span className="text-xs opacity-50">2021 - 2025</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default EducationSection;
