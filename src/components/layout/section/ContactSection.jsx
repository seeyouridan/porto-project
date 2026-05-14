import SocialButton from "@/components/ui/SocialButton";

const socials = [
	{
		icon: "fa-brands fa-github",
		text: "seeyouridan",
		link: "https://github.com/seeyouridan",
	},
	{
		icon: "fa-solid fa-envelope",
		text: "Muhammad Rafly Maulidan",
		link: "mailto:raflymaulidan019@gmail.com",
	},
	{
		icon: "fa-brands fa-whatsapp",
		text: "+62-882-1279-7825",
		link: "https://wa.me/6288212797825",
	},
	{
		icon: "fa-brands fa-instagram",
		text: "@raflyidan_",
		link: "https://instagram.com/raflyidan_",
	},
];

function ContactSection() {
	return (
		<>
			<div
				className="contact py-40 md:max-w-xl max-w-87.5 mx-auto px-5"
				id="contact"
			>
				<h2 className="text-center text-4xl font-[Montserrat] font-extrabold mb-12 text-shadow-md text-shadow-white/50">
					CONNECT WITH ME
				</h2>

				<div className="flex justify-center items-center font-[Montserrat]">
					{socials.map((social, index) => (
						<SocialButton
							key={index}
							icon={social.icon}
							text={social.text}
							link={social.link}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default ContactSection;
