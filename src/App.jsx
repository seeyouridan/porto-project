import { useState } from "react";

function App() {
	return (
		<>
			<nav></nav>

			<header>
				<div className="container bg-[#121212] text-white m-auto max-w-full pt-5 pb-5">
					<div className="grid grid-cols-2 gap-4 py-10 px-16">
						<div className="col-start-1 col-end-3">Frontend Developer</div>
						<div className="col-span-2 col-end-7 text-right"></div>
					</div>

					<div className="flex flex-col items-center gap-4">
						<div className="h-72 w-full max-w-6xl overflow-hidden rounded-sm">
							<img
								src="src/assets/img/header.JPG"
								className="h-full w-full object-cover object-[center_48%] scale-125"
								alt="header"
							/>
						</div>

						<div className="absolute translate-y-42">
							<h1 className="text-[125px] font-bold scale-y-150">
								INTRODUCTION
							</h1>
						</div>

						<div className="max-w-175 text-center pt-20">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
								hic illum labore excepturi, officia totam nobis? Dolores vel
								reprehenderit dignissimos tenetur, dolorum perspiciatis sunt
								officiis sed quod, labore et fugit?
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4 py-10 px-16">
						<div className="col-start-1 col-end-3">
							Muhammad Rafly Maulidan Nico Tenges
						</div>
						<div className="col-span-2 col-end-7 text-right">03</div>
					</div>
				</div>
			</header>

			<section></section>

			<footer></footer>
		</>
	);
}

export default App;
