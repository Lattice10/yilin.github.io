import React from 'react';
import logo from './assets/logo192.png'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  const pages = ['Home', 'Blank', 'Slide', 'Tort'];
  const [isSmallPage, setIsSmallPage] = React.useState(false);

  const resizeWindow = () => {
    if (window.innerWidth <= 800) {
      setIsSmallPage(true);
    } else {
      setIsSmallPage(false);
    }
  };

  window.addEventListener('resize', resizeWindow);

  return (
    <div className='bar'>
      <img src={logo} className='icon'></img>
      <div className='navbar'>
      {pages.map((thispage, index) => {
        return <>
          {index !== 0 && <>&nbsp;|&nbsp;</>}
          <Link to={thispage} className='navlink'
          >{isSmallPage ? thispage.slice(0,1) : thispage }
          </Link>
        </>
      })}
      </div>
    </div>
  )
}