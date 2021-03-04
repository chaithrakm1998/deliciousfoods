import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => (
    <div className = "header" >
        <div className='options'>
        <Link className="option" to="/signin">SIGN UP </Link>
            
      <Link className='option' to='/signin'>SIGN IN </Link>
      
      </div>
    </div>
)

export default Header;