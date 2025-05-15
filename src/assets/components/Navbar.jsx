import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex flex-row w-full border-b-2 border-c bg-gray-900 py-6 bg-opacity-10 text-white fixed top-0 z-50">
      <nav className="flex flex-row w-full justify-between items-center px-20">
        <div className="flex flex-1 text-4xl text-amber-400">TEXANET</div>
        <ul className="flex flex-1 flex-row justify-end p-2 gap-10 text-center">
          <li className="font-semibold text-2xl text-white hover:text-amber-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-2xl text-white  hover:text-amber-400 cursor-pointer">
            <Link to="/about">About</Link>
            </li>
          <li className="font-semibold text-2xl text-white  hover:text-amber-400 cursor-pointer">
            <Link to="/contactus">Contact Us</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
