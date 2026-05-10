import Tumb1 from "../../assets/images/project-1/projimg-1.png";

const items = [
	{
		img: Tumb1,
		title: "Intership Informatics System",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam unde iste cum adipisci accusantium facilis culpa quisquam? Voluptas totam explicabo illum aspernatur velit perferendis asperiores amet labore fugiat voluptate.",
	},
];

function CardEffect() {
	return (
		<>
			{items.map((item, index) => {
				return (
					<div
						key={index}
						className="group relative card bg-base-100 image-full md:w-82 w-72 h-52 overflow-hidden shadow-sm cursor-pointer"
					>
						<figure className="h-full">
							<img
								src={item.img}
								alt="image-project"
								className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-120 md:brightness-100 brightness-50 group-hover:brightness-28"
							/>
						</figure>

						<div className="absolute inset-0 flex items-center justify-center md:hidden z-999">
							<a
								role="button"
								href=""
								className="btn bg-[#f6f6ee] text-[#121212]"
							>
								More
							</a>
						</div>

						<div className="absolute inset-0 flex flex-col justify-end p-5 text-white translate-y-full group-hover:-translate-y-3 transition-all duration-500 ease-in-out">
							<h2 className="card-title">{item.title}</h2>

							<hr className="my-2 border-white/40" />

							<p className="text-sm line-ver-hide">{item.text}</p>

							<div className="card-actions justify-center pt-5">
								<a href="" role="button" className="btn btn-sm">More</a>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default CardEffect;
