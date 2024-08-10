import React, { useState } from 'react';
import tm from '../assets/text-to-speech.png';
import l from '../assets/logo.png'
import i from '../assets/icon.png'
import a from '../assets/logo-white.png'
const projects = {
  software: [
    { id: 1, title: 'Text to speech', image: tm, demoLink: 'https://github.com/sanchitbajaj123/Text-to-speech', viewLink: 'https://github.com/sanchitbajaj123/Text-to-speech' },
    { id: 2, title: 'Attendance system', image:l, demoLink: 'https://github.com/sanchitbajaj123/Attendance-project-for-factory', viewLink: 'https://github.com/sanchitbajaj123/Attendance-project-for-factory' },
    { id: 3, title: 'Digi park', image:i, demoLink: 'https://github.com/sanchitbajaj123/digi-park', viewLink: 'https://github.com/sanchitbajaj123/digi-park' },
    { id: 3, title: 'Eco innovate', image:'https://private-user-images.githubusercontent.com/110713000/344473795-e8e2341b-e520-4caa-b947-31bf061dde5e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMyOTYxNDcsIm5iZiI6MTcyMzI5NTg0NywicGF0aCI6Ii8xMTA3MTMwMDAvMzQ0NDczNzk1LWU4ZTIzNDFiLWU1MjAtNGNhYS1iOTQ3LTMxYmYwNjFkZGU1ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxMFQxMzE3MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNjAzYTViMjg5NDFmOWUwZjVhNDMzNDgwZDRjYTNjM2U0OWU1M2IzMjY4ODgzZjBiNTQ1MzBiZDQxZDcxNmJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.bLnLR8aml0CislQN4eSjGgFEosyL8dr06UwQlbL9aWM', demoLink: 'https://github.com/sanchitbajaj123/ECO-INNOVATIVE', viewLink: 'https://github.com/sanchitbajaj123/ECO-INNOVATIVE' },
  ],
  websites: [
    { id: 1, title: 'Chat room', image: 'https://private-user-images.githubusercontent.com/110713000/313591120-59a9cb3f-ef92-47e0-afaf-61bad9b2ad28.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMyOTY0NzAsIm5iZiI6MTcyMzI5NjE3MCwicGF0aCI6Ii8xMTA3MTMwMDAvMzEzNTkxMTIwLTU5YTljYjNmLWVmOTItNDdlMC1hZmFmLTYxYmFkOWIyYWQyOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxMFQxMzIyNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZWU2ODMzZDg5MDViNDQ5ZmVmMmJjMzI2ODM2Yjc4Y2ZiNzljOTRlYWQ4OWUyNzFmYjg5ZTJhNmQ4NDBkYzQyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.xVTdXeCMe3wBVwYEN5wAvd9WA84bv8QL8t44n2j6YHg', demoLink: 'https://github.com/sanchitbajaj123/chat-room', viewLink: 'https://chat-room-78me.onrender.com/ ' },
    { id: 2, title: 'Optical shop frontend', image: 'https://www.colosseinglasses.com/cdn/shop/products/product-image-524594496_540x.jpg?v=1643187318', demoLink: 'https://github.com/sanchitbajaj123/optical-project', viewLink: 'http://optical-project.onrender.com/' },
    { id: 3, title: 'Customer record keeper', image: 'https://private-user-images.githubusercontent.com/110713000/344477070-38328c97-3df2-41ad-893c-a60a861bc637.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMyOTc0MjEsIm5iZiI6MTcyMzI5NzEyMSwicGF0aCI6Ii8xMTA3MTMwMDAvMzQ0NDc3MDcwLTM4MzI4Yzk3LTNkZjItNDFhZC04OTNjLWE2MGE4NjFiYzYzNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxMFQxMzM4NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMjc1MWI3ODU3Zjg5ZDYxZTdhNmJmYWJjMDY1ZTc0YjNiMzdkN2JhN2NkZjQxNjIyMDIzMTNhN2E5NGQ4NGMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.V4gJVctdJlQ6J-JsIOvbtL5yZqh6J4S82H0Ym4F4nV8', demoLink: 'https://github.com/sanchitbajaj123/customer-record', viewLink: 'https://customer-record-2.onrender.com/' },
    { id: 4, title: 'Lpu express', image: 'https://lpu-express.netlify.app/static/media/logo.8c16eaec7ce11362ff97.png', demoLink: 'https://github.com/sanchitbajaj123/LPU_express_v2', viewLink: 'https://lpu-express.netlify.app/' },
    { id: 5, title: 'Aasara-pgt', image:a, demoLink: 'https://github.com/sanchitbajaj123/ASARA-GPT', viewLink: 'https://github.com/sanchitbajaj123/ASARA-GPT' },
  ],
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
