import React from "react";
import cl from "../images/CognionLogo.png";

export default function Navigation({ signOut, isUserSigned }){
    return (<header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0">
            <img src={cl}  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-20 h-20 text-white p-2 bg-YELLOW-500 rounded-full" viewBox="0 0 24 24" />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            <span className="ml-3 text-xl">COGNION</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">Home</a>
            <a href="#About" className="mr-5 hover:text-gray-900">About</a>
            <a href="#Services" className="mr-5 hover:text-gray-900">Services</a>
            <a href="#Contact Us" className="mr-5 hover:text-gray-900">Contact Us</a>
        </nav>
        <button onClick={signOut} style={(isUserSigned)? {display: "inline-block"} : {display: "none"}} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Out</button>
        </div>
  </header>)
}