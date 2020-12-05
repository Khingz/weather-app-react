import React from 'react';
import Search from './Search';

function Header() {
  return (
    <div className="Header">
        <div className='header-container'>
            <div className='brand'>
                <h3>KGWEATHER</h3>
            </div>
            <Search />
        </div>
      
    </div>
  );
}

export default Header;
