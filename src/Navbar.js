import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black text-white fixed top-0 z-50 w-full pb-2 shadow-sm shadow-white">
      <div className="flex justify-center">
        <a href="#home">
          <h2 className="text-6xl font-bilbo">The Mane Allure</h2>
        </a>
      </div>
      <ul className="flex flex-row justify-center sm:justify-end">
        <li>
          <a
            href="https://www.facebook.com/TXALLURE/"
            target="blank"
            className="text-xl rounded-md mr-7"
          >
            <FaFacebook className=" hover:bg-green-900" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/themaneallure/"
            target="blank"
            className="text-xl rounded-md hover:bg-green-900"
          >
            <FaInstagram className="hover:bg-green-900" />
          </a>
        </li>
        <li>
          <a
            href="#about-me"
            className="text-xl mx-auto p-2 rounded-md hover:bg-green-900"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#booking"
            className="text-xl mx-auto p-2 rounded-md hover:bg-green-900"
          >
            Booking
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="text-xl mx-auto p-2 rounded-md hover:bg-green-900"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#chat"
            className="text-xl mx-auto p-2 rounded-md hover:bg-green-900"
          >
            Live Assistant
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;