import React from 'react';
import './Menu.css';
import YaminiImage from '../Menus/images/Yamini.jpeg';
import { FaHome} from "react-icons/fa";
import { FcAbout,FcPortraitMode,FcReading,FcContacts,FcVoicePresentation} from "react-icons/fc";
import { GrTechnology,GrProjects } from "react-icons/gr";

const Menu = ({toggle}) => {
  return (
    <>
      {toggle ? ( <div>
          <div className="navbar-profile-pic">
            <img src={YaminiImage} alt="profile-pic img"/>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <FaHome/> 
              Home
              </div>
              <div className="nav-link">
              <FcAbout/> 
              About
              </div>
              <div className="nav-link">
              <FcPortraitMode /> 
              Experience
              </div>
              <div className="nav-link">
              <GrTechnology /> 
             Tech Stack
              </div>
              <div className="nav-link">
              <FcReading/> 
              Education
              </div>
              <div className="nav-link">
              <GrProjects />
              Projects
              </div>
              <div className="nav-link">
              <FcVoicePresentation />
              Testimonial
              </div>
              <div className="nav-link">
              <FcContacts /> 
              Contact
              </div>
            </div>
          </div>
        </div>
        

        ) : (
          <h1>Icons</h1>
        ) }
    </>
  );
}

export default Menu;
