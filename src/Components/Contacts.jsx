import React from 'react';
import home from "../assets/home.png"
import email from "../assets/email.jpeg"
import phone from "../assets/phone.png"
import socials from "../assets/Socials.png"

function Contacts  () {
  return (
    <div className="bg-[#dcdcdc] p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-4xl font-bold  mt-4 text-pink-500">Get In Touch</h2>
    
      <div className="flex items-start mb-4">
        <img
          src={email}
          alt="Email"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p>
            You can reach me via email at: 
            <a href="Rabecca Phoshoko:phoshokorr@gmail.com" className="text-blue-600 hover:underline ml-1">
              phoshokorr@gmail.com
            </a>
          </p>
        </div>
      </div>
      
    
      <div className="flex items-start mb-4">
        <img
          src={socials}
          alt="Social Media"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">Social Media</h3>
          <p>
            <a href="https://github.com/Sedi-B" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Github
            </a>
            <br />
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      
   
      <div className="flex items-start mb-4">
        <img
          src={phone}
          alt="Phone"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">Phone Call</h3>
          <p>
            Feel free to call me at:
            <a href="tel:+2766211705" className="text-blue-600 hover:underline ml-1">
              +27 76 6211 705
            </a>
          </p>
        </div>
      </div>
      
    
      <div className="flex items-start">
        <img
          src={home}
          alt="Address"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">Home Address</h3>
          <p>
            Segopje House, 50018 Matuma Section
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Contacts;
