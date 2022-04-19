import React from "react"
import Plate1 from "./asserts/Plate1.png"
import Plate2 from "./asserts/Plate2.png"
import Plate3 from "./asserts/Plate3.png"

const RoadMap = () => {

  return (
    <>
      <section class="roadmap">
        <h1>roadmap</h1>
        <div class="roadmapContainer max">
          <div class="leftRoadMap">
            <div class="card">
              <img src={Plate1} alt="First Plate" />
            </div>
            <div class="card">
              <img src={Plate2} alt="Second Plate" />
            </div>
            <div class="card">
              <img src={Plate3} alt="Third Plate" />
            </div>
          </div>

          <div class="rightRoadMap">
            <ul>
              <li class="launchPaps">Launch PAPs Landing Page </li>
              <li>Minting 2,500 PAPs</li>
            </ul>
            <ul>
              <li>Launch Training Camp for PAPs </li>
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

      <section class="mobileRaodmap">
        <div class="roadmapHeading">
          <h1>roadmap</h1>
        </div>

        <div class="apr">
          <div class="aprimg">
            <img src={Plate1} alt="" />
          </div>
          <ul>
            <li class="launchPaps">Launch PAPs Landing Page</li>
            <li> Minting 2,500 PAPs</li>
          </ul>
        </div>
        <div class="apr may">
          <div class="aprimg">
            <img src={Plate2} alt="" />
          </div>
          <ul>
            <li> Launch Training Camp for PAPs</li>
            <li> Offer $BAMBOO Token Rewards</li>
            <li>Launch Supply Store for Weapon Entanglement</li>
            <li> Launch Mission Center</li>
          </ul>
        </div>
        <div class="apr jun">
          <div class="aprimg">
            <img src={Plate3} alt="" />
          </div>
          <ul>
            <li>Upgrade Mission Center</li>
            <li>Launch Job Center </li>
            <li>Upgrade Supply Store</li>
          </ul>
        </div>
      </section>

    </>
  )
}

export default RoadMap
