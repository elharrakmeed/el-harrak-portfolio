import { Link, Outlet } from "react-router-dom";
import './navbar.css';
import { useState } from "react";

export default function Navbar({onSwitch}){
  const [activeButton, setActiveButton] = useState('about');
  const [path, setPath] = useState('about');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);

  };

  // console.log(path);
  onSwitch(path)

  return (
    <>
      <div className="parentNavbarLinks">
        <ul>
          <li>
            <Link to='/'>
              <button
                onClick={() => {handleButtonClick("about"); setPath('about')}}
                id={activeButton === "about" ? 'toggleIsIt' : ''}
              >
                <i className='bx bx-user'></i>
                <h6>About</h6>
              </button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <button
                onClick={() => {handleButtonClick("resume"); setPath('resume')}}
                id={activeButton === "resume" ? 'toggleIsIt' : ''}
              >
                <i className='bx bx-file'></i>
                <h6>Resume</h6>
              </button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <button
                onClick={() => {handleButtonClick("works"); setPath('works')}}
                id={activeButton === "works" ? 'toggleIsIt' : ''}
              >
                <i className='bx bx-network-chart'></i>
                <h6>Works</h6>
              </button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <button
                onClick={() => {handleButtonClick("contact"); setPath('contact')}}
                id={activeButton === "contact" ? 'toggleIsIt' : ''}
              >
                <i className='bx bx-message-alt-detail'></i>
                <h6>Contact</h6>
              </button>
            </Link>
          </li>
        </ul>
        <br />
        <Outlet />
      </div>
    </>
  );
}
