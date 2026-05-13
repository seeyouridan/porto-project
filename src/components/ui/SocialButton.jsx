function SocialButton({ icon, text, link }) {
	return (
		<>
			<div className="px-2 md:py-0 py-2">
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center justify-center overflow-hidden rounded-full btn transition-all duration-500 px-3 py-6"
				>
					<div className="flex items-center justify-center min-w-max">
						<i className={`${icon} text-xl shrink-0`}></i>

						<span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-sm group-hover:opacity-100">
							<span className="ml-3">{text}</span>
						</span>
					</div>
				</a>
			</div>
		</>
	);
}

export default SocialButton;
