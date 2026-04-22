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
						<li>
							<a
								key={index}
								href={`${item.href}`}
								className="text-[#edede4] hover:text-[#9c9797] duration-300"
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
