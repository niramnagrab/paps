import Group from "./asserts/Group.png"
import Panda from "./asserts/Panda.png"
import OurStory from "./Ourstory"
import RoadMap from "./Roadmap"
import Faqs from "./Faqs"

const Home = () => {

  return (
    <>
      <section className="post max">
        <div className=" leftPostContainer innerPost">
          <div className="postImage">
            <img src={Group} alt="" />
          </div>
          <button className="buyOnmegic">Buy on Magic Eden</button>
          <div className="home-text">
          <h1>2,500 pandas to take over the post apocalyptic city</h1>
          <p>
            Post Apocalyptic Pandas are a collection of 2,500 hand-drawn
            customizable NFTs warriors that are here to rescue humanity from the
            brink of their own ecological devastation.
          </p>
          <p>
            Pick your weapon of choice from a massive arsenal with the $BAMBOO
            earned from completing team missions against the forces of nature.{" "}
          </p>
          </div>
        </div>

        <div className="pandaImage">
          <img src={Panda} alt="Panda Image" />
        </div>
      </section>
      <OurStory />
      <RoadMap />
      <Faqs />
    </>
  )
}

export default Home
