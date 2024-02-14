import { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

const Header = () => {

  const [menuOption, setMenuOption] = useState(false);

  return (
    <header>
      <div className='header-content'>
        <Link to='/'>
          <h3>Annie Alfred</h3>
        </Link>
        <div className='menu-container'>
          <div className='menu-btn' onClick={() => setMenuOption(!menuOption)}>
          {menuOption ? (<FaTimes />) : (<IoMdMenu />)}
          </div>
          {menuOption &&
            (
              <div className='menu-option'>
                <ul className='menu-navBar'>
                  <li>
                    <a target="_blank" href="https://youtube.com/channel/UCOKP69IClCYhEtJZ_2M9lTw">
                      Youtube
                    </a>
                  </li>
                  <li>
                    <Link to='/projects'>Project</Link>
                  </li>
                  <li>
                    <Link to='/experience'>Experience</Link>
                  </li>
                  <li className='mail_button'>
                    <a target="_blank" href="mailto:fredileader@gmail.com">
                      Let's Meet Here
                    </a>
                  </li>
                </ul>
              </div>
            )}
        </div>
        <div className='topNavBar'>
          <ul className='navBar'>
            <li>
              <a target="_blank" href="https://youtube.com/channel/UCOKP69IClCYhEtJZ_2M9lTw">
                Youtube
              </a>
            </li>
            <li>
              <Link to='/projects'>Project</Link>
            </li>
            <li>
              <Link to='/experience'>Experience</Link>
            </li>
            <li className='mail_button'>
              <a target="_blank" href="mailto:fredileader@gmail.com">
                Let's Meet Here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
