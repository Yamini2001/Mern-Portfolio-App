import React from 'react';
import './About.css';
import YaminiImage from '../About/images/Yamini.jpeg';

const About= () => {
  return (
    <div>
      <div className="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 about-img img">
                <img src={YaminiImage} alt="profile-pic"/>
            </div>
            <div className="col-md-6">
                Content
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
