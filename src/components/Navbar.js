import React, {useState} from 'react';
import Logo from '../assets/images/logo.png'
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../css/navbar.css';



function Navbar() {
  const [openLinks,setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    
    <div className='navbar'>
      <div className='leftNav'id={openLinks ? "open" : "close"}>
        <Link to="/">
           <img src={Logo} width={182} height={64} />
        </Link> 
        <div className='hiddenLinks'>
          <Link to="/" onClick={toggleNavbar}>Home</Link>
          <Link to="/about" onClick={toggleNavbar}>About</Link>
        </div>
      </div>
      <div className='rightNav'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon/>
          </button>
      </div>
    </div>
  )
}

export default Navbar
