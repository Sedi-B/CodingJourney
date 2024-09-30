import React from 'react';

const Achievements = () => {
  return (
    <div className="bg-[#dcdcdc] p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Achievements</h2>
      <ul className="space-y-4">
        
        <li className="flex items-start">
          <div>
            <h3 className="text-xl font-semibold">🎓 Academic Excellence</h3>
            <p className="text-lg">Graduated with a Diploma in Information Technology from Tshwane University of Technology, where I excelled in coding and software development, achieving top marks in key modules like Algorithms and Data Structures.</p>
          </div>
        </li>
    
        <li className="flex items-start">
          <div>
            <h3 className="text-xl font-semibold">🏆 Hackathon Success</h3>
            <p className="text-lg">
              Participated in several hackathons, including <strong>GirlCode</strong> and <strong>LVH Hackathon</strong>, where I learnt the power of Collaboration, Comunication and programming skills Enhancement..
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div>
            <h3 className="text-xl font-semibold">💼 Professional Growth</h3>
            <p className="text-lg">
              Successfully completed a software developer internship at MLab, where I contributed to the development of web applications, gaining hands-on experience with front-end and back-end technologies.
            </p>
          </div>
        </li>
        
        <li className="flex items-start">
          <div>
            <h3 className="text-xl font-semibold">🚀 Personal Projects</h3>
            <p className="text-lg">
              
              Developed an application for an internet café using C# and .NET MAUI. This project helped me sharpen my UI/UX skills and further understand user interaction with digital services.
            </p>
            <p className="text-lg">I built a mobile-friendly portfolio to showcase my frontend development skills, using ReactJS and Tailwind CSS for a sleek, responsive design.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
