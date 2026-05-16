import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import FieldWorkPractice from "@/pages/project-1/FieldWorkPractice";
import DiscordBot from "@/pages/project-2/DiscordBot";
import NotFound from "@/pages/404";

import useScrollToTop from "@/hooks/useScrollToTop";

function App() {
	useScrollToTop();

	return (
		<Routes>
			<Route path="/" element={<Home />} />

			{/* project view */}
			<Route path="projects/pkl-system" element={<FieldWorkPractice />} />
			<Route path="projects/bot-discord-system" element={<DiscordBot />} />

			{/* 404 */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
