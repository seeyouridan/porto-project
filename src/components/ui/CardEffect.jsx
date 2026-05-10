import { Link } from "react-router-dom";

import Tumb1 from "@/assets/images/project-1/image-1.png";
import Tumb2 from "@/assets/images/project-2/image-1.png";

const items = [
	{
		img: Tumb1,
		title: "Field Work Practice System",
		text: "The Field Work Practice System is a web-based application developed using the Laravel framework to support the process of managing field work practice activities in the school environment in a structured, effective, and integrated manner.",
		link: "/detail-project-1",
	},
	{
		img: Tumb2,
		title: "Discord Bot System",
		text: "Azeeraa Bot (ZeeBot) is a multi-functional Discord bot developed using JavaScript with the discord.js library. It's designed to provide an interactive experience on Discord servers through AI chatbot features, music streaming, and simple games like rock, paper, scissors.",
		link: "/detail-project-2",
	},
];

function CardEffect() {
	return (
		<>
			{items.map((item, index) => {
				return (
					<div
						key={index}
						className="group relative card bg-base-100 image-full md:w-82 h-52 overflow-hidden shadow-sm cursor-pointer"
					>
						<figure className="h-full">
							<img
								src={item.img}
								alt="image-project"
								className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-120 md:brightness-100 brightness-50 group-hover:brightness-28"
							/>
						</figure>

						<div className="absolute inset-0 flex items-center justify-center md:hidden z-999">
							<Link
								role="button"
								to={item.link}
								className="btn bg-[#f6f6ee] text-[#121212]"
							>
								Detail Project
							</Link>
						</div>

						<div className="absolute inset-0 flex flex-col justify-end p-5 text-white translate-y-full group-hover:-translate-y-3 transition-all duration-500 ease-in-out">
							<h2 className="card-title">{item.title}</h2>

							<hr className="my-2 border-white/40" />

							<p className="text-sm line-ver-hide">{item.text}</p>

							<div className="card-actions justify-center pt-5">
								<Link to={item.link} role="button" className="btn btn-sm">
									Detail Project
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default CardEffect;
