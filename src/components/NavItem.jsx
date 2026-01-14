function NavItem({ href, label }) {
	return (
		<li>
			<a
				href={href}
				className="text-[#edede4] hover:text-[#9c9797] duration-300"
			>
				{label}
			</a>
		</li>
	);
}

export default NavItem;
