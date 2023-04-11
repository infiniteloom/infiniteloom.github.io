import React, { useEffect, useState } from "react";

function Navbar() {
  const [topHideAll, setTopHideAll] = useState(false)
  const [rightHideAll, setRightHideAll] = useState(false)
  const [bottomHideAll, setBottomHideAll] = useState(false)
  const [leftHideAll, setLeftHideAll] = useState(false)

  const navHoverTop = () => {
    console.log('top')
    setTopHideAll(!topHideAll)
  }
  const navHoverRight = () => {
    console.log('tight')
    setRightHideAll(!rightHideAll)
  }
  const navHoverBottom = () => {
    console.log('bottom')
    setBottomHideAll(!bottomHideAll)
  }
  const navHoverLeft = () => {
    console.log('left')
    setLeftHideAll(!leftHideAll)
  }
  return (
    <header >
      <div>
        <nav className="main-nav-container">
          
            <a className={`nav-top h1 main-nav-item 
              ${ rightHideAll ? 'hidden' : '' } 
              ${bottomHideAll ?  'hidden' : '' } 
              ${leftHideAll ? 'hidden' : '' }`} 
              href="#intro" onMouseEnter={navHoverTop} onMouseLeave={navHoverTop} >
              Lea 
            </a>
            
            <a className={`nav-right main-nav-item 
              ${ leftHideAll ? 'hidden' : '' }
              ${ topHideAll ? 'hidden' : '' } 
              ${ bottomHideAll ? 'hidden' : '' }`} 
              href="#projects" onMouseEnter={navHoverRight} onMouseLeave={navHoverRight} >
              Projects
            </a>
            <a  className={`nav-bottom main-nav-item 
              ${ topHideAll ? 'hidden' : '' } 
              ${ rightHideAll ? 'hidden' : '' } 
              ${ leftHideAll ? 'hidden' : '' }`} 
              href=" #contact" onMouseEnter={navHoverBottom} onMouseLeave={navHoverBottom} >
              Contact
            </a>
            <a className={`nav-left main-nav-item 
              ${ bottomHideAll ? 'hidden' : '' } 
              ${ topHideAll ? 'hidden' : '' } 
              ${ rightHideAll ? 'hidden' : '' }`} 
              href="#services" onMouseEnter={navHoverLeft} onMouseLeave={navHoverLeft} >
              Services
            </a>
            
            
        </nav>
      </div>
    </header>
  );


}
// function navEffect() {
//   return ``
// }
// function handleMouseEnter(e){
//   const [isHover, setIsHovering] = useState(false);
//   setIsHovering(true)
//   console.log('is hovering', e.target)
// }

export default Navbar