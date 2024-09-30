import React from "react";
import image from "../assets/image1.jpeg";
import logo from "../assets/CODEs.png";

function Home() {
  return (
    <div>
        
      <section className="flex flex-col md:flex-row items-center justify-center h-screen p-8">
       
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={logo}
            alt="Landing"
            className="object-cover w-full h-full max-h-96 rounded-lg shadow-lg"
          />
        </div>
    
        <div className="w-full md:w-1/2 text-center md:text-center">
          <h1 className="text-3xl font-bold mb-4">
            Journey Through Code: My Story, My Creations
          </h1>
          <p className="text-lg mb-4">
            Explore the key moments, challenges, and successes in my coding
            journey. From my first project to the ones that keep me inspired,
            see how I've grown as a Girl coder,  dedicated to innovation and
            continuous learning.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Code Like a Girl
          </button>
        </div>
      </section>
    </div>
  );
}
export default Home;
