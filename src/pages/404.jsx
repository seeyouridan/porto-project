import { Link } from "react-router-dom";
import Error404desktop from "@/components/svg/404-desktop";
import Error404Mobile from "@/components/svg/404-mobile";

function NotFound() {
	return (
		<>
			<section className="min-h-screen bg-[#121212] text-[#f6f6ee] flex items-center">
				<div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
					<Error404Mobile />

					<div className="space-y-8">
						<div className="space-y-4">
							<p className="text-sm font-semibold tracking-widest uppercase text-white/50">
								404 Error
							</p>

							<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
								Page Not Found
							</h1>

							<p className="text-white/70 text-lg max-w-xl leading-relaxed">
								Sorry, the page you are looking for doesn't exist or has been
								moved.
							</p>
						</div>

						<Link to="/" className="btn">
							<i class="fa-solid fa-angles-left"></i>Take Me Home
						</Link>
					</div>

					<div className="hidden lg:flex justify-center">
						<Error404desktop />
					</div>
				</div>
			</section>
		</>
	);
}

export default NotFound;
