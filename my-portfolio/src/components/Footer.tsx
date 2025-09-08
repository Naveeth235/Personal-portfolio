import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 rounded-t-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-10 md:px-16 md:pl-30 grid md:grid-cols-3 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="font-extrabold text-2xl">NAVEETH LAREEF</h2>
          <p className="mt-3 text-gray-300 text-m leading-relaxed">
            CS undergrad who loves turning ideas into code and 
            exploring web development, problem-solving, and all things tech.
          </p>
          <p className="mt-4 text-black text-md leading-relaxed">
            Copyright © 2025 All Rights Reserved.
          </p>
        </div>

        {/* Sitemap */}
        <div className="text-center md:text-centre md:pl-20">
          <h3 className="font-bold mb-3 text-3xl">SITEMAP</h3>
          <ul className="space-y-1.5 text-lg">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">About Me</a></li>
            <li><a href="#" className="hover:text-black">Projects</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-5 text-2xl justify-center">
                <a href="#" className="hover:text-black transition-transform transform hover:scale-125"><FaLinkedin /></a>
                <a href="#" className="hover:text-black transition-transform transform hover:scale-125"><FaInstagram /></a>
                <a href="#" className="hover:text-black transition-transform transform hover:scale-125"><FaGithub /></a>
            </div>
            <button className="border border-white px-6 py-2 rounded-lg hover:bg-black hover:border-black hover:text-white transition">
                CONTACT ME
            </button>
            </div>
        </div>
    </footer>
  );
}