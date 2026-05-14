function Footer() {
	return (
		<>
			<footer className="footer sm:footer-horizontal footer-center p-10">
				<aside>
					<div className="text-[#edede4] opacity-35 font-xs font-[Montserrat] text-shadow-md text-shadow-white/50 flex">
						<p className="max-w-xl md:w-auto w-55">
							Copyright © {new Date().getFullYear()} seeyouridan. All rights
							reserved.
						</p>
					</div>
				</aside>
			</footer>
		</>
	);
}

export default Footer;
