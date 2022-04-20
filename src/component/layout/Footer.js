import React from "react"
import footerLogo from "../asserts/logo.png"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footer-logo">
            <img src={footerLogo} alt="" />
          </div>
          <ul className="contactLinks max">
            <li>
              <a href="#">Discard</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Magic</a>
            </li>
            <li>
              <a href="#">rarity</a>
            </li>
            <li>
              <a href="#">Rarity (Coming Soon)</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
