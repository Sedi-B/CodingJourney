import React from 'react';
import pic from '../assets/Profile.jpg'
import img from'../assets/img1.jpeg'
import algorithm from'../assets/algorithm.jpg'
import coding from '../assets/coding.jpeg'
import forward from'../assets/forward.jpeg'




function About() {
  return (
    <div id='About' className="bg-[#dcdcdc]p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-4xl font-bold  mt-4 text-pink-500">About Me</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <img
            src={pic}
            alt="Ramaesela Rabecca Phoshoko"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div >
            <p className="text-lg">
                <strong>👋 Hi, I'm Ramaesela Rabecca Phoshoko,</strong> a passionate aspiring Full Stack Developer!</p>
          </div>
        </li>

        <li className="flex items-start">
          <img
            src={img} 
            alt="Starting Journey"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg">
                <strong>📅 My Coding Journey Began in 2019:</strong> It all started at Tshwane University of Technology, during my first-year foundation phase. The first tool I used was <strong>SCRATCH (drag-and-drop coding)</strong>. It was overwhelming at first, but things eventually started adding up!</p>
          </div>
        </li>

        <li className="flex items-start">
          <img
            src={algorithm}
            alt="Algorithm Learning"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg"><strong>🔍 2020: Diving into  C++ programming,using Algorithms & Pseudo Code:</strong> Learning about Pseudo code (manual steps of how the code will run) made things simpler, but coding still posed its challenges. The curiosity to get the code right kept me going!</p>
          </div>
        </li>

        <li className="flex items-start">
          <img
            src={coding}
            alt="Coding Success"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg"><strong>🎉 The Big Moment:</strong> The day I scored <strong>80%</strong> in my coding exam, I knew <strong>"I can truly do this!"</strong> That success ignited a fire in me to keep challenging myself and pushing forward!</p>
          </div>
        </li>

        <li className="flex items-start">
          <img
            src={forward}
            alt="Moving Forward"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg"><strong>🚀 Moving Forward:</strong> My coding journey has had its tough moments, but the love for coding grew stronger as things started to make sense. I'm excited to continue this journey and see where it takes me!</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default About;
