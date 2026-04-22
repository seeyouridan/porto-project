const items = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#project", label: "Project" },
	{ href: "#contact", label: "Contact" },
];

function NavItem() {
	return (
		<>
			<ul className="flex gap-6 text-sm font-medium font-[Montserrat]">
				{items.map((item, index) => {
					return (
						<li key={index}>
							<a
								href={`${item.href}`}
								className="text-[#edede4] hover:text-[#edede4]/60 duration-300 hover:text-shadow-md hover:text-shadow-[#edede4]/50"
							>
								{`${item.label}`}
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default NavItem;
