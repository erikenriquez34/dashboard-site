import {NavLink} from "react-router-dom";

function linkClass({ isActive }: { isActive: boolean }) {
  return isActive ? "text-white hover:text-amber-500 transition underline underline-offset-5 decoration-3 decoration-amber-500 " : 
  "text-white hover:text-amber-500 transition";
}

function Navbar() {
  return (
    <nav className=" bg-spirit/75 fixed w-full z-50 p-3.5 backdrop-blur-md shadow-xl top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="cursor-pointer">
            <NavLink to="/">
              <img src="body.png" className="w-14 h-14 transition delay-50 duration-100 hover:-translate-y-1 hover:scale-105" />
            </NavLink>
          </div>

          <div className="space-x-6 hidden md:flex font-bold">
            <NavLink to="/" className={linkClass}>About</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/media" className={linkClass}>Media</NavLink>
            <div className="text-white hover:text-amber-500 hover:cursor-pointer transition">Contact</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
