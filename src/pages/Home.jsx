import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/header/HeroSection";
import About from "@/components/layout/header/About";
import TechSection from "@/components/layout/section/TechSection";
import EducationSection from "@/components/layout/section/EducationSection";
import ProjectSection from "@/components/layout/section/ProjectSection";
import ContactSection from "@/components/layout/section/ContactSection";
import Footer from "@/components/layout/Footer";

function Home() {
	return (
		<>
			<Navbar />

			<main>
				<header className="md:pt-27 pt-15" id="home">
					<HeroSection />
					<About />
				</header>

				<section>
					<TechSection />
					<EducationSection />
					<ProjectSection />
					<ContactSection />
				</section>

				<div>
					<center>
						<h1 className="font-[Montserrat] text-lg font-bold text-shadow-md text-shadow-white/50">
							<span className="wave">🛠️</span> Work in Progress...
						</h1>
					</center>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Home;
