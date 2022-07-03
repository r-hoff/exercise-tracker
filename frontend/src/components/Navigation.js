import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome, FcPlus } from 'react-icons/fc';

function Navigation() {
  return (
    <span className='navigation'>
      <Link className='nav-tab' to='/'>
        <FcHome />
        <div className='padding'>Home</div>
      </Link>
      <Link className='nav-tab' to='/add-exercise'>
        <FcPlus />
        <div className='padding'>Add New</div>
      </Link>
    </span>
  );
}

export default Navigation;
