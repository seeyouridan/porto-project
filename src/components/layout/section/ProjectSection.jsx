import CardEffect from "@/components/ui/CardEffect";

function ProjectSection() {
	return (
		<>
			<div className="project py-10 max-w-6xl m-auto" id="project">
				<h2 className="text-center text-4xl font-[Montserrat] font-extrabold mb-12 text-shadow-md text-shadow-white/50">
					PROJECTS
				</h2>
				<div className="flex flex-wrap justify-center gap-10">
					<CardEffect />
				</div>
			</div>
		</>
	);
}

export default ProjectSection;
