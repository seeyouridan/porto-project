import { useState } from "react";

function App() {
	return (
		<>
			<nav></nav>

			<header className="bg-[#121212] text-[#edede4]">
				<div className="container m-auto max-w-full pt-5 pb-5">
					<div className="grid grid-cols-2 gap-4 py-10 px-16">
						<div className="col-start-1 col-end-3">Personal Portofolio</div>
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
							<h1 className="text-[125px] font-bold scale-y-150 tracking-tighter">
								INTRODUCTION
							</h1>
						</div>

						<div className="max-w-md text-center text-sm pt-20 opacity-90">
							<p>
								A Frontend Developer focused on building clean UI, responsive,
								and user-friendly web interfaces
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4 pt-10 px-16">
						<div className="col-start-1 col-end-3">
							<span className="font-bold text-2xl">////////</span>
						</div>
					</div>
				</div>

				<div className="content -mt-25">
					<div className="grid grid-cols-4 gap-4 ">
						<div className="col-start-1 col-end-4 text-left align-middle items-center object-center m-auto max-w-xl pt-20">
							<h2 className="text-[45px] font-bold text-base/10">
								MUHAMMAD RAFLY MAULIDAN NICO TENGES
							</h2>
							<br />
							<p className="text-sm opacity-90">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
								qui saepe pariatur esse repellendus dolore magni velit fuga
								consequuntur sed officiis aut illum facere ipsam tenetur
								blanditiis quam, harum doloribus!
							</p>
						</div>
						<div className="col-span-3 col-end-7 text-right">
							<img
								src="src/assets/img/image-me.png"
								className="h-140"
								alt="image-me"
							/>
						</div>
					</div>
				</div>
			</header>

			<section></section>

			<footer></footer>
		</>
	);
}

export default App;
