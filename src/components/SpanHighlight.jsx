function Span({ icon, label, href }) {
	const baseClass =
		"inline-flex items-center gap-2 px-2 py-1 " +
		"border border-[#edede4]/20 rounded-xl text-xs " +
		"hover:border-[#edede4]/80 duration-300";

	const content = (
		<>
			<i className={`fa-brands ${icon}`}></i>
			{label}
		</>
	);

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={baseClass}
			>
				{content}
			</a>
		);
	}

	return <span className={baseClass}>{content}</span>;
}

export default Span;