import CardEffect from "@/components/ui/CardEffect";

function ProjectSection() {
	return (
		<>
			<div className="project pt-40 pb-10" id="project">
				<div className="max-w-6xl m-auto">
					<h2 className="text-center text-4xl font-[Montserrat] font-extrabold mb-12 text-shadow-md text-shadow-white/50">
						PROJECTS
					</h2>
					<div className="flex flex-wrap justify-center md:gap-10 gap-5">
						<CardEffect />
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectSection;
