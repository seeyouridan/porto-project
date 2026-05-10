import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/Header/HeroSection";
import About from "./components/layout/Header/About";
import TechSection from "./components/layout/Section/TechSection";
import EducationSection from "./components/layout/Section/EducationSection";
import ProjectSection from "./components/layout/Section/ProjectSection";
import Footer from "./components/layout/Footer";

function App() {
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

export default App;
