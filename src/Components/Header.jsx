import React from "react";

function Header() {
    return (
       
          <header className="bg-pink-500 text-white shadow-md">
            <nav className="container mx-auto flex flex-wrap justify-between items-center p-4">
              <div className="text-2xl font-bold">
                <a href="#" className="hover:text-gray-400">Sedi-Codes</a>
              </div>
              <div className="space-x-8 hidden md:flex ">
                <a href="#Home" className="hover:text-gray-400 font-semibold">Home</a>
                <a href="#About" className="hover:text-gray-400 font-semibold">About</a>
                <a href="#Projects" className="hover:text-gray-400 font-semibold">Projects</a>
                <a href="#Achievements" className="hover:hover:text-gray-400 font-semibold">Achievements</a>
                <a href="#Contacts" className="hover:text-gray-400 font-semibold">Contacts</a>

              </div>
              <div className="space-x-4 hidden md:flex">
                <button className="bg-gray-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
                <button className="bg-blue-600 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </div>
              {/* Mobile Menu */}
              <div className="block md:hidden">

                <button className="text-white focus:outline-none" id="menu-toggle">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </nav>
{/*For Mobile phones Screens*/}
            <div className="md:hidden flex flex-col space-y-4 p-4" id="mobile-menu" style={{ display: 'none' }}>
              <a href="#Home" className="hover:text-gray-400">Home</a>
              <a href="#About" className="hover:text-gray-400">About</a>
              <a href="#Projects" className="hover:text-gray-400 font-semibold">Projects</a>
              <a href="#Achievements" className="hover:text-gray-400">Achievements</a>
              <a href="#Contacts" className="hover:text-gray-400">Contacts</a>
             
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </div>
          </header>
        
      );
    
}
export default Header;
