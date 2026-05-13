function ContactSection() {
	return (
		<>
			<div
				className="contact py-10 md:max-w-xl max-w-87.5 mx-auto px-5"
				id="contact"
			>
				<h2 className="text-center text-4xl font-[Montserrat] font-extrabold mb-12 text-shadow-md text-shadow-white/50">
					CONNECT WITH ME
				</h2>
				<div className="flex justify-center font-[Montserrat]">
					<div className="px-2">
						<a
							href="https://instagram.com/raflyidan_"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center justify-center overflow-hidden rounded-full border text-[#f6f6ee] hover:bg-[#f6f6ee] hover:text-[#121212] transition-all duration-500 w-12 hover:w-52 px-3 py-3"
						>
							<div className="flex items-center justify-center min-w-max">
								<i className="fa-brands fa-instagram text-xl shrink-0"></i>

								<span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:opacity-100">
									<span className="ml-3">@raflyidan_</span>
								</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactSection;
