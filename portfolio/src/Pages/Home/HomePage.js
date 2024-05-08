import React from 'react';
import './HomePage.css';
import Typewriter from 'typewriter-effect';
import YaminiResume from '../Home/images/Yamini _Resume.pdf';
const HomePage = () => {
  return (
    <div>
      <div className="container-fluid home-container">
      <div className="moving-shape"></div>
            <div className="moving-code-snippet">
        <div className="container home-content h1">
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
  options={{
    strings: ['FullStack Developer!', 'MERN Stack Developer!','React JS Developer!'],
    autoStart: true,
    loop: true,
  }} 
/>
    </h1>
      <div className="home-buttons">
         <button className='btn btn-hire'>Hire Me</button>
          <a className='btn btn-cv' href={YaminiResume} download="Yamini's_Resume.pdf">My Resume</a>

       </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default HomePage
