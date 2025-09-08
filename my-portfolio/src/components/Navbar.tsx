import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-black/80 dark:bg-black fixed w-[90%] z-30 top-4 left-1/2 -translate-x-1/2 rounded-3xl shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-600 max-w-screen-xl mx-auto">
      <div className="flex flex-wrap items-center justify-between p-6">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="./nav-logo.png"
            className="h-15 mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
            NAVEETH LAREEF
          </span>
        </a>
        {/* Hamburger for mobile */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <div
          className={`
            w-full md:flex md:w-auto md:order-2
            transition-all duration-300 ease-in-out
            overflow-hidden
            ${isOpen ? "max-h-96 opacity-100 flex" : "max-h-0 opacity-0 hidden"}
            md:max-h-full md:opacity-100 md:flex
          `}
          id="navbar-sticky"
        >
          <ul className="flex flex-col gap-2 p-0 mt-4 font-medium md:gap-4 border-2 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent md:items-center md:ml-auto w-full transition-all duration-300 ease-in-out">
            {navLinks.map((link, idx) => (
              <li
                key={link.name}
                className={`w-full md:w-auto ${
                  idx === navLinks.length - 1 ? "mb-6 md:mb-0" : ""
                }`}
              >
                <a
                  href={link.href}
                  className="block w-full text-center py-2 px-4 text-white bg-blue-700 rounded-2xl shadow-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out md:rounded-2xl md:w-auto md:bg-blue-700 md:text-white md:hover:bg-white md:hover:text-black md:dark:bg-blue-700 md:dark:text-white md:dark:hover:bg-white md:dark:hover:text-black md:focus:ring-blue-800 focus:outline-none"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
