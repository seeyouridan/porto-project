import InfiniteScroll from "@/components/ui/InfiniteScroll";

function TechSection() {
	return (
		<>
			<div className="tech m-auto max-w-7xl px-4 sm:px-10 md:px-20 py-20">
				<h2 className="text-center pb-8 text-4xl font-[Montserrat] font-extrabold text-shadow-md text-shadow-white/50">
					TOOLS & SKILLS
				</h2>
				<div className="overflow-hidden md:max-w-2xl max-w-md m-auto flex scroll-fade">
					<InfiniteScroll />
				</div>
			</div>
		</>
	);
}

export default TechSection;
