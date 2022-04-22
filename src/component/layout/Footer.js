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
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="https://twitter.com/PAPs2202" target="_blanck">Twitter</a>
            </li>
            <li>
              <a href="#">Magic Eden</a>
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
