import React, { useState } from 'react';
import tm from '../assets/wa.png';
import l from '../assets/ma.png'
import i from '../assets/qs.png'
import e from '../assets/as.png'
import c from '../assets/rg.png'

const projects = {
  software: [
    { id: 1, title: 'Weather app', image: tm, demoLink: 'https://github.com/Arpita244/weather-app', viewLink: 'https://weather-app-bp85-5t6jsdadu-arpita244s-projects.vercel.app/' },
    { id: 2, title: 'Meeting assistant', image:l, demoLink: 'https://github.com/Arpita244/meeting-assistant', viewLink: 'meeting-assistant-sable.vercel.app' },
    { id: 3, title: 'Quest Search', image:i, demoLink: 'https://github.com/Arpita244/questsearch', viewLink: 'questsearch-bice.vercel.app' },
    { id: 3, title: 'Ai incident safety dashboard', image:e, demoLink: 'https://github.com/Arpita244/ai-dashboard', viewLink: 'ai-dashboard-swart.vercel.app' },
  ],
  websites: [
    { id: 1, title: 'Recipe Genie', image:c , demoLink: 'https://github.com/Arpita244/ai-recipe-generator', viewLink: 'ai-recipe-generator-inky.vercel.app' },
    { id: 2, title: 'Lpu express', image: 'https://lpu-express.netlify.app/static/media/logo.8c16eaec7ce11362ff97.png', demoLink: 'https://github.com/Arpita244/LPU_express_v2', viewLink: 'https://lpu-express.netlify.app/' },
]
};

const Work = () => {
  const [activeTab, setActiveTab] = useState('software');
  const [transitionState, setTransitionState] = useState('opacity-100');

  const handleTabChange = (tab) => {
    setTransitionState('opacity-10 scale-95');
    setTimeout(() => {
      setActiveTab(tab);
      setTransitionState('opacity-100 scale-100');
    }, 300);
  };

  return (
    <section className='mt-40 min-h-[85vh] lg:min-h-[78vh]' id='work'>
      <div className='container mx-auto text-center'>
        <h2 className='text-[50px] mb-8 font-bold text-accent'>PROJECTS</h2>
        <div className='flex justify-center mb-8'>
          <button
            className={`btn px-6 py-3 rounded-full transition-colors ${activeTab === 'software' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleTabChange('software')}
          >
            Software
          </button>
          <button
            className={`btn w-auto px-6 py-3 rounded-full transition-colors ml-4 ${activeTab === 'websites' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleTabChange('websites')}
          >
            Websites
          </button>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 duration-300 ${transitionState}`}>
          {projects[activeTab].map(project => (
            <div
              key={project.id}
              className='relative group bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105'
            >
              <img src={project.image} alt={project.title} className='w-full h-48 ' />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h3 className='text-2xl font-bold text-white mb-4'>{project.title}</h3>
                <div className='flex gap-x-4'>
                  <a href={project.viewLink} target='_blank' rel='noopener noreferrer' className='font-extrabold'>View</a>
                  <a href={project.demoLink} target='_blank' rel='noopener noreferrer' className='font-extrabold '>Github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
