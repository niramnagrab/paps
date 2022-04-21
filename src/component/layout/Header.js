import React, { useState } from "react"
import logo from "../asserts/logo.png"
import discrod from "../asserts/discrod.png"
import twitter from "../asserts/twitter.png"
import cross from "../asserts/close-menu.png"
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseMenu = () => {
    setIsOpen(false)
    console.log("op")

  }
  const handleOpenMenu = () => {
    setIsOpen(true)
  }
  return (
    <>
      <header className="header max">
        <div className="container">
          <div className="logonIcon">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="toggle" onClick={handleOpenMenu}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
          <ul className={`listItems ${isOpen ? "show" : ""}`}>
            <li className="close-menu" onClick={handleCloseMenu}>
              <img src={cross} alt="" />
            </li>
            <li>
            <Link  onClick={()=>setIsOpen(false)} to="our-story" smooth={true} duration={500}>our story</Link>
            </li>
            <li>
            <Link onClick={()=>setIsOpen(false)} to="roadmap" smooth={true} duration={500}>roadmap</Link>
            </li>
            <li>
            <Link onClick={()=>setIsOpen(false)} to="faq" smooth={true} duration={500}>faq</Link>
            </li>
            <li>
              <div className="mob-link">
                <img src={discrod} />
                <a href="https://twitter.com/PAPs2202" target="_blanck"><img src={twitter} /></a>
              </div>
              <button className="btn top-btn">Get Started</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
