import './App.css';
import ClockProject from "./Components/ClockProject";
import React, { useState, useEffect } from 'react';
import { IoIosRefresh } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import bgc from "../../Clock/src/Assets/aesthetic.jpeg";
import clck from "../../Clock/src/Assets/clock.jpeg";
import modal from "../../Clock/src/Assets/last.jpg";
import { IoMdCloseCircle } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiCodeBoxFill } from "react-icons/ri";


// Modal 
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='relative  p-6 rounded-lg shadow-lg w-[600px] h-[230px] flex flex-col items-center'
      style={{ backgroundImage: `url(${modal})` }}
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2'
        >
          <IoMdCloseCircle className='text-white text-2xl hover:text-red-600'/>
        </button>
        <h2 className='text-xl font-bold mb-4 text-white font-mono'>Clock Project</h2>
        <div className='flex flex-row'>
          <p className='text-center mb-4 text-white'><FaReact /></p>
          <p className='text-center mb-4 text-white'><RiTailwindCssFill /></p>
          <p className='text-center mb-4 text-white'><FaCss3Alt /></p>
          <p className='text-center mb-4 text-white'><CiFileOn /></p>
        </div>
        
        <div className='text-center mb-4'>
          <p className='font-semibold text-white font-thin'>Developed by <span className=' font-mono text-red-600'>Muhammed Roshan Vp</span></p>
          <div className='flex justify-center gap-4 mt-2'>
            <a href='https://github.com/mhdroshanvp' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover:text-purple-700'>
            <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/mhdroshanvp/' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover:text-blue-700'>
            <FaLinkedin />
            </a>
            <a href='https://x.com/rxshanvp' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover:text-purple-700'>
            <RiTwitterXLine />
            </a>
          </div>
        </div>
        
        <a href='https://github.com/mhdroshanvp/Clock-Project' target='_blank' rel='noopener noreferrer' className='text-white text-4xl hover:text-red-700'>
        <RiCodeBoxFill />
        </a>
      </div>
    </div>  
  );
};

function App() {
  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const getCurrentTime = () => {
    const date = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString(undefined, options);
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const refreshTime = () => {
    setCurrentTime(getCurrentTime());
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div 
        className='flex justify-center h-screen items-center bg-cover bg-center'
        style={{ backgroundImage: `url(${bgc})` }}
      >
        <div className=' w-[300px] h-[300px] flex flex-col justify-center items-center rounded-[20px] p-4'
        style={{ backgroundImage: `url(${clck})` }}
        >
          <div className='relative w-full h-full flex flex-col items-center justify-center'>
            <div className='mb-4 text-center text-lg font-semibold font-mono gradient-text1'>
              {currentTime}
            </div>
            <button
              onClick={refreshTime}
              className='absolute top-2 right-0 bg-black p-2 rounded-full shadow-md'
            >
              <IoIosRefresh className='text-purple-700'/>
            </button>
            <button
              onClick={openModal}
              className='absolute top-2 left-0 bg-black p-2 rounded-full shadow-md'
            >
              <FaLaptopCode className='text-purple-700'/>
            </button>
            <ClockProject />
            <div className='mt-6 text-center text-lg font-semibold font-serif gradient-text'>
              {getCurrentDate()}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
