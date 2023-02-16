import './navbar.css';

import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () =>
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is gpt3?</a></p>
    <p><a href='#possibility'>Opan AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>

  </>


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className="navbar-signin gpt3__navbar-signin">
        <p>sigin in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="gpt3_navbar_mobile_menu_icon">
        {toggleMenu ?
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />:
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
      </div>
      {toggleMenu && (
      <div className="gpt3_navbar_menu_container scale-up-center">
        <Menu />
        <div className="navbar-signin  gpt3__navbar-menu_links_sigIn">
        <p>sigin in</p>
        <button type='button' onClick={console.log('presssed signin')}>Sign Up</button>
      </div>
      </div>

      )}
     
      


    </div>
  )
}

export default Navbar


