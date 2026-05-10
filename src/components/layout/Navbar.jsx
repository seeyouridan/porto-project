import NavItem from "../ui/NavItem";

function Navbar() {
    return (
        <>
            <nav className="bg-[#121212]/30 text-[#edede4] fixed top-0 left-0 w-full z-999 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)] will-change-transform">
				<div className="flex justify-between items-center md:py-10 py-6 px-6 md:px-50">
					<a href="/">
						<img src="/Icon.png" className="h-7 rounded-2xl" alt="" />
					</a>

					<div className="hidden md:block">
						<NavItem />
					</div>

					<div className="md:hidden">
						<i className="fa-solid fa-bars text-xl"></i>
					</div>
				</div>
			</nav>
        </>
    );
}

export default Navbar;