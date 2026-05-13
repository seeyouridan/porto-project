import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import FieldWorkPractice from "@/pages/project-1/FieldWorkPractice";
import DiscordBot from "@/pages/project-2/DiscordBot";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="components/pkl-system" element={<FieldWorkPractice />} />
			<Route path="components/bot-discord-system" element={<DiscordBot />} />
		</Routes>
	);
}

export default App;
