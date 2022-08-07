
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import logo from '../assets/p4.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'Products', 'cart', 'Signin '].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
  
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
  
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'Products', 'cart', 'Sign in '].map((item) => (
                  <li key={item}>
                    <Link to={`/${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    );
  };

export default Navbar