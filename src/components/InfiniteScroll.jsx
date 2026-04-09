const items = [
	{ icon: "fa-brands fa-html5", name: "HTML" },
	{ icon: "fa-brands fa-css", name: "CSS" },
	{ icon: "fa-brands fa-js", name: "JAVASCRIPT" },
	{ icon: "fa-brands fa-php", name: "PHP" },
	{ icon: "fa-brands fa-bootstrap", name: "BOOTSTRAP" },
	{ icon: "fa-brands fa-tailwind-css", name: "TAILWIND" },
	{ icon: "fa-brands fa-react", name: "REACT" },
	{ icon: "fa-solid fa-database", name: "MYSQL" },
	{ icon: "fa-brands fa-laravel", name: "LARAVEL" },
	{ icon: "fa-brands fa-github", name: "GITHUB" },
	{ icon: "fa-brands fa-figma", name: "FIGMA" },
];

function InfiniteScroll() {
	return (
		<>
			<div className="flex gap-8 infinite-scroll pr-4">
				{[...items, ...items].map((item, index) => {
					return (
						<div key={index} className="flex flex-col items-center">
							<i
								className={`${item.icon} text-[60px] opacity-30`}
							></i>
							<span className="text-sm opacity-50 mt-2 font-[Montserrat]">{item.name}</span>
						</div>
					);
				})}
			</div>
			<div className="flex gap-8 infinite-scroll" aria-hidden="true">
				{[...items, ...items].map((item, index) => {
					return (
						<div key={index} className="flex flex-col items-center">
							<i
								className={`fa-brands ${item.icon} text-[60px] opacity-30`}
							></i>
							<span className="text-sm opacity-50 mt-2 font-[Montserrat]">{item.name}</span>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default InfiniteScroll;
