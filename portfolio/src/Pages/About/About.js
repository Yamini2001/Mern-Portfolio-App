import React from 'react';
import './About.css';
// import YaminiImage from '../About/images/Yamini.jpeg';

const About= () => {
  return (
    <div>
      <div className="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                {/* <img src={YaminiImage} alt="profile-pic"/> */}
            </div>
            <div className="col-md-6">
               <h1 className='about'>About me</h1>
               <p className='para'>
               Passionate MERN Stack Developer with a fervent dedication to crafting seamless, dynamic web applications. With a wealth of hands-on experience and a relentless drive for excellence, I thrive in the ever-evolving landscape of web development. My journey began with a spark of curiosity, igniting a flame that has since fueled my relentless pursuit of mastering the MERN stack.

In my arsenal, MongoDB serves as the sturdy foundation, providing a flexible and scalable database solution that empowers my applications to handle data with finesse. Express.js, with its minimalist yet powerful framework, forms the backbone of my server-side architecture, enabling me to build robust APIs and manage the flow of data effortlessly.

When it comes to the frontend, React.js is my weapon of choice. Its declarative and component-based approach resonates deeply with me, allowing me to craft intuitive user interfaces that captivate and engage audiences. With Redux at my side, I orchestrate state management with precision, ensuring that my applications remain responsive and resilient.

But my journey doesn't stop there. I'm constantly pushing the boundaries of what's possible, embracing new technologies and methodologies with unwavering enthusiasm. Whether it's experimenting with GraphQL to optimize data fetching or delving into Next.js for server-side rendering, I embrace every challenge as an opportunity to learn and grow.

Driven by a passion for innovation and a relentless pursuit of excellence, I am not just a MERN Stack Developer—I am a visionary architect, sculpting the digital landscapes of tomorrow with creativity, skill, and boundless determination. Let's collaborate and bring your ideas to life, one line of code at a time.
               </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
