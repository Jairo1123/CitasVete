import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Switch from '@material-ui/core/Switch';
import { createTheme, ThemeProvider } from '@mui/system';




function Navbar() {
  const [darkMode, setdarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

    
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <ThemeProvider theme={theme}>
      <IconContext.Provider value={{ color: 'fff' }}>
      
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            
          </Link>
          
          <div className="search-box">Veterinaria IJ
            </div>
          
                       
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <div className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars />
            </Link>
          </div>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
    </IconContext.Provider>
    </ThemeProvider>
      
    </>
  );
}

export default Navbar;