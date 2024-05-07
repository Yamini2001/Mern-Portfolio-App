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
          <div>
          <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
            <FaHome title="Home"/> 
            </div>
            <div className="nav-link">
            <FcAbout title="About"/> 
            </div>
            <div className="nav-link">
            <FcPortraitMode title="Experience"/> 
            </div>
            <div className="nav-link">
            <GrTechnology title="Tech Stack"/> 
            </div>
            <div className="nav-link">
            <FcReading title="Education"/> 
            </div>
            <div className="nav-link">
            <GrProjects title="Projects"/>
            </div>
            <div className="nav-link">
            <FcVoicePresentation title="Testimonial"/>
            </div>
            <div className="nav-link">
            <FcContacts title="Contact"/> 
            </div>
          </div>
        </div>
        </div>
        )}
    </>
  );
}

export default Menu;
