function Navbar() {
  return (
    <nav className="bg-transparent border-gray-200 fixed w-full z-50 p-3.5 backdrop-blur-md shadow-xl top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="cursor-pointer">
            <img src="../../public/body.png" width="50vh" height="50vh" />
          </div>

          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="text-white font-bold hover:text-amber-500 transition">
              About
            </a>
            <a href="#projects" className="text-white font-bold hover:text-amber-500 transition">
              Projects
            </a>
            <a href="#media" className="text-white font-bold hover:text-amber-500 transition">
              Media
            </a>
            <a href="#contact" className="text-white font-bold hover:text-amber-500 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
