import React from "react"
import Plate1 from "./asserts/Plate1.png"
import Plate2 from "./asserts/Plate2.png"
import Plate3 from "./asserts/Plate3.png"

const RoadMap = () => {

  return (
    <div id="roadmap">
      <section className="roadmap">
        <h1>roadmap</h1>
        <span className="yellow-dot" />
        <div className="roadmapContainer max">
          <div className="leftRoadMap">
            <div className="card">
              <img src={Plate1} alt="First Plate" />
            </div>
            <div className="card">
              <img src={Plate2} alt="Second Plate" />
            </div>
            <div className="card">
              <img src={Plate3} alt="Third Plate" />
            </div>
          </div>

          <div className="rightRoadMap">
            <ul>
              <li className="launchPaps">Launch PAPS Landing Page </li>
              <li>Minting 2,500 PAPS</li>
            </ul>
            <ul>
              <li>Launch Training Camp for PAPS </li>
              <li>Offer $BAMBOO Token Rewards</li>
              <li>Launch Supply Store for Weapon Entanglement</li>
              <li>Launch Mission Center</li>
            </ul>
            <ul>
              <li>Upgrade Mission Center</li>
              <li>Launch Job Center </li>
              <li>Upgrade Supply Store</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mobileRaodmap">
        <div className="roadmapHeading">
          <h1>roadmap</h1>
        </div>

        <div className="apr">
        <div className="m-roadmap">
          <div className="aprimg">
            <img src={Plate1} alt="" />
          </div>
          <ul>
            <li className="launchPaps">Launch PAPS Landing Page</li>
            <li> Minting 2,500 PAPS</li>
          </ul>
          </div>
        </div>
        <div className="apr may">
        <div className="m-roadmap">
          <div className="aprimg">
            <img src={Plate2} alt="" />
          </div>
          <ul>
            <li> Launch Training Camp for PAPS</li>
            <li> Offer $BAMBOO Token Rewards</li>
            <li>Launch Supply Store for Weapon Entanglement</li>
            <li> Launch Mission Center</li>
          </ul>
          </div>
        </div>
        <div className="apr jun">
          <div className="m-roadmap">
          <div className="aprimg">
            <img src={Plate3} alt="" />
          </div>
          <ul>
            <li>Upgrade Mission Center</li>
            <li>Launch Job Center </li>
            <li>Upgrade Supply Store</li>
          </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoadMap
