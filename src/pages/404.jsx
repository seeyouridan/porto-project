function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#121212] px-6">
			<h1 className="text-7xl font-extrabold">
				404
			</h1>

			<p className="text-xl mt-4 text-center">
				Page not found.
			</p>

			<a
				href="/"
				className="btn btn-primary mt-8"
			>
				Back to Home
			</a>
		</div>
	);
}

export default NotFound;