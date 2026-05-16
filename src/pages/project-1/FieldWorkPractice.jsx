import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Tumb1 from "@/assets/images/project-1/image-1.png";

function FieldWorkPractice() {
	return (
		<>
			<div className="bg-[#121212] text-[#f6f6ee]">
				<Navbar />

				<main className="items-center">
					<div className="hero w-full md:pt-40 pt-30">
						<div className="hero-content flex-col lg:flex-row-reverse gap-20">
							<img
								src={Tumb1}
								className="lg:max-w-xl md:max-w-140 sm:max-w-120 max-w-90 rounded-lg shadow-2xl lg:grayscale hover:grayscale-0 transition-all duration-300"
							/>
							<div>
								<kbd className="kbd kbd-md rounded-full mb-6">
									<i className="fa-regular fa-circle-dot text-xs"></i>
									&nbsp;Web Developer
								</kbd>

								<h1 className="text-5xl font-[Montserrat] font-extrabold">
									Field Work Practice
								</h1>
								<p className="py-6 text-justify">
									The Field Work Practice System is a web-based application
									developed using the Laravel framework to support the process
									of managing field work practice activities in the school
									environment in a structured, effective, and integrated manner.
								</p>

								<div className="flex flex-wrap gap-3 opacity-70">
									<kbd className="kbd kbd-md">Master Data Management</kbd>
									<kbd className="kbd kbd-md">
										Field Work Pracrice Applications
									</kbd>
									<kbd className="kbd kbd-md">Student Mapping</kbd>
									<kbd className="kbd kbd-md">Geolocation Attendance</kbd>
									<kbd className="kbd kbd-md">Monitoring</kbd>
									<kbd className="kbd kbd-md">Report Assessment</kbd>
								</div>
							</div>
						</div>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}

export default FieldWorkPractice;
