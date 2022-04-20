import React from "react"
import Weapons from "./asserts/Weapons.png"
import Paps_Plate from "./asserts/PapsPlate.png"

const OurStory = () => {
  return (
    <>
      <section className="theLoreOfPanda" id="our-story">
        <div className="loreOfPandas">
          <div className="leftLore">
            <h1>THE LORE OF THE PANDAS</h1>
            <p>
              Somewhere in the not too distant future, the earth we know is in
              the middle of an environmental apocalypse, with San Francisco
              being one of the last strongholds for humanity.
            </p>
            <br />

            <p>
              Fortunately, Scientists have discovered a unique chemical compound
              in Bamboo shoots that can be extracted into a potion to allow
              humanity to breathe in the new fog of air, dust and CO2 that has
              blanketed our atmosphere. In order to scour the planet for every
              last piece of Bamboo, 2,500 elite soldiers took an experimental
              medical procedure that altered their DNA to match those of the
              native Giant Panda embedded with special energy Gems that power
              their bodies. These 2,500 soldiers are known as the
              Post-Apocalyptic Pandas. They are tasked with a series of
              increasingly difficult missions to save what is left of humanity
              with their weapons, armor and a bit of luck.
            </p>
            <br />
            <p>This is their story.</p>
          </div>
          <div className="rightLore">
            <div className="weapons">
              <img src={Weapons} alt="" />
            </div>
          </div>
        </div>
        <div className="papsPlate">
          <img src={Paps_Plate} alt="" />
        </div>
      </section>
    </>
  )
}

export default OurStory
