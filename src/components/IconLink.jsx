function Icon({ href, icon }) {
	const baseClass = "hover:text-white duration-300 text-2xl gap-4";

	return (
		<a
			href={href}
			className={baseClass}
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className={`fa-brands ${icon}`}></i>
		</a>
	);
}

export default Icon;
