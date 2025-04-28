import React from 'react';
import img from '../assets/mid.png';

const About = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh]' id='about'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        <div className='flex-1 text-center lg:text-left'>
          <img 
            className='ml-0 w-full max-w-[450px] mx-auto lg:mx-0 opacity-70'
            src={img}
            alt='About Me'
          />
        </div>
        <div className='flex-1 text-center lg:text-left mt-8 lg:mt-0'>
          <h2 className='text-[36px] font-bold mb-4'>About Me</h2>
          <p className='text-lg mb-8 max-w-lg mx-auto lg:mx-0'>
          I am a passionate and dedicated student specializing in software and full-stack development.
           I am currently pursuing my B.Tech degree at Lovely Professional University. Throughout my journey,
            I have been focused on learning, growing, and excelling in this field.
          I am proficient in the MERN stack and have a strong interest in solving real-world problems by building 
          impactful and meaningful solutions. My goal is to continue improving my skills and contribute to the world of
           technology with creativity and passion.
          </p>
          <a href='https://www.linkedin.com/in/arpita-tiwari-8b0165255/' target='_blank' rel='noopener noreferrer'>
            <button className='btn btn-lg'>View My LinkedIn Profile</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
