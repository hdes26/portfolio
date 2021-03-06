


const navbar = () => (
    <>
        <nav className="flex justify-around px-4 py-5 mx-auto bg-white fixed z-10  w-full">
            <div>
                <h3 className="text-2xl font-medium text-black">Hdes</h3>
            </div>
            <div className="hidden space-x-8 lg:flex justify-self-center">
                <a href="!#">Home</a>
                <a href="!#">About</a>
                <a href="!#">Blogs</a>
                <a href="!#">Our Team</a>
                <a href="!#">Contact Us</a>
            </div>
            <div className="flex lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeLinejoin="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
        </nav>
    </>
);


export default navbar;