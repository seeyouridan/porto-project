const icons = [
	{ iconName: "fa-html5" },
	{ iconName: "fa-css" },
	{ iconName: "fa-js" },
	{ iconName: "fa-php" },
	{ iconName: "fa-bootstrap" },
	{ iconName: "fa-tailwind-css" },
	{ iconName: "fa-react" },
	{ iconName: "fa-laravel" },
];

function InfiniteScroll() {
	return (
		<>
			<div className="flex gap-8 infinite-scroll">
				{[...icons, ...icons].map((icon, index) => {
					return (
						<i
							key={index}
							className={`fa-brands ${icon.iconName} text-[60px] opacity-30`}
						></i>
					);
				})}
			</div>
			<div className="flex gap-8 infinite-scroll" aria-hidden="true">
				{[...icons, ...icons].map((icon, index) => {
					return (
						<i
							key={index}
							className={`fa-brands ${icon.iconName} text-[60px] opacity-30`}
						></i>
					);
				})}
			</div>
		</>
	);
}

export default InfiniteScroll;
