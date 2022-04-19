import React, { useState } from "react"
import logo from "../asserts/logo.png"
import discrod from "../asserts/discrod.png"
import twitter from "../asserts/twitter.png"
import cross from "../asserts/close-menu.png"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseMenu=()=>{
    setIsOpen(false)
  }
  const handleOpenMenu=()=>{
    setIsOpen(true)
    console.log("op")
  }
  return (
    <>
      <header class="header max">
        <div class="container">
          <div class="logonIcon">
            <div class="logo">
              <img src={logo} alt="" />
            </div>
            <div class="toggle" onClick={handleOpenMenu}>
              <i class="fa fa-bars"></i>
            </div>
          </div>
          <ul class={`listItems ${isOpen ? "show" : ""}`}>
            <li className="close-menu" onClick={handleCloseMenu}>
              <img src={cross} alt="" />
            </li>
            <li>
              <a href="#">our story</a>
            </li>
            <li>
              <a href="#">roadmap</a>
            </li>
            <li>
              <a href="#">faq</a>
            </li>
            <li>
             
            <div className="mob-link">
                    <img src={discrod} />
                    <img src={twitter} />
                    </div>

              <button class="btn top-btn">getapanda</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
