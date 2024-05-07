import React, { useState } from 'react';
import HomePage from '../../Pages/Home/HomePage';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './Sidebar.css';
import Menus from '../Menus/Menu';

const Sidebar = () => {
    const [toggle, setToggle] = useState(true); // Corrected useState usage

    // Change toggle
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <div className="sidebar-section">
                <div className={toggle ? "sidebar-toggle sidebar": "sidebar"}>
                    <div className="sidebar-toggle-icons">
                    
                        <p onClick={handleToggle}>
                            {
                                toggle
                                    ? <AiOutlineDoubleLeft size={30} />
                                    : <AiOutlineDoubleRight size={30} />
                            }
                        </p>
                       
                    </div>
                    <Menus toggle={toggle}/>
                </div>
                <div className="container">
                    <HomePage />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
