import React from "react";
import "./About.css";
import YaminiImage from '../About/images/Yamini.jpeg';
const About = () => {
  return (
    <>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={YaminiImage}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Passionate MERN Stack Developer with a fervent dedication to crafting seamless, dynamic web applications. With a wealth of hands-on experience and a relentless drive for excellence, I thrive in the ever-evolving landscape of web development. My journey began with a spark of curiosity, igniting a flame that has since fueled my relentless pursuit of mastering the MERN stack.<br/>
              <br/>

In my arsenal, MongoDB serves as the sturdy foundation, providing a flexible and scalable database solution that empowers my applications to handle data with finesse. Express.js, with its minimalist yet powerful framework, forms the backbone of my server-side architecture, enabling me to build robust APIs and manage the flow of data effortlessly.<br/>
<br/>

When it comes to the frontend, React.js is my weapon of choice. Its declarative and component-based approach resonates deeply with me, allowing me to craft intuitive user interfaces that captivate and engage audiences. With Redux at my side, I orchestrate state management with precision, ensuring that my applications remain responsive and resilient.<br/>
<br/>

Driven by a passion for innovation and a relentless pursuit of excellence, I am not just a MERN Stack Developer—I am a visionary architect, sculpting the digital landscapes of tomorrow with creativity, skill, and boundless determination.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;